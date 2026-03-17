'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { detailedQuestions } from '@/lib/data/questions-detailed';
import { useTestStore } from '@/lib/store/test-store';
import { buildTestResult } from '@/lib/scoring';

const categories: { key: string; label: string; emoji: string }[] = [
  { key: 'technical', label: 'Teknik Beceriler', emoji: '⚙️' },
  { key: 'social', label: 'Sosyal Beceriler', emoji: '🤝' },
  { key: 'hobby', label: 'Hobi & Yaratıcılık', emoji: '🎯' },
  { key: 'motivation', label: 'Kariyer Motivasyonu', emoji: '🚀' },
  { key: 'learning', label: 'Öğrenme Tarzı', emoji: '📚' },
];

export default function DetayliTestPage() {
  const router = useRouter();
  const { currentQuestion, answers, startTest, setAnswer, nextQuestion, prevQuestion, setResult } =
    useTestStore();

  const [selected, setSelected] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const totalQuestions = detailedQuestions.length;
  const question = detailedQuestions[currentQuestion];

  useEffect(() => {
    startTest('detailed');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const existing = answers.find((a) => a.questionId === question?.id);
    setSelected(existing?.optionLabel ?? null);
  }, [currentQuestion, question, answers]);

  const handleSelect = (label: string) => {
    if (!question) return;
    setSelected(label);
    setAnswer(question.id, label);
  };

  const handleNext = () => {
    if (!selected) return;
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      if (currentQuestion >= totalQuestions - 1) {
        const result = buildTestResult('detailed', detailedQuestions, [
          ...answers.filter((a) => a.questionId !== question.id),
          { questionId: question.id, optionLabel: selected },
        ]);
        setResult(result);
        router.push('/sonuc');
      } else {
        nextQuestion();
      }
    }, 200);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        prevQuestion();
      }, 150);
    }
  };

  if (!question) return null;

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const categoryLabel = categories.find((c) => c.key === question.category);

  // Category sections progress
  const categoryIndex = categories.findIndex((c) => c.key === question.category);
  const answeredInCategory = answers.filter(
    (a) => detailedQuestions.find((q) => q.id === a.questionId)?.category === question.category
  ).length;
  const totalInCategory = detailedQuestions.filter((q) => q.category === question.category).length;

  return (
    <div className="min-h-screen pt-20 pb-16 flex flex-col">
      <div className="container-custom flex-1 flex flex-col max-w-2xl">
        {/* Category indicators */}
        <div className="mt-8 mb-6 flex gap-2">
          {categories.map((cat, i) => (
            <div
              key={cat.key}
              className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                i < categoryIndex
                  ? 'bg-violet'
                  : i === categoryIndex
                  ? 'bg-gradient-to-r from-violet to-mint'
                  : 'bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Category label */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">{categoryLabel?.emoji}</span>
            <span className="font-semibold text-white/70">{categoryLabel?.label}</span>
            <span className="text-white/30 text-sm">({answeredInCategory}/{totalInCategory})</span>
          </div>
          <span className="text-sm text-white/40">
            {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-10">
          <div
            className="progress-bar h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <div
          className={`flex-1 transition-all duration-200 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="text-xs font-bold text-violet mb-6 uppercase tracking-widest">
              Soru {currentQuestion + 1}
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-8 leading-snug">
              {question.text}
            </h2>

            <div className="space-y-3">
              {question.options.map((opt) => {
                const isSelected = selected === opt.label;
                return (
                  <button
                    key={opt.label}
                    id={`opt-${opt.label}`}
                    onClick={() => handleSelect(opt.label)}
                    className={`w-full text-left flex items-center gap-4 rounded-xl px-5 py-4 border transition-all duration-200 ${
                      isSelected
                        ? 'border-violet bg-violet/15 text-white'
                        : 'border-white/8 bg-white/3 text-white/70 hover:border-white/20 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                        isSelected ? 'border-violet bg-violet text-white' : 'border-white/20 text-white/40'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : opt.label}
                    </div>
                    <span className="text-sm md:text-base leading-snug">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="btn-ghost flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" /> Geri
          </button>

          <button
            id="next-btn-detayli"
            onClick={handleNext}
            disabled={!selected}
            className={`flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed ${
              currentQuestion >= totalQuestions - 1 ? 'btn-coral' : 'btn-primary'
            }`}
          >
            {currentQuestion >= totalQuestions - 1 ? (
              <>Sonuçları Gör <ArrowRight className="w-4 h-4" /></>
            ) : (
              <>İleri <ArrowRight className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
