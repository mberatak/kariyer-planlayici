import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, Building2, Bookmark } from 'lucide-react';
import { getAreaBySlug, areas } from '@/lib/data/areas';

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const area = getAreaBySlug(params.slug);
  if (!area) return {};
  return {
    title: `${area.name} Kariyer Rehberi — Alanım Ne?`,
    description: area.longDescription,
  };
}

export default function AlanDetayPage({ params }: { params: { slug: string } }) {
  const area = getAreaBySlug(params.slug);
  if (!area) notFound();

  const areaIndex = areas.findIndex((a) => a.slug === params.slug);
  const prevArea = areaIndex > 0 ? areas[areaIndex - 1] : null;
  const nextArea = areaIndex < areas.length - 1 ? areas[areaIndex + 1] : null;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Back */}
        <Link
          href="/alanlar"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Alanlar
        </Link>

        {/* Hero */}
        <div className="glass-card rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-violet to-transparent" />
          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <div className="text-7xl">{area.emoji}</div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`text-sm font-semibold px-3 py-1.5 rounded-full ${
                    area.difficulty === 'Kolay'
                      ? 'bg-mint/15 text-mint'
                      : area.difficulty === 'Orta'
                      ? 'bg-amber-custom/15 text-amber-custom'
                      : 'bg-coral/15 text-coral'
                  }`}
                >
                  Zorluk: {area.difficulty}
                </span>
                <span
                  className={`text-sm font-semibold px-3 py-1.5 rounded-full ${
                    area.jobMarket === 'Çok İyi'
                      ? 'bg-mint/15 text-mint'
                      : area.jobMarket === 'İyi'
                      ? 'bg-violet/15 text-violet'
                      : 'bg-white/10 text-white/50'
                  }`}
                >
                  İş Piyasası: {area.jobMarket}
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-4">{area.name}</h1>
            <p className="text-white/60 leading-relaxed text-lg mb-6">{area.longDescription}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <span key={tag} className="text-sm px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Salary Card */}
        <div className="glass-card rounded-2xl p-7 mb-6">
          <h2 className="font-black text-xl mb-6">
            💰 Türkiye Maaş Verileri <span className="text-white/30 text-sm font-normal">(2024-25)</span>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { level: 'Junior', salary: area.salaryTR.junior, color: 'text-mint' },
              { level: 'Mid-Level', salary: area.salaryTR.mid, color: 'text-violet' },
              { level: 'Senior', salary: area.salaryTR.senior, color: 'text-coral' },
            ].map((s) => (
              <div key={s.level} className="text-center rounded-xl bg-white/3 border border-white/5 p-4">
                <div className="text-xs text-white/40 mb-2 font-medium">{s.level}</div>
                <div className={`font-black text-base md:text-lg leading-tight ${s.color}`}>{s.salary}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Hard Skills */}
          <div className="glass-card rounded-2xl p-7">
            <h2 className="font-black text-xl mb-5">⚙️ Teknik Beceriler</h2>
            <ul className="space-y-3">
              {area.hardSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-mint flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="glass-card rounded-2xl p-7">
            <h2 className="font-black text-xl mb-5">🤝 Sosyal Beceriler</h2>
            <ul className="space-y-3">
              {area.softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-violet flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Path */}
        <div className="glass-card rounded-2xl p-7 mb-6">
          <h2 className="font-black text-xl mb-7">🚀 Kariyer Yolu</h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet to-mint" />
            <div className="space-y-6">
              {area.careerPath.map((step, i) => (
                <div key={step} className="flex items-center gap-6 relative pl-12">
                  <div
                    className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border-2 border-violet bg-surface z-10"
                  >
                    {i + 1}
                  </div>
                  <div
                    className={`glass-card rounded-xl px-5 py-3 text-sm font-semibold flex-1 ${
                      i === 0
                        ? 'border-mint/30 text-mint'
                        : i === area.careerPath.length - 1
                        ? 'border-coral/30 text-coral'
                        : 'text-white/70'
                    }`}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="glass-card rounded-2xl p-7 mb-6">
          <h2 className="font-black text-xl mb-6">📚 Öğrenme Kaynakları</h2>
          <div className="space-y-3">
            {area.courses.map((course) => (
              <a
                key={course.name}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between glass-card rounded-xl px-5 py-4 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Bookmark className="w-4 h-4 text-violet flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm text-white/80 group-hover:text-white">
                      {course.name}
                    </div>
                    <div className="text-xs text-white/40">{course.platform}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {course.free && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-mint/15 text-mint font-medium">
                      Ücretsiz
                    </span>
                  )}
                  <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Project Ideas + Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="glass-card rounded-2xl p-7">
            <h2 className="font-black text-xl mb-5">💡 Mini Proje Fikirleri</h2>
            <ul className="space-y-3">
              {area.projectIdeas.map((idea, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="w-6 h-6 rounded-full bg-coral/15 text-coral flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {idea}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <h2 className="font-black text-xl mb-5">📖 Kitap Önerileri</h2>
            <ul className="space-y-3">
              {area.books.map((book, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="text-amber-custom">📚</span>
                  {book}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Companies */}
        <div className="glass-card rounded-2xl p-7 mb-6">
          <h2 className="font-black text-xl mb-5">
            <Building2 className="w-5 h-5 inline mr-2 text-violet" />
            Türkiye'deki Popüler Şirketler
          </h2>
          <div className="flex flex-wrap gap-3">
            {area.popularCompanies.map((company) => (
              <span
                key={company}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-sm text-white/70 font-medium"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        {area.successStories.length > 0 && (
          <div className="glass-card rounded-2xl p-7 mb-8">
            <h2 className="font-black text-xl mb-6">⭐ Başarı Hikayeleri</h2>
            <div className="space-y-5">
              {area.successStories.map((story, i) => (
                <div key={i} className="border-l-2 border-violet pl-5">
                  <p className="text-white/70 italic mb-3 leading-relaxed">"{story.story}"</p>
                  <div className="text-sm font-semibold text-violet">{story.name}</div>
                  <div className="text-xs text-white/40">{story.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="glass-card rounded-2xl p-8 text-center mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet/10 to-coral/10 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl font-black mb-3">Bu alan sana uygun mu?</h3>
            <p className="text-white/50 mb-6">Kişilik testini yaparak emin ol.</p>
            <Link href="/test" className="btn-primary inline-flex items-center gap-2">
              Testi Başlat
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="flex items-center justify-between">
          {prevArea ? (
            <Link
              href={`/alanlar/${prevArea.slug}`}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {prevArea.emoji} {prevArea.name}
            </Link>
          ) : (
            <div />
          )}
          {nextArea && (
            <Link
              href={`/alanlar/${nextArea.slug}`}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              {nextArea.emoji} {nextArea.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
