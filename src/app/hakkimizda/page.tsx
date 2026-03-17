import Link from 'next/link';
import { ArrowRight, Target, Heart, Users } from 'lucide-react';

const team = [
  { name: 'Platform', role: 'Kariyer Yönlendirme', emoji: '🎯' },
  { name: 'Test Sistemi', role: 'Kişilik + Teknik Analiz', emoji: '🧠' },
  { name: 'Veri', role: 'Türkiye Pazar Araştırması', emoji: '📊' },
];

const values = [
  {
    icon: Target,
    title: 'Amaca Yönelik',
    desc: 'Öğrencilerin doğru alana giderek zaman ve çaba kaybetmesini önlüyoruz.',
    color: 'text-violet',
    bg: 'bg-violet/10',
  },
  {
    icon: Heart,
    title: 'Tamamen Ücretsiz',
    desc: 'Temel özellikler hiçbir zaman ücretli olmayacak. Türkiye öğrencileri için.',
    color: 'text-coral',
    bg: 'bg-coral/10',
  },
  {
    icon: Users,
    title: 'Topluluk Odaklı',
    desc: 'Gerçek veriler, gerçek hikayeler ve gerçek mentörlerle büyüyoruz.',
    color: 'text-mint',
    bg: 'bg-mint/10',
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-3xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-7xl mb-6">🧭</div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Doğru alana <span className="gradient-text">yönlendir</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Türkiye'de her yıl binlerce bilgisayar mühendisliği öğrencisi hangi alana gideceğini bilmeden
            mezun oluyor. Alanım Ne?, bu sorunu çözmek için tasarlandı.
          </p>
        </div>

        {/* Story */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-black mb-5">Hikayemiz</h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              Bir grup bilgisayar mühendisliği öğrencisi olarak hepimiz aynı soruyla boğuştuk: <em>"Ben ne yapmalıyım?"</em>
              Web mi? Yapay zeka mı? Siber güvenlik mi?
            </p>
            <p>
              Danıştığımız hocalar, okuduğumuz bloglar hep farklı şeyler söylüyordu. Neden bize özel bir
              yönlendirme yoktu?
            </p>
            <p>
              İşte bu yüzden Alanım Ne?'yi kurduk. Kişilik özelliklerini, teknik ilgini ve kariyer hedeflerini
              analiz eden bir test sistemi, Türkiye'ye özel maaş ve iş piyasası verileri ve somut kaynaklarla.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {values.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-6 text-center">
              <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <v.icon className={`w-6 h-6 ${v.color}`} />
              </div>
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="glass-card rounded-2xl p-8 mb-8 border border-violet/20">
          <h2 className="text-2xl font-black mb-4">Misyonumuz</h2>
          <p className="text-white/60 leading-relaxed">
            Türkiye'deki her yazılım ve bilgisayar mühendisliği öğrencisinin <strong className="text-white">
            doğru kariyer alanına</strong> yönlenmesini ve bu alana uygun kaynaklar, mentor ağı ve topluluğa
            erişmesini sağlamak.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: '12', label: 'Alan Analizi' },
            { value: '50+', label: 'Test Sorusu' },
            { value: '6', label: 'Blog Yazısı' },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-5 text-center">
              <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-white/40">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/test" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
            Testini Yap
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
