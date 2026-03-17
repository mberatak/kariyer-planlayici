import { Question } from '@/types';

export const detailedQuestions: Question[] = [
  // === KATEGORİ 1: TEKNİK BECERİLER (Q1-Q10) ===
  {
    id: 101,
    text: 'Algoritma ve veri yapıları konularını nasıl buluyorsun?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Çok seviyorum, mükemmel olana kadar optimize ederim', weights: { 'ai-ml': 3, 'software-architecture': 3, 'embedded': 2 } },
      { label: 'B', text: 'İyi anlıyorum, ihtiyaç olunca kullanırım', weights: { 'web-dev': 1, 'mobile': 1, 'devops': 1 } },
      { label: 'C', text: 'Yeterince anlıyorum', weights: { 'qa-testing': 1, 'product': 1 } },
      { label: 'D', text: 'Zor geliyor, pratik odaklı ilerim', weights: { 'product': 3, 'qa-testing': 1 } },
    ],
  },
  {
    id: 102,
    text: 'Düşük seviye sistem programlama (C, Assembly, donanım) ilgini çekiyor mu?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Evet, nasıl çalıştığını derinlemesine anlamak istiyorum', weights: { 'embedded': 3, 'cybersecurity': 2, 'devops': 1 } },
      { label: 'B', text: 'Kısmen, güvenlik açısından bakınca ilginç', weights: { 'cybersecurity': 2, 'embedded': 1 } },
      { label: 'C', text: 'Hayır, yüksek seviyeli diller bana yeter', weights: { 'web-dev': 2, 'mobile': 2, 'data-science': 1, 'ai-ml': 1 } },
    ],
  },
  {
    id: 103,
    text: 'Bulut teknolojileri ve sunucu yönetimi hakkında ne düşünüyorsun?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Çok ilginç! AWS/GCP/Azure öğrenmek istiyorum', weights: { 'devops': 3, 'software-architecture': 2, 'data-engineering': 2 } },
      { label: 'B', text: 'Gerekli bir beceri, öğreneceğim', weights: { 'web-dev': 1, 'mobile': 1, 'ai-ml': 1, 'data-engineering': 1 } },
      { label: 'C', text: 'Biraz bilirim ama odak alanım değil', weights: { 'web-dev': 1, 'mobile': 1, 'game-dev': 1 } },
      { label: 'D', text: 'Hiç ilgilenmiyorum', weights: { 'embedded': 1, 'cybersecurity': 1, 'data-science': 1 } },
    ],
  },
  {
    id: 104,
    text: 'Veritabanı tasarımı ve SQL yazımı nasıl geliyor?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Kompleks sorgular yazmak eğlenceli!', weights: { 'data-engineering': 3, 'data-science': 2, 'software-architecture': 1, 'web-dev': 1 } },
      { label: 'B', text: 'İyi anlıyorum, profesyonelce kullanabilirim', weights: { 'web-dev': 2, 'data-science': 2, 'devops': 1 } },
      { label: 'C', text: 'Temel sorguları yazarım', weights: { 'mobile': 1, 'qa-testing': 1, 'product': 1 } },
      { label: 'D', text: 'ORM kullanmayı tercih ederim', weights: { 'web-dev': 1, 'mobile': 1, 'game-dev': 1 } },
    ],
  },
  {
    id: 105,
    text: 'API tasarımı ve entegrasyonu hakkında ne düşünüyorsun?',
    category: 'technical',
    options: [
      { label: 'A', text: 'RESTful/GraphQL API tasarlamak seviyorum', weights: { 'web-dev': 3, 'software-architecture': 2, 'mobile': 2 } },
      { label: 'B', text: 'Entegrasyon yapmayı tercih ederim', weights: { 'devops': 2, 'data-engineering': 2, 'mobile': 1 } },
      { label: 'C', text: 'Kullanabilirim ama tasarlamak için değil', weights: { 'data-science': 1, 'qa-testing': 1, 'product': 1 } },
    ],
  },
  {
    id: 106,
    text: 'Makine öğrenmesi modellerinin nasıl çalıştığını merak ediyor musun?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Evet! Matematiğini, içini anlamak istiyorum', weights: { 'ai-ml': 3, 'data-science': 2 } },
      { label: 'B', text: 'Kullanmak istiyorum, iç detay şart değil', weights: { 'data-science': 2, 'web-dev': 1, 'product': 1 } },
      { label: 'C', text: 'Biraz meraklıyım, çok derinlemesine değil', weights: { 'data-engineering': 1, 'product': 1 } },
      { label: 'D', text: 'Hayır, başka alanlar daha cazip', weights: { 'cybersecurity': 1, 'embedded': 1, 'game-dev': 1, 'devops': 1 } },
    ],
  },
  {
    id: 107,
    text: 'Test yazma ve hata ayıklama hakkındaki tutumun nedir?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Test yazmadan kod yazmam, kaliteye önem veririm', weights: { 'qa-testing': 3, 'software-architecture': 2, 'web-dev': 1 } },
      { label: 'B', text: 'Test yazarım ama sevmem, zorunlu bir iş', weights: { 'web-dev': 1, 'mobile': 1, 'devops': 1 } },
      { label: 'C', text: 'Debug etmeyi severim ama test yazmayı değil', weights: { 'cybersecurity': 2, 'embedded': 1, 'game-dev': 1 } },
      { label: 'D', text: 'İkisi de çekici değil, feature geliştirmeyi severim', weights: { 'product': 1, 'ai-ml': 1, 'data-science': 1 } },
    ],
  },
  {
    id: 108,
    text: 'Performans optimizasyonu (hız, bellek, ölçek) seni heyecanlandırır mı?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Evet, milisaniyeleri inanılmaz bulurum', weights: { 'embedded': 3, 'software-architecture': 2, 'devops': 2, 'game-dev': 2 } },
      { label: 'B', text: 'Ölçek konularında evet', weights: { 'devops': 2, 'software-architecture': 2, 'data-engineering': 2 } },
      { label: 'C', text: 'Gerektiğinde yaparım ama hareket noktam değil', weights: { 'web-dev': 1, 'mobile': 1, 'ai-ml': 1 } },
    ],
  },
  {
    id: 109,
    text: 'Ağ protokolleri ve paket analizi ilgini çekiyor mu?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Evet, Wireshark açmak eğlenceli!', weights: { 'cybersecurity': 3, 'devops': 1, 'embedded': 1 } },
      { label: 'B', text: 'Biraz, güvenlik açısından', weights: { 'cybersecurity': 2, 'devops': 1 } },
      { label: 'C', text: 'Hayır, üst katmanlarda çalışmak isterim', weights: { 'web-dev': 2, 'mobile': 2, 'data-science': 1, 'ai-ml': 1 } },
    ],
  },
  {
    id: 110,
    text: 'Open source projeye katkı yapmayı hayal ediyor musun?',
    category: 'technical',
    options: [
      { label: 'A', text: 'Evet, aktif katkı vermek istiyorum', weights: { 'software-architecture': 2, 'web-dev': 2, 'ai-ml': 1, 'devops': 1 } },
      { label: 'B', text: 'İyi olur ama şart değil', weights: { 'web-dev': 1, 'mobile': 1, 'data-science': 1 } },
      { label: 'C', text: 'Kullanırım ama katkı kısmı ilgimi çekmiyor', weights: { 'cybersecurity': 1, 'qa-testing': 1, 'product': 1 } },
    ],
  },

  // === KATEGORİ 2: SOSYAL BECERİLER (Q11-Q20) ===
  {
    id: 201,
    text: 'Bir grupta rolün genellikle ne olur?',
    category: 'social',
    options: [
      { label: 'A', text: 'Fikir üreten, yön gösteren', weights: { 'product': 4, 'software-architecture': 2 } },
      { label: 'B', text: 'Teknik problemi çözmeye odaklanan', weights: { 'ai-ml': 2, 'embedded': 3, 'cybersecurity': 3 } },
      { label: 'C', text: 'Uyum sağlayan, destekleyen', weights: { 'qa-testing': 3, 'devops': 1 } },
      { label: 'D', text: 'İletişimi sağlayan köprü', weights: { 'product': 4, 'qa-testing': 3 } },
    ],
  },
  {
    id: 202,
    text: 'Kullanıcı görüşmeleri yapıp ürün geliştirmek ilgini çeker mi?',
    category: 'social',
    options: [
      { label: 'A', text: 'Evet, kullanıcıları anlamak en önemli şey', weights: { 'product': 3, 'qa-testing': 2, 'mobile': 1 } },
      { label: 'B', text: 'Biraz ilginç ama asıl kod kısmı cazip', weights: { 'web-dev': 1, 'mobile': 1, 'game-dev': 1 } },
      { label: 'C', text: 'Hayır, veriden içgörü çıkarmayı tercih ederim', weights: { 'data-science': 2, 'ai-ml': 1, 'data-engineering': 1 } },
    ],
  },
  {
    id: 203,
    text: 'Sunum yapıp teknik konuları anlatmaktan keyif alır mısın?',
    category: 'social',
    options: [
      { label: 'A', text: 'Evet! Anlatmayı ve paylaşmayı seviyorum', weights: { 'product': 2, 'software-architecture': 2, 'data-science': 1 } },
      { label: 'B', text: 'Yapabilirim ama tercih etmem', weights: { 'web-dev': 1, 'devops': 1, 'mobile': 1 } },
      { label: 'C', text: 'Sunum yapmak bana göre değil', weights: { 'cybersecurity': 1, 'embedded': 1, 'ai-ml': 1, 'data-engineering': 1 } },
    ],
  },
  {
    id: 204,
    text: 'Tak çalışması mı yoksa bireysel çalışma mı?',
    category: 'social',
    options: [
      { label: 'A', text: 'Büyük takım dinamikleri mükemmel', weights: { 'product': 2, 'web-dev': 1, 'game-dev': 2 } },
      { label: 'B', text: 'Küçük, odaklı teknik ekip', weights: { 'devops': 2, 'data-engineering': 2, 'software-architecture': 2 } },
      { label: 'C', text: 'Bireysel çalışmayı tercih ederim', weights: { 'cybersecurity': 2, 'ai-ml': 2, 'embedded': 2, 'data-science': 2 } },
    ],
  },
  {
    id: 205,
    text: 'Junior geliştiricilere mentorlük yapmak ister misin?',
    category: 'social',
    options: [
      { label: 'A', text: 'Evet, insanların büyümesine yardım etmek tatmin edici', weights: { 'software-architecture': 2, 'product': 2, 'qa-testing': 1 } },
      { label: 'B', text: 'Evet ama uzun vadede', weights: { 'web-dev': 1, 'devops': 1, 'data-engineering': 1 } },
      { label: 'C', text: 'Teknik çalışmaya odaklanmak isterim', weights: { 'ai-ml': 2, 'cybersecurity': 2, 'embedded': 2 } },
    ],
  },
  {
    id: 206,
    text: 'Müşteri veya iş birimi ile direkt çalışmak nasıl?',
    category: 'social',
    options: [
      { label: 'A', text: 'Harika! İş gereksinimleri toplamayı seviyorum', weights: { 'product': 3, 'qa-testing': 1 } },
      { label: 'B', text: 'Bazen iyidir, teknik çevirmen rolü ilginç', weights: { 'software-architecture': 2, 'web-dev': 1 } },
      { label: 'C', text: 'Hayır, sadece teknik kısma odaklanmak isterim', weights: { 'ai-ml': 2, 'data-engineering': 2, 'embedded': 2, 'cybersecurity': 2 } },
    ],
  },
  {
    id: 207,
    text: 'Dokümantasyon yazmak sana göre mi?',
    category: 'social',
    options: [
      { label: 'A', text: 'Evet, iyi dokümantasyon çok kritik', weights: { 'software-architecture': 2, 'devops': 2, 'data-engineering': 1 } },
      { label: 'B', text: 'Yazabilirim ama sevmem', weights: { 'web-dev': 1, 'mobile': 1, 'ai-ml': 1 } },
      { label: 'C', text: 'Kod kendi kendini açıklamalı', weights: { 'cybersecurity': 1, 'embedded': 1, 'game-dev': 1, 'data-science': 1 } },
    ],
  },
  {
    id: 208,
    text: 'Bir startup kurma fikri cazip mi?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Hayalim! Kendi şirketimi kurmak istiyorum', weights: { 'product': 3, 'web-dev': 2, 'mobile': 2, 'game-dev': 2 } },
      { label: 'B', text: 'Belki, ama önce büyük şirkette deneyim istiyorum', weights: { 'software-architecture': 1, 'ai-ml': 1, 'data-engineering': 1 } },
      { label: 'C', text: 'Kurumsal yapıyı tercih ederim', weights: { 'devops': 1, 'qa-testing': 1, 'embedded': 1, 'cybersecurity': 1 } },
    ],
  },
  {
    id: 209,
    text: 'Etik/politika konuları (veri gizliliği, AI etik) ilgini çekiyor mu?',
    category: 'social',
    options: [
      { label: 'A', text: 'Evet, teknoloji etiği önemli bir alan', weights: { 'product': 2, 'ai-ml': 1, 'cybersecurity': 2 } },
      { label: 'B', text: 'Biraz, politika kısım değil teknik kısım', weights: { 'cybersecurity': 1, 'devops': 1 } },
      { label: 'C', text: 'Daha çok teknik konularla ilgileniyorum', weights: { 'embedded': 2, 'data-engineering': 2, 'ai-ml': 1, 'game-dev': 1 } },
    ],
  },
  {
    id: 210,
    text: 'Rakip analizi, benchmark ve pazar araştırması sana çekici mi?',
    category: 'social',
    options: [
      { label: 'A', text: 'Evet, pazar analizi güçlü ürünler için şart', weights: { 'product': 3, 'data-science': 1 } },
      { label: 'B', text: 'Bazen ilginç', weights: { 'web-dev': 1, 'mobile': 1, 'ai-ml': 1 } },
      { label: 'C', text: 'Hayır, teknik derinliğe dalmak istiyorum', weights: { 'ai-ml': 2, 'data-engineering': 2, 'embedded': 2, 'cybersecurity': 2 } },
    ],
  },

  // === KATEGORİ 3: HOBİ VE YARATICILIK (Q21-Q30) ===
  {
    id: 301,
    text: 'Boş zamanında ne yapmaktan keyif alırsın?',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Oyun oynamak ve oyun mekaniklerini analiz etmek', weights: { 'game-dev': 3, 'mobile': 1 } },
      { label: 'B', text: 'Kod projesi yapmak, yeni teknoloji denemek', weights: { 'web-dev': 2, 'devops': 2, 'ai-ml': 2 } },
      { label: 'C', text: 'CTF challengeları veya Hack The Box', weights: { 'cybersecurity': 3 } },
      { label: 'D', text: 'Veri seti analiz etmek, Kaggle', weights: { 'data-science': 3, 'ai-ml': 2 } },
    ],
  },
  {
    id: 302,
    text: 'Yaratıcı ve görsel işler seni cezbeder mi?',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Evet! UI/UX ve görsel tasarım çok cazip', weights: { 'web-dev': 3, 'mobile': 2, 'game-dev': 2 } },
      { label: 'B', text: 'Biraz, ama işlevsellik önce gelir', weights: { 'web-dev': 1, 'product': 1, 'mobile': 1 } },
      { label: 'C', text: 'Hayır, arka planda çalışmayı tercih ederim', weights: { 'devops': 2, 'data-engineering': 2, 'ai-ml': 2, 'embedded': 2, 'cybersecurity': 2 } },
    ],
  },
  {
    id: 303,
    text: 'Bir robot ya da elektronik devre yapmak nasıl bir his yaratır?',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Harika! Fiziksel bir şey yaratmak tatmin edici', weights: { 'embedded': 3, 'game-dev': 1 } },
      { label: 'B', text: 'Biraz ilginç ama asıl yazılım kısım cazip', weights: { 'embedded': 1, 'ai-ml': 1 } },
      { label: 'C', text: 'Hayır tercih etmem, saf yazılım isterim', weights: { 'web-dev': 2, 'mobile': 2, 'data-science': 2, 'cybersecurity': 1 } },
    ],
  },
  {
    id: 304,
    text: 'Yeni bir şey öğrendiğinde ilk ne yaparsın?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Bir şeyler inşa ederim, öğrenmenin tek yolu bu', weights: { 'web-dev': 2, 'mobile': 2, 'devops': 2, 'game-dev': 2 } },
      { label: 'B', text: 'Önce kapsamlı kaynak okur, sonra uygularım', weights: { 'ai-ml': 2, 'software-architecture': 2, 'data-engineering': 1 } },
      { label: 'C', text: 'Mevcut projeye entegre ederim', weights: { 'devops': 1, 'web-dev': 1, 'data-science': 1 } },
    ],
  },
  {
    id: 305,
    text: 'Teknoloji haberleri ve trendleri ne kadar takip edersin?',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Günlük! Hacker News, Product Hunt vb.', weights: { 'product': 3, 'web-dev': 2, 'ai-ml': 2 } },
      { label: 'B', text: 'Haftalık olarak belirli alanımı takip ederim', weights: { 'cybersecurity': 2, 'devops': 2, 'data-science': 1 } },
      { label: 'C', text: 'Sadece ihtiyacım olduğunda', weights: { 'embedded': 1, 'qa-testing': 1, 'data-engineering': 1 } },
    ],
  },
  {
    id: 306,
    text: 'Bir side project fikri olsaydı önce ne yapardın?',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Hemen prototip çıkarırım', weights: { 'web-dev': 2, 'mobile': 2, 'game-dev': 2 } },
      { label: 'B', text: 'Pazar araştırması yaparım', weights: { 'product': 3, 'data-science': 1 } },
      { label: 'C', text: 'Teknik mimariyi tasarlarım', weights: { 'software-architecture': 3, 'devops': 1 } },
      { label: 'D', text: 'Veri toplamaya başlarım', weights: { 'data-science': 2, 'data-engineering': 2, 'ai-ml': 2 } },
    ],
  },
  {
    id: 307,
    text: 'Sanatsal bir yanın var mı? (müzik, resim, film vb.)',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Evet, yaratıcı ifade benim için önemli', weights: { 'game-dev': 3, 'web-dev': 2, 'mobile': 1 } },
      { label: 'B', text: 'Biraz, hobim bu düzeyde', weights: { 'product': 1, 'web-dev': 1, 'game-dev': 1 } },
      { label: 'C', text: 'Hayır, daha analitikiyim', weights: { 'ai-ml': 2, 'data-science': 2, 'embedded': 2, 'cybersecurity': 2, 'data-engineering': 1 } },
    ],
  },
  {
    id: 308,
    text: 'Bir problem karşısında ilk ne düşünürsün?',
    category: 'learning',
    options: [
      { label: 'A', text: '"Bu nasıl exploit edilir?"', weights: { 'cybersecurity': 3 } },
      { label: 'B', text: '"Bu veri ne diyor?"', weights: { 'data-science': 3, 'ai-ml': 2, 'data-engineering': 1 } },
      { label: 'C', text: '"Kullanıcı ne yaşıyor?"', weights: { 'product': 3, 'qa-testing': 2, 'mobile': 1 } },
      { label: 'D', text: '"Sistemi nasıl tasarlarım?"', weights: { 'software-architecture': 3, 'devops': 2 } },
    ],
  },
  {
    id: 309,
    text: 'Bir oyun veya simülasyon geliştirmek cazip mi?',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Evet! Oyun dünyaları yaratmak harika', weights: { 'game-dev': 3 } },
      { label: 'B', text: 'ML için simülasyon ilginç', weights: { 'ai-ml': 2, 'data-science': 1 } },
      { label: 'C', text: 'Hayır, gerçek dünya uygulamaları tercihim', weights: { 'web-dev': 2, 'mobile': 2, 'embedded': 1 } },
    ],
  },
  {
    id: 310,
    text: 'Tersine mühendislik (reverse engineering) fikri nasıl?',
    category: 'hobby',
    options: [
      { label: 'A', text: 'Harika! Şeyler nasıl çalışıyor merakı ile incelemek', weights: { 'cybersecurity': 3, 'embedded': 2 } },
      { label: 'B', text: 'Bazen yapabilirim, özellikle debug için', weights: { 'qa-testing': 1, 'embedded': 1, 'game-dev': 1 } },
      { label: 'C', text: 'Hayır, süreç odaklıyım değil bu', weights: { 'web-dev': 1, 'product': 1, 'data-science': 1, 'data-engineering': 1 } },
    ],
  },

  // === KATEGORİ 4: KARİYER MOTİVASYONLARI (Q31-Q40) ===
  {
    id: 401,
    text: 'Kariyer hedefin 10 yıl sonra ne olmak?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'CTO veya teknik kurucu ortak', weights: { 'software-architecture': 3, 'product': 2, 'web-dev': 1 } },
      { label: 'B', text: 'Bağımsız araştırmacı / bilim insanı', weights: { 'ai-ml': 3, 'data-science': 2 } },
      { label: 'C', text: 'Kıdemli uzman / yüksek ücretli IC', weights: { 'cybersecurity': 2, 'devops': 2, 'embedded': 2, 'software-architecture': 1 } },
      { label: 'D', text: 'Global ünlü startup\'ın CPO/CEO', weights: { 'product': 3, 'mobile': 1, 'web-dev': 1 } },
    ],
  },
  {
    id: 402,
    text: 'Yüksek maaş mı yoksa etki alanı geniş proje mi tercih edersin?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Yüksek maaş her şeyin önünde', weights: { 'ai-ml': 2, 'devops': 2, 'data-engineering': 2, 'software-architecture': 1 } },
      { label: 'B', text: 'Etki alanı geniş, anlamlı çalışma', weights: { 'product': 2, 'data-science': 1, 'ai-ml': 1 } },
      { label: 'C', text: 'İkisi de eşit önemde', weights: { 'web-dev': 1, 'mobile': 1, 'game-dev': 1 } },
    ],
  },
  {
    id: 403,
    text: 'Remote/evden çalışmak sana cazip mi?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Evet, remote çalışmak istiyorum', weights: { 'web-dev': 2, 'devops': 2, 'ai-ml': 2, 'cybersecurity': 1 } },
      { label: 'B', text: 'Hybrid tercih ederim', weights: { 'mobile': 1, 'qa-testing': 1, 'product': 1, 'data-science': 1 } },
      { label: 'C', text: 'Ofis ekip atmosferini tercih ederim', weights: { 'product': 2, 'game-dev': 2, 'software-architecture': 1 } },
    ],
  },
  {
    id: 404,
    text: 'Savunma, devlet veya kritik altyapı projeleri ilgini çeker mi?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Evet, ulusal güvenlik önemli', weights: { 'cybersecurity': 3, 'embedded': 3, 'devops': 1 } },
      { label: 'B', text: 'Kısmen, sivil teknoloji tercih ederim', weights: { 'software-architecture': 1, 'data-engineering': 1 } },
      { label: 'C', text: 'Tercih etmem, consumer ürünler istiyorum', weights: { 'web-dev': 2, 'mobile': 2, 'game-dev': 2, 'product': 2 } },
    ],
  },
  {
    id: 405,
    text: 'Globalleşmek (yurt dışı kariyer) senin için ne kadar önemli?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Global kariyer birincil hedef', weights: { 'ai-ml': 2, 'devops': 2, 'software-architecture': 2, 'data-engineering': 2 } },
      { label: 'B', text: 'Olursa iyi ama şart değil', weights: { 'web-dev': 1, 'mobile': 1, 'cybersecurity': 1 } },
      { label: 'C', text: 'Türkiye\'de çalışmayı tercih ederim', weights: { 'embedded': 1, 'game-dev': 1, 'qa-testing': 1 } },
    ],
  },
  {
    id: 406,
    text: 'Sertifikasyon (AWS, CEH, PMP vb.) almak senin için anlamlı mı?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Evet, sertifikalar kariyeri hızlandırır', weights: { 'devops': 2, 'cybersecurity': 2, 'qa-testing': 2, 'product': 1 } },
      { label: 'B', text: 'Portfolio ve projeler daha önemli', weights: { 'web-dev': 2, 'mobile': 2, 'game-dev': 2, 'ai-ml': 1 } },
      { label: 'C', text: 'İkisi de önemli', weights: { 'data-science': 1, 'data-engineering': 1, 'software-architecture': 1 } },
    ],
  },
  {
    id: 407,
    text: 'Staj bulma önceliğin ne?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Büyük teknoloji şirketi (Google, Meta, Amazon)', weights: { 'ai-ml': 2, 'software-architecture': 2, 'data-engineering': 2, 'devops': 1 } },
      { label: 'B', text: 'Hızlı büyüyen startup', weights: { 'web-dev': 2, 'mobile': 2, 'product': 3, 'game-dev': 1 } },
      { label: 'C', text: 'Savunma/kamu kurumu', weights: { 'cybersecurity': 3, 'embedded': 3 } },
      { label: 'D', text: 'Fintech veya bankacılık', weights: { 'data-science': 2, 'data-engineering': 2, 'cybersecurity': 1 } },
    ],
  },
  {
    id: 408,
    text: 'Freelance veya bağımsız danışmanlık düşünür müsün?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Evet, bağımsızlık önemli benim için', weights: { 'web-dev': 2, 'mobile': 2, 'cybersecurity': 2, 'data-science': 1 } },
      { label: 'B', text: 'Belki, ama önce kurumsal deneyim', weights: { 'software-architecture': 1, 'devops': 1, 'ai-ml': 1 } },
      { label: 'C', text: 'Tercih etmem, ekip dinamiklerini severim', weights: { 'game-dev': 2, 'product': 2, 'qa-testing': 1 } },
    ],
  },
  {
    id: 409,
    text: 'Sosyal etki yaratmak (eğitim, sağlık, çevre) hedefin mi?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Evet! Teknolojinin toplumsal faydası önce', weights: { 'data-science': 2, 'ai-ml': 2, 'product': 2 } },
      { label: 'B', text: 'Önemli ama kariyer önceliklerim farklı', weights: { 'web-dev': 1, 'mobile': 1, 'devops': 1 } },
      { label: 'C', text: 'İyi bir ürün/sistem yaratmak kendi başına anlamlı', weights: { 'software-architecture': 1, 'embedded': 1, 'game-dev': 1 } },
    ],
  },
  {
    id: 410,
    text: 'Akademi ve araştırma seni çeker mi?',
    category: 'motivation',
    options: [
      { label: 'A', text: 'Evet, yüksek lisans/doktora düşünüyorum', weights: { 'ai-ml': 3, 'data-science': 2, 'software-architecture': 1 } },
      { label: 'B', text: 'Belki, ama endüstri şimdilik önce', weights: { 'data-engineering': 1, 'cybersecurity': 1, 'embedded': 1 } },
      { label: 'C', text: 'Hayır, endüstri avantajlı benim için', weights: { 'web-dev': 2, 'mobile': 2, 'devops': 2, 'product': 2, 'game-dev': 2 } },
    ],
  },

  // === KATEGORİ 5: ÖĞRENME TARZI (Q41-Q50) ===
  {
    id: 501,
    text: 'Yeni bir teknoloji öğrenirken nasıl başlarsın?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Resmi dokümantasyonu baştan sona okuyorum', weights: { 'software-architecture': 2, 'embedded': 2, 'devops': 1 } },
      { label: 'B', text: 'Video kurs izlerim', weights: { 'web-dev': 2, 'mobile': 2, 'data-science': 2 } },
      { label: 'C', text: 'Direkt bir proje başlatırım', weights: { 'game-dev': 2, 'web-dev': 1, 'cybersecurity': 2, 'mobile': 1 } },
      { label: 'D', text: 'Akademik makale veya kitap okuyorum', weights: { 'ai-ml': 3, 'data-science': 2, 'software-architecture': 1 } },
    ],
  },
  {
    id: 502,
    text: 'Bir sorunu çözerken nerede takılırsın?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Algoritmik kısımda', weights: { 'ai-ml': 1, 'data-engineering': 1, 'software-architecture': 1 } },
      { label: 'B', text: 'Tasarım ve UX kararlarında', weights: { 'web-dev': 1, 'mobile': 1, 'game-dev': 1 } },
      { label: 'C', text: 'Sistemi nasıl ölçeklendireceğimde', weights: { 'devops': 1, 'software-architecture': 1, 'data-engineering': 1 } },
      { label: 'D', text: 'Çok az takılırım, çözüm odaklıyım', weights: { 'cybersecurity': 1, 'qa-testing': 1, 'product': 1 } },
    ],
  },
  {
    id: 503,
    text: 'Teorik bilgi mi yoksa pratik deneyim mi daha çok değer taşır?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Güçlü teori olmadan pratik yüzeysel kalır', weights: { 'ai-ml': 3, 'data-science': 2, 'software-architecture': 2, 'embedded': 1 } },
      { label: 'B', text: 'İkisi dengeli olmalı', weights: { 'cybersecurity': 1, 'devops': 1, 'data-engineering': 1 } },
      { label: 'C', text: 'Pratik deneyim her zaman önce gelir', weights: { 'web-dev': 3, 'mobile': 3, 'game-dev': 3, 'qa-testing': 2 } },
    ],
  },
  {
    id: 504,
    text: 'Öğrendikçe ne hissedersin?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Sınırsız merak, ne kadar öğrensem az', weights: { 'ai-ml': 3, 'cybersecurity': 2, 'software-architecture': 2 } },
      { label: 'B', text: 'Pratik beceri kazandıkça tatmin', weights: { 'web-dev': 2, 'mobile': 2, 'devops': 2, 'game-dev': 2 } },
      { label: 'C', text: 'Hedef odaklı, amaca yönelik öğrenirim', weights: { 'product': 2, 'qa-testing': 2, 'data-engineering': 1 } },
    ],
  },
  {
    id: 505,
    text: 'Sürekli değişen teknoloji trendi seni nasıl hissettiriyor?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Heyecan! Her zaman öğrenecek yeni şeyler', weights: { 'web-dev': 2, 'ai-ml': 2, 'mobile': 2, 'devops': 2 } },
      { label: 'B', text: 'Normal, adaptasyon gerekli', weights: { 'software-architecture': 1, 'data-engineering': 1, 'cybersecurity': 1 } },
      { label: 'C', text: 'Biraz yorucu, derin uzmanlaşmayı tercih ederim', weights: { 'embedded': 2, 'ai-ml': 1, 'data-science': 1 } },
    ],
  },
  {
    id: 506,
    text: 'Hata mesajlarıyla nasıl başa çıkarsın?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Sevinç! Debug etmek benim oyunum', weights: { 'cybersecurity': 2, 'qa-testing': 2, 'embedded': 1 } },
      { label: 'B', text: 'Stack Overflow, ChatGPT - hızlı çözüm', weights: { 'web-dev': 2, 'mobile': 2, 'game-dev': 1 } },
      { label: 'C', text: 'Sistematik, loga bakıp izole ederim', weights: { 'devops': 2, 'software-architecture': 2, 'data-engineering': 1 } },
      { label: 'D', text: 'Dokümantasyonu okumak tercihim', weights: { 'ai-ml': 1, 'embedded': 1 } },
    ],
  },
  {
    id: 507,
    text: 'Pair programming ve code review yapmak nasıl?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Çok verimli, seviyorum', weights: { 'web-dev': 2, 'software-architecture': 2, 'qa-testing': 2 } },
      { label: 'B', text: 'Yararlı ama bireysel zamanı tercih ederim', weights: { 'ai-ml': 1, 'data-science': 1, 'embedded': 1 } },
      { label: 'C', text: 'Code review evet, pair programming hayır', weights: { 'devops': 1, 'data-engineering': 1, 'cybersecurity': 1 } },
    ],
  },
  {
    id: 508,
    text: 'Bir yılda kaç yeni teknoloji öğrenmek istersin?',
    category: 'learning',
    options: [
      { label: 'A', text: '5+, meraklıyım hepsini denemek istiyorum', weights: { 'web-dev': 2, 'devops': 2, 'ai-ml': 1 } },
      { label: 'B', text: '2-3, derinlemesine öğrenmek önemli', weights: { 'software-architecture': 2, 'data-science': 2, 'embedded': 2 } },
      { label: 'C', text: '1, mevcut alanda uzman olmak istiyorum', weights: { 'cybersecurity': 2, 'ai-ml': 2, 'data-engineering': 1 } },
    ],
  },
  {
    id: 509,
    text: 'Topluluk etkinlikleri (hackathon, meetup, konferans) aktif katılır mısın?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Evet! Ağ kurmak ve öğrenmek için harika', weights: { 'product': 2, 'web-dev': 2, 'ai-ml': 1, 'data-science': 1 } },
      { label: 'B', text: 'Bazen, hackathonları seviyorum', weights: { 'web-dev': 1, 'mobile': 1, 'cybersecurity': 1, 'game-dev': 1 } },
      { label: 'C', text: 'Nadir, kendi kendime öğrenmeyi tercih ederim', weights: { 'embedded': 2, 'data-engineering': 1, 'cybersecurity': 1 } },
    ],
  },
  {
    id: 510,
    text: 'Kendi seçtiğin bir alanda uzman mı olmak istersin, yoksa generalist mi?',
    category: 'learning',
    options: [
      { label: 'A', text: 'Derin uzman, benim alanımda en iyisi olmak', weights: { 'ai-ml': 3, 'cybersecurity': 3, 'embedded': 3, 'data-engineering': 2 } },
      { label: 'B', text: 'T-shaped: bir konuda derin, genel kültür', weights: { 'software-architecture': 2, 'devops': 2, 'data-science': 2 } },
      { label: 'C', text: 'Generalist: her şeyden anlıyorum', weights: { 'product': 3, 'web-dev': 2, 'mobile': 1 } },
    ],
  },
];
