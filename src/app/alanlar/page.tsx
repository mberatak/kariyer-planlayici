import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { areas } from '@/lib/data/areas';

export default function AlanlarPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            12 Kariyer <span className="gradient-text">Alanı</span>
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Her alanda maaş verileri, kariyer yolu, öğrenme kaynakları ve Türkiye pazar durumu.
          </p>
          <Link href="/test" className="btn-primary inline-flex items-center gap-2 mt-6">
            Testi yaparak en uygununu bul
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Difficulty filter legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { label: 'Kolay', color: 'bg-mint/15 text-mint border-mint/20' },
            { label: 'Orta', color: 'bg-amber-custom/15 text-amber-custom border-amber-custom/20' },
            { label: 'Zor', color: 'bg-coral/15 text-coral border-coral/20' },
          ].map((d) => (
            <div
              key={d.label}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${d.color}`}
            >
              {d.label}
            </div>
          ))}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet/10 text-violet border border-violet/20">
            İş Piyasası
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`/alanlar/${area.slug}`}
              id={`area-card-${area.id}`}
              className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all group block"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="text-4xl group-hover:scale-110 transition-transform">{area.emoji}</div>
                <div className="flex flex-col items-end gap-1.5">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      area.difficulty === 'Kolay'
                        ? 'bg-mint/15 text-mint'
                        : area.difficulty === 'Orta'
                        ? 'bg-amber-custom/15 text-amber-custom'
                        : 'bg-coral/15 text-coral'
                    }`}
                  >
                    {area.difficulty}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      area.jobMarket === 'Çok İyi'
                        ? 'bg-mint/15 text-mint'
                        : area.jobMarket === 'İyi'
                        ? 'bg-violet/15 text-violet'
                        : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {area.jobMarket}
                  </span>
                </div>
              </div>

              <h2 className="font-black text-xl mb-1">{area.name}</h2>
              <p className="text-white/50 text-sm mb-5 line-clamp-2">{area.description}</p>

              {/* Salary */}
              <div className="border-t border-white/5 pt-4 mb-5">
                <p className="text-xs text-white/30 mb-2">Junior Maaş (TR)</p>
                <p className="text-sm font-semibold text-mint">{area.salaryTR.junior}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {area.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/40">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs text-violet font-medium group-hover:gap-2 transition-all">
                Detayları Gör <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Tüm Kariyer Alanları — Alanım Ne?',
};
