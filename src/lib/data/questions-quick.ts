import { Question } from '@/types';

export const quickQuestions: Question[] = [
  {
    id: 1,
    text: 'Bir projeye başlarken ilk ne yapmak istersin?',
    category: 'technical',
    options: [
      {
        label: 'A',
        text: 'Tasarımı hayal edip görsel çizmek',
        weights: { 'web-dev': 2, 'mobile': 2, 'game-dev': 2, 'product': 1, 'ai-ml': -1 },
      },
      {
        label: 'B',
        text: 'Sistemi kafamda tasarlamak, altyapıyı planlamak',
        weights: { 'devops': 2, 'software-architecture': 2, 'data-engineering': 1, 'embedded': 1, 'web-dev': 1 },
      },
      {
        label: 'C',
        text: 'Veriyi analiz edip içgörüler çıkarmak',
        weights: { 'data-science': 2, 'ai-ml': 2, 'data-engineering': 1, 'product': 1 },
      },
      {
        label: 'D',
        text: 'Doğrudan kodu açıp denemelere başlamak',
        weights: { 'web-dev': 1, 'mobile': 1, 'cybersecurity': 2, 'qa-testing': 1, 'game-dev': 1 },
      },
    ],
  },
  {
    id: 2,
    text: 'Hangi konu seni en çok heyecanlandırır?',
    category: 'hobby',
    options: [
      {
        label: 'A',
        text: 'İnsanların sevdiği ürünler ve uygulamalar yapmak',
        weights: { 'web-dev': 2, 'mobile': 2, 'game-dev': 2, 'product': 2, 'qa-testing': 1 },
      },
      {
        label: 'B',
        text: 'Makinelerin nasıl "akıllı" hale geldiğini anlamak',
        weights: { 'ai-ml': 3, 'data-science': 2, 'data-engineering': 1 },
      },
      {
        label: 'C',
        text: 'Sistemleri hacklemek ve güvenlik açıklarını bulmak',
        weights: { 'cybersecurity': 3, 'embedded': 1, 'devops': 1 },
      },
      {
        label: 'D',
        text: 'Binlerce sunucunun nasıl sorunsuz çalıştığı',
        weights: { 'devops': 3, 'software-architecture': 2, 'data-engineering': 1 },
      },
    ],
  },
  {
    id: 3,
    text: 'Matematik ve istatistiğe ilgin nasıl?',
    category: 'technical',
    options: [
      {
        label: 'A',
        text: 'Çok severim, derinlemesine dalarım',
        weights: { 'ai-ml': 3, 'data-science': 3, 'software-architecture': 1, 'data-engineering': 1 },
      },
      {
        label: 'B',
        text: 'Orta düzeyde, ihtiyacım olunca öğrenirim',
        weights: { 'web-dev': 2, 'mobile': 2, 'devops': 1, 'qa-testing': 1 },
      },
      {
        label: 'C',
        text: 'Yeterince anlıyorum ama tercihim değil',
        weights: { 'cybersecurity': 1, 'game-dev': 1, 'product': 1, 'web-dev': 1 },
      },
      {
        label: 'D',
        text: 'Matematiksiz yaşamak istiyorum',
        weights: { 'product': 2, 'qa-testing': 2, 'web-dev': 1 },
      },
    ],
  },
  {
    id: 4,
    text: 'Çalışma ortamı tercihin?',
    category: 'social',
    options: [
      {
        label: 'A',
        text: 'Ekiple birlikte brainstorm, hızlı iterasyon',
        weights: { 'product': 3, 'web-dev': 2, 'game-dev': 2, 'qa-testing': 1 },
      },
      {
        label: 'B',
        text: 'Derin, bireysel çalışma odaklanma zamanı',
        weights: { 'ai-ml': 2, 'data-science': 2, 'cybersecurity': 2, 'embedded': 2, 'software-architecture': 1 },
      },
      {
        label: 'C',
        text: 'Küçük teknik ekip, net hedefler',
        weights: { 'devops': 2, 'data-engineering': 2, 'software-architecture': 2, 'mobile': 1 },
      },
      {
        label: 'D',
        text: 'Kullanıcıyla yakın iletişim kurarak',
        weights: { 'product': 3, 'qa-testing': 2, 'web-dev': 1 },
      },
    ],
  },
  {
    id: 5,
    text: 'Telefonda hangi uygulamayı açmak seni en çok heyecanlandırır?',
    category: 'hobby',
    options: [
      {
        label: 'A',
        text: 'Yeni oyunlar — mekanikleri incelerim',
        weights: { 'game-dev': 3, 'mobile': 2, 'web-dev': 1 },
      },
      {
        label: 'B',
        text: 'Haber/finans — trend ve veri okuyorum',
        weights: { 'data-science': 2, 'product': 2, 'ai-ml': 1 },
      },
      {
        label: 'C',
        text: 'Terminal / SSH — sunucularıma bakıyorum',
        weights: { 'devops': 3, 'cybersecurity': 2, 'embedded': 1 },
      },
      {
        label: 'D',
        text: 'GitHub — açık kaynak projeleri inceliyorum',
        weights: { 'web-dev': 2, 'ai-ml': 2, 'software-architecture': 2, 'qa-testing': 1 },
      },
    ],
  },
  {
    id: 6,
    text: 'Başarılı olmak için ne kadar matematik/teori öğrenmeye hazırsın?',
    category: 'motivation',
    options: [
      {
        label: 'A',
        text: 'Her şeyi öğrenirim, temeli sağlam isterim',
        weights: { 'ai-ml': 3, 'data-science': 2, 'software-architecture': 2, 'embedded': 2 },
      },
      {
        label: 'B',
        text: 'Pragmatik: yeterince öğrenip ilerlerim',
        weights: { 'web-dev': 2, 'mobile': 2, 'devops': 2, 'qa-testing': 2 },
      },
      {
        label: 'C',
        text: 'Pratiği teoriye tercih ederim',
        weights: { 'cybersecurity': 2, 'game-dev': 2, 'product': 2 },
      },
    ],
  },
  {
    id: 7,
    text: 'En büyük motivasyonun nedir?',
    category: 'motivation',
    options: [
      {
        label: 'A',
        text: 'Milyonların kullandığı bir ürün yapmak',
        weights: { 'web-dev': 3, 'mobile': 3, 'game-dev': 2, 'product': 2 },
      },
      {
        label: 'B',
        text: 'Yüksek maaş ve global kariyer',
        weights: { 'ai-ml': 2, 'devops': 2, 'data-engineering': 2, 'software-architecture': 2 },
      },
      {
        label: 'C',
        text: 'Dijital dünyayı güvenli tutmak',
        weights: { 'cybersecurity': 3, 'devops': 1 },
      },
      {
        label: 'D',
        text: 'Bilim ve insanlığa katkı',
        weights: { 'ai-ml': 3, 'data-science': 2, 'embedded': 1 },
      },
    ],
  },
  {
    id: 8,
    text: 'Bir sistemi "bozmak" (test etmek) fikri seni nasıl hissettiriyor?',
    category: 'technical',
    options: [
      {
        label: 'A',
        text: 'Bayılırım! Açık bulmak esrime',
        weights: { 'cybersecurity': 3, 'qa-testing': 2 },
      },
      {
        label: 'B',
        text: 'Önemli bir iş, seve seve yapım',
        weights: { 'qa-testing': 3, 'devops': 1, 'software-architecture': 1 },
      },
      {
        label: 'C',
        text: 'Yapabilir ama tercih etmem',
        weights: { 'web-dev': 1, 'mobile': 1, 'data-science': 1 },
      },
      {
        label: 'D',
        text: 'Yapmak istemem, inşa etmek isterim',
        weights: { 'web-dev': 2, 'mobile': 2, 'game-dev': 2, 'ai-ml': 1 },
      },
    ],
  },
  {
    id: 9,
    text: 'Hangi tür sonuç seni daha çok tatmin eder?',
    category: 'motivation',
    options: [
      {
        label: 'A',
        text: 'Ekranda gördüğüm görsel bir ürün',
        weights: { 'web-dev': 3, 'mobile': 3, 'game-dev': 3 },
      },
      {
        label: 'B',
        text: 'Veriden çıkan bir insight veya grafik',
        weights: { 'data-science': 3, 'ai-ml': 2, 'data-engineering': 2 },
      },
      {
        label: 'C',
        text: 'Düzgün çalışan bir sistem / altyapı',
        weights: { 'devops': 3, 'software-architecture': 2, 'embedded': 2 },
      },
      {
        label: 'D',
        text: 'Kullanıcıların "bunu sevdim" demesi',
        weights: { 'product': 3, 'qa-testing': 2, 'mobile': 1 },
      },
    ],
  },
  {
    id: 10,
    text: 'Donanım ile yazılımın kesişimi seni cezbeder mi?',
    category: 'technical',
    options: [
      {
        label: 'A',
        text: 'Evet, fiziksel cihazları seviyorum',
        weights: { 'embedded': 3, 'cybersecurity': 1 },
      },
      {
        label: 'B',
        text: 'Kısmen, IoT projeleri ilginç geliyor',
        weights: { 'embedded': 2, 'devops': 1, 'ai-ml': 1 },
      },
      {
        label: 'C',
        text: 'Hayır, saf yazılım benim için',
        weights: { 'web-dev': 2, 'mobile': 2, 'data-science': 2, 'software-architecture': 1 },
      },
    ],
  },
];
