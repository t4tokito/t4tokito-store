# t4tokito Store — Download Free Android Apps

**t4tokito Store** (also known as **Tokito Store** / **Muichiro Store**) is the official website to download
free Android apps built by indie developer [**t4tokito**](https://github.com/t4tokito).
No ads. No tracking. 100% open source.

🌐 Live: **https://t4tokito-store.netlify.app/**

## 📱 Apps

| App | What it does | Rating | Download |
|-----|--------------|--------|----------|
| **TokitoTV** 🎬 | Free anime streaming app for Android — trending shows, continue watching, 40+ genres, dark theme. Built with Expo + AniList API. | ★ 4.8 (2,847 reviews) | [APK](https://t4tokito-store.netlify.app/download/tokitotv) · [Source](https://github.com/t4tokito/TokitoTv) |
| **YT Notes Maker** 📝 | Turn any YouTube video into AI-powered notes, flashcards & quizzes. Firebase sync + offline support. | ★ 4.9 (1,234 reviews) | [APK](https://t4tokito-store.netlify.app/download/yt-notes-maker) · [Source](https://github.com/t4tokito/yt-notes-maker) |

## ✨ Store features

- Modern, clean, mobile-first design with light + dark mode
- SEO optimized: meta tags, Open Graph, JSON-LD (WebSite, SoftwareApplication, FAQ, Breadcrumbs), sitemap, robots.txt
- Per-app detail pages with ratings, features, screenshots, changelog
- One-tap APK download pages with install guides
- Fully client-side — React + Vite + React Router

## 🛠️ Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## 📁 Project structure

```
src/
  components/   # Header, Hero, AppGrid, Features, FAQ, Testimonials, CTA, Footer
  pages/        # AppDetail, DownloadPage, PrivacyPolicy, TermsOfService, NotFound
  data/apps.js  # App catalogue (single source of truth)
  hooks/        # useTheme (light/dark mode)
public/         # sitemap.xml, robots.txt, _redirects, icons, manifest
```

## 🤝 Contributing

Found a bug or want a feature? Open an issue or PR —
or contribute directly to [TokitoTV](https://github.com/t4tokito/TokitoTv) and
[YT Notes Maker](https://github.com/t4tokito/yt-notes-maker).

## 📄 License

Store website: MIT. Individual apps follow their own repository licences.
