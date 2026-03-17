'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Trophy, RefreshCw, Download } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { useTestStore } from '@/lib/store/test-store';
import { getAreaById } from '@/lib/data/areas';

const COLORS = {
  'web-dev': '#74B0FF',
  'mobile': '#FF6B6B',
  'ai-ml': '#9B59B6',
  'data-science': '#4ECDC4',
  'cybersecurity': '#FF6B6B',
  'devops': '#4ECDC4',
  'game-dev': '#9B59B6',
  'embedded': '#F7C59F',
  'software-architecture': '#9B59B6',
  'qa-testing': '#4ECDC4',
  'product': '#FF6B6B',
  'data-engineering': '#74B0FF',
};

const AREA_NAMES: Record<string, string> = {
  'web-dev': 'Web Dev',
  'mobile': 'Mobil',
  'ai-ml': 'AI/ML',
  'data-science': 'Veri Bilimi',
  'cybersecurity': 'Siber Güv.',
  'devops': 'DevOps',
  'game-dev': 'Oyun Dev',
  'embedded': 'Gömülü',
  'software-architecture': 'Mimari',
  'qa-testing': 'QA/Test',
  'product': 'Ürün Yönt.',
  'data-engineering': 'Veri Müh.',
};

export default function SonucPage() {
  const router = useRouter();
  const { result, resetTest } = useTestStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !result) {
      router.push('/test');
    }
  }, [mounted, result, router]);

  if (!mounted || !result) return null;

  const top3 = result.rankedAreas.slice(0, 3);
  const top8 = result.rankedAreas.slice(0, 8);

  const radarData = top8.map((ra) => ({
    area: AREA_NAMES[ra.areaId] ?? ra.areaId,
    score: ra.score,
    fullMark: 100,
  }));

  const rankBadges = ['🥇', '🥈', '🥉'];
  const rankColors = ['text-amber-custom', 'text-white/70', 'text-white/50'];
  const rankBorders = ['border-amber-custom/30', 'border-white/10', 'border-white/5'];
  const rankBgs = ['bg-amber-custom/5', 'bg-white/2', 'bg-transparent'];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Sonuçların <span className="gradient-text">hazır!</span>
          </h1>
          <p className="text-white/50 max-w-md mx-auto">
            {result.testType === 'quick' ? 'Hızlı test' : 'Detaylı test'} tamamlandı.
            Güçlü olduğun alanlar aşağıda sıralandı.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Radar Chart */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-6 text-white/80">Alan Profili</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis
                    dataKey="area"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }}
                  />
                  <Radar
                    name="Skor"
                    dataKey="score"
                    stroke="#9B59B6"
                    fill="#9B59B6"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top 3 */}
          <div>
            <h2 className="font-bold text-lg mb-6 text-white/80">Sana En Uygun Alanlar</h2>
            <div className="space-y-3">
              {top3.map((ra, i) => {
                const area = getAreaById(ra.areaId);
                if (!area) return null;
                return (
                  <Link
                    key={ra.areaId}
                    href={`/alanlar/${area.slug}`}
                    className={`block glass-card rounded-xl p-5 border ${rankBorders[i]} ${rankBgs[i]} hover:border-white/15 transition-all group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{rankBadges[i]}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{area.emoji}</span>
                            <span className={`font-bold ${rankColors[i]}`}>{area.name}</span>
                          </div>
                          <div className="text-xs text-white/40 mt-0.5">{area.tags.slice(0, 3).join(' · ')}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-black ${rankColors[i]}`}>%{ra.score}</div>
                        <div className="text-xs text-white/30">uyum</div>
                      </div>
                    </div>
                    {/* Score bar */}
                    <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${ra.score}%`,
                          background: `${COLORS[ra.areaId as keyof typeof COLORS] ?? '#9B59B6'}`,
                          boxShadow: `0 0 8px ${COLORS[ra.areaId as keyof typeof COLORS] ?? '#9B59B6'}`,
                        }}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-violet mt-3 group-hover:gap-2 transition-all">
                      Alan detaylarını gör <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* All scores */}
        <div className="glass-card rounded-2xl p-7 mb-10">
          <h2 className="font-bold text-lg mb-6 text-white/80">
            <Trophy className="w-5 h-5 inline mr-2 text-amber-custom" />
            Tüm Alan Skorları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {result.rankedAreas.map((ra) => {
              const area = getAreaById(ra.areaId);
              if (!area) return null;
              const color = COLORS[ra.areaId as keyof typeof COLORS] ?? '#9B59B6';
              return (
                <div key={ra.areaId} className="flex items-center gap-3">
                  <span className="text-xl">{area.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="text-white/70">{area.shortName}</span>
                      <span className="font-bold text-white/90" style={{ color }}>%{ra.score}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${ra.score}%`, background: color }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/alanlar/${getAreaById(top3[0]?.areaId)?.slug ?? ''}`}
            className="btn-primary flex items-center gap-2"
          >
            <Trophy className="w-4 h-4" />
            {getAreaById(top3[0]?.areaId)?.name} alanını keşfet
          </Link>
          <Link href="/alanlar" className="btn-ghost flex items-center gap-2">
            Tüm Alanları Gör
          </Link>
          <button
            onClick={() => {
              resetTest();
              router.push('/test');
            }}
            className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Yeniden Yap
          </button>
        </div>
      </div>
    </div>
  );
}
