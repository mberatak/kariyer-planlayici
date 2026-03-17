import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const roadmapItems = {
  'web-gelistirme': {
    name: 'Web Geliştirme',
    emoji: '🌐',
    months: {
      3: ['HTML/CSS temellerini öğren', 'JavaScript ES6+ öğren', 'İlk statik web siteni yap', 'Git & GitHub kullanmaya başla'],
      6: ['React.js öğren', 'REST API entegrasyon yap', 'Bir tam stack proje tamamla', 'Portfolio siteni yayınla'],
      12: ['Next.js ile 2 sayfalı uygulama', 'Backend (Node.js/Express) öğren', 'PostgreSQL ile veri yönet', 'İlk staja başvur'],
    },
  },
  'ai-ml': {
    name: 'AI & Machine Learning',
    emoji: '🤖',
    months: {
      3: ['Python temellerini güçlendir', 'NumPy/Pandas öğren', 'İstatistik ve doğrusal cebir gözden geçir', 'İlk veri analizi notebook\'unu yap'],
      6: ['scikit-learn ile ML modelleri kur', 'Kaggle\'da 3 yarışmaya katıl', 'Temel derin öğrenme (PyTorch/TF)', 'Kendi ML projenle GitHub\'ı doldur'],
      12: ['LLM API entegrasyonu (OpenAI)', 'MLflow ile model versiyonlama', 'Computer Vision veya NLP odak seç', 'İlk staj/araştırma başvurusu'],
    },
  },
  'devops-cloud': {
    name: 'DevOps & Cloud',
    emoji: '🚀',
    months: {
      3: ['Linux komut satırı & Bash script', 'Docker temellerini öğren', 'AWS Free Tier ile ilk VM kur', 'Git workflow & CI/CD kavramı'],
      6: ['Docker Compose ile çoklu servis', 'GitHub Actions ile CI/CD pipeline', 'Kubernetes temel kavramlar (minikube)', 'Terraform ile altyapı kodu'],
      12: ['AWS Solutions Architect Associate sınavı', 'Monitoring (Prometheus/Grafana) kur', 'Kubernetes cluster production', 'İlk DevOps stajına başvur'],
    },
  },
};

export default function RoadmapPage() {
  const defaultArea = roadmapItems['web-gelistirme'];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Kariyer <span className="gradient-text">Roadmap</span>
          </h1>
          <p className="text-white/50 max-w-lg mx-auto mb-6">
            3, 6 ve 12 aylık somut adımlarla başlangıçtan staja kadar yolculuğun.
          </p>
          <Link href="/test" className="btn-primary inline-flex items-center gap-2">
            Kendi alanın için roadmap al
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Roadmap selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(roadmapItems).map(([key, item]) => (
            <a
              key={key}
              href={`#${key}`}
              className="glass-card px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:border-white/20 transition-all"
            >
              {item.emoji} {item.name}
            </a>
          ))}
        </div>

        {/* Roadmaps */}
        {Object.entries(roadmapItems).map(([key, item]) => (
          <div key={key} id={key} className="mb-12 scroll-mt-24">
            <div className="flex items-center gap-3 mb-7">
              <span className="text-4xl">{item.emoji}</span>
              <h2 className="text-2xl font-black">{item.name}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {([3, 6, 12] as const).map((month) => (
                <div key={month} className="glass-card rounded-2xl p-6">
                  <div className={`text-sm font-bold mb-4 flex items-center gap-2 ${
                    month === 3 ? 'text-mint' : month === 6 ? 'text-violet' : 'text-coral'
                  }`}>
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                      month === 3 ? 'bg-mint/15' : month === 6 ? 'bg-violet/15' : 'bg-coral/15'
                    }`}>
                      {month}
                    </span>
                    {month}. Ay
                  </div>
                  <ul className="space-y-3">
                    {item.months[month].map((task, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                          month === 3 ? 'bg-mint/15 text-mint' : month === 6 ? 'bg-violet/15 text-violet' : 'bg-coral/15 text-coral'
                        }`}>
                          {i + 1}
                        </span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet/10 to-coral/10 pointer-events-none" />
          <div className="relative">
            <p className="text-white/60 mb-6">Kişilik testine göre kişiselleştirilmiş roadmap için testi yap.</p>
            <Link href="/test" className="btn-primary inline-flex items-center gap-2">
              Testi Yap <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
