import Link from 'next/link';
import { ArrowRight, Zap, Clock, Star, Users, BookOpen, TrendingUp, Shield } from 'lucide-react';
import { areas } from '@/lib/data/areas';

const stats = [
  { value: '12', label: 'Kariyer Alanı', icon: '🌐' },
  { value: '50+', label: 'Detaylı Soru', icon: '❓' },
  { value: '5dk', label: 'Hızlı Test', icon: '⚡' },
  { value: '%95', label: 'Memnuniyet', icon: '✨' },
];

const features = [
  {
    icon: Zap,
    title: "Anında Sonuç",
    desc: "10 soruda güçlü alanlarını öğren. 5 dakika, tam yön.",
    color: "text-violet",
    bg: "bg-violet/10",
  },
  {
    icon: TrendingUp,
    title: "Kariyer Yolu",
    desc: "Junior'dan CTO'ya kadar her adım için roadmap.",
    color: "text-coral",
    bg: "bg-coral/10",
  },
  {
    icon: BookOpen,
    title: "Öğrenme Rehberi",
    desc: "Ücretsiz kurslar, kitaplar ve mini proje fikirleri.",
    color: "text-mint",
    bg: "bg-mint/10",
  },
  {
    icon: Shield,
    title: "Türkiye Odaklı",
    desc: "Güncel maaş verileri, şirketler ve staj imkanları.",
    color: "text-amber-custom",
    bg: "bg-amber-custom/10",
  },
];

const previewAreas = areas.slice(0, 6);

const successStories = [
  { emoji: "🚀", quote: "Dünya sadece gömülü yazılımdan ibaret değilmiş!", name: "Furkan S.", year: "3. Sınıf CENG" },
  { emoji: "🤖", quote: "Backend alanı acaba bana uygun mu diye düşünüyordum. Testten sonra backend alanına yönlendim.", name: "Ahmet Faruk T.", year: "3. Sınıf CENG" },
  { emoji: "🎮", quote: "Bu site sayesinde web alanına yöneldim. İyi ki varsın!", name: "Alperen A.", year: "3. Sınıf ITS" },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-grid overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-coral/15 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-mint/15 rounded-full blur-3xl animate-pulse-slow animation-delay-800" />
        </div>

        <div className="relative container-custom pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 border border-violet/20 text-violet text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-violet rounded-full animate-pulse" />
              {"Türkiye'nin İlk Yazılım Kariyer Rehberi"}
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-slide-up text-balance">
              {"Yazılımda "}
              <span className="gradient-text">alanın</span>{" "}
              ne olmalı?
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200 text-balance">
              Kişilik testinle 12+ kariyer alanı içinden sana en uygun olanı bul.
              Maaş verileri, roadmap ve kaynaklar bir arada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
              <Link
                href="/test"
                id="hero-cta-test"
                className="btn-primary flex items-center gap-2 text-base px-8 py-4"
              >
                <Zap className="w-5 h-5" />
                Ücretsiz Testi Başlat
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/alanlar"
                id="hero-cta-alanlari"
                className="btn-ghost flex items-center gap-2 text-base px-8 py-4"
              >
                Alanları Keşfet
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-fade-in animation-delay-600">
              <span className="flex items-center gap-1.5 text-sm text-white/40">
                <Clock className="w-4 h-4" /> 5 dakika
              </span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="flex items-center gap-1.5 text-sm text-white/40">
                <Star className="w-4 h-4" /> Ücretsiz
              </span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="flex items-center gap-1.5 text-sm text-white/40">
                <Users className="w-4 h-4" /> Kayıt gerekmez
              </span>
            </div>
          </div>

          {/* Area pills preview */}
          <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto animate-fade-in animation-delay-800">
            {areas.map((area) => (
              <Link
                key={area.id}
                href={`/alanlar/${area.slug}`}
                className="glass-card px-4 py-2.5 rounded-full text-sm font-medium text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2 hover:border-white/20 hover:scale-105"
              >
                <span>{area.emoji}</span>
                <span>{area.shortName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-6 text-center hover:border-white/15 transition-all">
                <div className="text-4xl mb-2">{s.icon}</div>
                <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Neden <span className="gradient-text">Alanım Ne?</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Genel kariyer testlerinden farklı olarak, yazılım öğrencileri için derinlemesine tasarlandı.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all group">
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Preview Grid */}
      <section className="section-padding bg-surface/30">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              12 <span className="gradient-text">Kariyer Alanı</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Maaş, iş bulma kolaylığı ve kariyer yolları hakkında kapsamlı bilgi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewAreas.map((area) => (
              <Link
                key={area.id}
                href={`/alanlar/${area.slug}`}
                className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{area.emoji}</div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${area.difficulty === 'Kolay'
                      ? 'bg-mint/15 text-mint'
                      : area.difficulty === 'Orta'
                        ? 'bg-amber-custom/15 text-amber-custom'
                        : 'bg-coral/15 text-coral'
                      }`}
                  >
                    {area.difficulty}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:gradient-text transition-all">{area.name}</h3>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">{area.description}</p>
                <div className="flex items-center justify-between text-xs text-white/40">
                  <span>💼 {area.jobMarket}</span>
                  <span className="text-mint font-medium">{area.salaryTR.junior}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs text-violet font-medium group-hover:gap-2 transition-all">
                  Detayları gör <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/alanlar" className="btn-ghost inline-flex items-center gap-2">
              Tüm 12 alanı gör
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Başarı <span className="gradient-text">Hikayeleri</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-7 hover:border-white/15 transition-all">
                <div className="text-4xl mb-5">{s.emoji}</div>
                <p className="text-white/80 leading-relaxed mb-6 italic">{"`" + s.quote + "`"}</p>
                <div>
                  <div className="font-semibold text-sm">{s.name}</div>
                  <div className="text-white/40 text-xs">{s.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative glass-card rounded-3xl p-12 text-center overflow-hidden">
            {/* Glow orbs inside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-coral/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black mb-5">
                Alanını<br />
                <span className="gradient-text">bugün keşfet</span>
              </h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                5 dakikalık test ile kariyer yönünü belirle. Tamamen ücretsiz, kayıt gerektirmez.
              </p>
              <Link href="/test" id="cta-bottom" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
                <Zap className="w-5 h-5" />
                Hemen Başla
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
