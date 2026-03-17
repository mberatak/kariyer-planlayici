import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Platform: [
    { href: '/test', label: 'Kariyer Testi' },
    { href: '/alanlar', label: 'Tüm Alanlar' },
    { href: '/roadmap', label: 'Kariyer Roadmap' },
    { href: '/blog', label: 'Blog' },
  ],
  Alanlar: [
    { href: '/alanlar/web-gelistirme', label: 'Web Geliştirme' },
    { href: '/alanlar/yapay-zeka-ml', label: 'AI & Machine Learning' },
    { href: '/alanlar/siber-guvenlik', label: 'Siber Güvenlik' },
    { href: '/alanlar/devops-cloud', label: 'DevOps & Cloud' },
  ],
  Hakkında: [
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/gizlilik', label: 'Gizlilik Politikası' },
    { href: '/kvkk', label: 'KVKK' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface mt-20">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-gradient flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-text">Alanım</span>
                <span className="text-white"> Ne?</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Yazılım ve bilgisayar mühendisliği öğrencileri için kişiselleştirilmiş kariyer yönlendirme platformu.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Alanım Ne? — Tüm hakları saklıdır.
          </p>
          <p className="text-white/30 text-xs">
            Türkiye yazılım öğrencileri için ❤️ ile yapıldı
          </p>
        </div>
      </div>
    </footer>
  );
}
