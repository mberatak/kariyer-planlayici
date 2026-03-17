**i vibecoded ts for my friends**

**Türkiye'deki yazılım ve bilgisayar mühendisliği öğrencileri için kişiselleştirilmiş kariyer yönlendirme platformu.**

## 🚀 Hızlı Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# http://localhost:3000 adresinde aç
```

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router sayfaları
│   ├── page.tsx           # Landing Page
│   ├── test/
│   │   ├── page.tsx       # Test seçim sayfası
│   │   ├── hizli/         # 10 soruluk hızlı test
│   │   └── detayli/       # 50 soruluk detaylı test
│   ├── sonuc/             # Sonuç sayfası (radar chart)
│   ├── alanlar/
│   │   ├── page.tsx       # 12 alan grid
│   │   └── [slug]/        # Alan detay sayfaları
│   ├── blog/              # Blog listing
│   ├── roadmap/           # 3/6/12 aylık roadmap
│   └── hakkimizda/        # Hakkında sayfası
├── components/
│   └── layout/            # Navbar, Footer
├── lib/
│   ├── data/              # Alan verileri ve sorular
│   │   ├── areas.ts       # 12 kariyer alanı (maaş, kaynaklar, vb.)
│   │   ├── questions-quick.ts    # 10 hızlı soru
│   │   └── questions-detailed.ts # 50 detaylı soru
│   ├── scoring.ts         # Scoring engine (0-100 normalizasyon)
│   └── store/
│       └── test-store.ts  # Zustand state management
└── types/
    └── index.ts           # TypeScript tipleri
```

## 🛠 Tech Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS |
| Charts | Recharts (Radar Chart) |
| State | Zustand + localStorage |
| Animasyonlar | CSS Animations |
| Icons | Lucide React |
| TypeScript | Tam tip güvenliği |

## 📊 Özellikler

- **Hızlı Test**: 10 soru, 5 dakika, anlık sonuç
- **Detaylı Test**: 50 soru, 5 kategori (Teknik, Sosyal, Hobi, Motivasyon, Öğrenme)
- **Scoring Engine**: Ağırlıklı ortalama → 0-100 normalizasyon
- **Radar Chart**: 12 alan için görsel profil
- **12 Alan Detayı**: Maaş, kariyer yolu, kurslar, proje fikirleri
- **Türkiye Odaklı**: Güncel maaş verileri, şirketler, staj imkanları
- **Glassmorphism Design**: Dark mode, animated gradients

## 🔧 Ortam Değişkenleri

```bash
# .env.local oluştur
cp .env.example .env.local
```

```env
# Şimdilik gerekli değil - tüm veri statik
DATABASE_URL=postgresql://...  # Opsiyonel - Prisma için
NEXTAUTH_SECRET=...             # Opsiyonel - Auth için
NEXTAUTH_URL=http://localhost:3000
```

## 📦 Deployment

```bash
# Build
npm run build

# Vercel'e deploy (önerilen)
npx vercel --prod
```
