import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    id: '1',
    emoji: '🤖',
    title: 'ChatGPT Sonrası AI Mühendisliğine Giriş',
    excerpt: 'Üretken yapay zekanın yükselişiyle birlikte AI mühendisi olmak için hangi becerilere ihtiyaç var?',
    category: 'AI/ML',
    readTime: 7,
    date: '2025-03-10',
    tags: ['AI', 'LLM', 'Kariyer'],
  },
  {
    id: '2',
    emoji: '💼',
    title: 'Türkiye\'de Yazılım Maaşları 2025: Kapsamlı Rehber',
    excerpt: 'Junior\'dan senior\'a, tüm alanlarda Türkiye yazılım maaşlarının güncel durumu ve 2025 öngörüleri.',
    category: 'Kariyer',
    readTime: 9,
    date: '2025-03-01',
    tags: ['Maaş', 'Türkiye', 'Kariyer'],
  },
  {
    id: '3',
    emoji: '🔐',
    title: 'Siber Güvenlikte Kariyer: CTF\'den Gerçek İşe',
    excerpt: 'Hack The Box ve TryHackMe ile nasıl başlanır? İlk işe 6 ayda nasıl ulaşılır?',
    category: 'Siber Güvenlik',
    readTime: 8,
    date: '2025-02-20',
    tags: ['CTF', 'Pentest', 'Kariyer'],
  },
  {
    id: '4',
    emoji: '🚀',
    title: 'DevOps 2025: Kubernetes mi, Serverless mi?',
    excerpt: 'Modern DevOps ekipleri hangi teknolojileri kullanıyor? 2025\'in en değerli becerileri.',
    category: 'DevOps',
    readTime: 6,
    date: '2025-02-10',
    tags: ['Kubernetes', 'Cloud', 'DevOps'],
  },
  {
    id: '5',
    emoji: '🎮',
    title: 'Türkiye\'nin Oyun Endüstrisi: Peak\'ten Dream\'e',
    excerpt: 'Türkiye\'den çıkan unicorn oyun şirketlerinin hikayesi ve oyun geliştirmede kariyer fırsatları.',
    category: 'Oyun Geliştirme',
    readTime: 5,
    date: '2025-01-28',
    tags: ['GameDev', 'Türkiye', 'Startup'],
  },
  {
    id: '6',
    emoji: '📊',
    title: 'Portfolio Yapmadan İş Bulmak Zor — Veri Diyor',
    excerpt: 'GitHub\'dan LinkedIn\'e 500 başvuruyu analiz ettik. Portfolio olmadan işe alınma oranı ne?',
    category: 'Kariyer',
    readTime: 10,
    date: '2025-01-15',
    tags: ['Portfolio', 'İş Arama', 'GitHub'],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Kariyer <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Türkiye yazılım ekosistemi, maaş verileri, alan analizleri ve kariyer tavsiyeleri.
          </p>
        </div>

        {/* Featured */}
        <div className="glass-card rounded-2xl p-8 md:p-10 mb-8 relative overflow-hidden border border-violet/20 group hover:border-violet/40 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet/20 text-violet">
                Öne Çıkan
              </span>
              <span className="text-xs text-white/40">{posts[0].readTime} dakika okuma</span>
            </div>
            <div className="text-5xl mb-4">{posts[0].emoji}</div>
            <h2 className="text-2xl md:text-3xl font-black mb-4 group-hover:gradient-text transition-all">
              {posts[0].title}
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">{posts[0].excerpt}</p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/40 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(posts[0].date).toLocaleDateString('tr-TR')}
              </span>
              <Link href="#" className="btn-primary text-sm py-2 px-5 inline-flex items-center gap-2">
                Oku <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.slice(1).map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all group"
            >
              <div className="text-4xl mb-5">{post.emoji}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 font-medium">
                  {post.category}
                </span>
                <span className="text-white/30 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}dk
                </span>
              </div>
              <h2 className="font-bold text-lg mb-2 leading-snug group-hover:text-violet transition-colors">
                {post.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/40">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href="#"
                className="text-sm text-violet font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Devamını oku <ArrowRight className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
