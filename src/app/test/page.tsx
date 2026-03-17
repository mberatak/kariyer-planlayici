import Link from 'next/link';
import { Clock, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const testOptions = [
  {
    id: 'hizli',
    href: '/test/hizli',
    emoji: '⚡',
    title: 'Hızlı Test',
    duration: '5 dakika',
    questions: '10 soru',
    description: 'Temel kişiliğine göre en uygun 3 alanını hızlıca bul.',
    gradient: 'from-violet/20 to-mint/10',
    border: 'border-violet/20',
    cta: 'Başlat',
    ctaClass: 'btn-primary',
    badge: 'Popüler',
    features: [
      'Anlık sonuç',
      'Kayıt gerektirmez',
      'Kişilik & teknik sorular',
    ],
  },
  {
    id: 'detayli',
    href: '/test/detayli',
    emoji: '🔬',
    title: 'Detaylı Test',
    duration: '25 dakika',
    questions: '50 soru',
    description: '5 kategoride derinlemesine profil çıkar. Kapsamlı raporla.',
    gradient: 'from-coral/20 to-violet/10',
    border: 'border-coral/20',
    cta: 'Başlat',
    ctaClass: 'btn-coral',
    badge: 'Tam Analiz',
    features: [
      'Teknik + sosyal + motivasyon',
      'Detaylı yüzdelik skorlar',
      'PDF rapor (yakında)',
    ],
  },
];

export default function TestPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 border border-violet/20 text-violet text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Kariyer Testi
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Test <span className="gradient-text">türünü seç</span>
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            İki seçeneğin var. Hızlı bir fikir almak için 5 dakikalık, derinlemesine analiz için 25 dakikalık testi seç.
          </p>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testOptions.map((opt) => (
            <div
              key={opt.id}
              className={`glass-card rounded-2xl p-8 border ${opt.border} bg-gradient-to-br ${opt.gradient} hover:border-white/20 transition-all group relative overflow-hidden`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">
                  {opt.badge}
                </span>
              </div>

              <div className="text-5xl mb-6">{opt.emoji}</div>

              <h2 className="text-2xl font-black mb-2">{opt.title}</h2>

              <div className="flex items-center gap-4 mb-5 text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {opt.duration}
                </span>
                <span>•</span>
                <span>{opt.questions}</span>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed">{opt.description}</p>

              <ul className="space-y-2 mb-8">
                {opt.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 text-mint flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={opt.href}
                id={`test-cta-${opt.id}`}
                className={`${opt.ctaClass} inline-flex items-center gap-2 w-full justify-center`}
              >
                {opt.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Info */}
        <p className="text-center text-white/30 text-sm mt-10">
          Her iki test de ücretsizdir ve kayıt gerektirmez.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Kariyer Testini Seç — Alanım Ne?',
};
