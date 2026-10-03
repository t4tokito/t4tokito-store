import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AppGrid from './components/AppGrid';
import Features from './components/Features';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import { faqs } from './data/faqs';
import AboutStore from './components/AboutStore';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Code-split below-the-fold routes for a faster first paint (better Core Web Vitals).
const AppDetail = lazy(() => import('./pages/AppDetail'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Loading page">
      <svg className="animate-spin" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-6.2-8.56" />
      </svg>
    </div>
  );
}

const SITE = 'https://t4tokito-store.netlify.app';
const DEFAULT_DESC =
  't4tokito Store — download free Android apps by t4tokito. TokitoTV anime streaming, Tokito Music streaming, and YT Notes Maker AI study-notes app. Free, no ads, open source. Also known as Tokito Store and Muichiro Store.';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SEO({ title, description = DEFAULT_DESC, canonical, noIndex = false, jsonLd = null }) {
  const fullTitle = title ? `${title} | t4tokito Store` : 't4tokito Store — Download Free Android Apps';
  const url = canonical || `${SITE}/`;
  const image = `${SITE}/logo.jpeg`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="t4tokito Store" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'Free Android apps by t4tokito',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'TokitoTV', url: `${SITE}/apps/tokitotv` },
        { '@type': 'ListItem', position: 2, name: 'Tokito Music', url: `${SITE}/apps/tokito-music` },
        { '@type': 'ListItem', position: 3, name: 'YT Notes Maker', url: `${SITE}/apps/yt-notes-maker` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

function HomePage() {
  return (
    <>
      <SEO canonical={`${SITE}/`} jsonLd={homeJsonLd} />
      <div className="home-page">
        <Header />
        <main id="main-content">
          <Hero />
          <Stats />
          <AppGrid />
          <Features />
          <Testimonials />
          <AboutStore />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps/:appId" element={<AppDetail />} />
          <Route path="/download/:appId" element={<DownloadPage />} />
          <Route
            path="/privacy"
            element={
              <>
                <SEO title="Privacy Policy" description="t4tokito Store Privacy Policy — this website collects no personal data. No cookies, no analytics, no tracking." noIndex canonical={`${SITE}/privacy`} />
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <SEO title="Terms of Service" description="t4tokito Store Terms of Service — terms for downloading free apps TokitoTV, Tokito Music and YT Notes Maker." noIndex canonical={`${SITE}/terms`} />
                <TermsOfService />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <SEO title="Page Not Found" description="The page you're looking for doesn't exist on t4tokito Store." noIndex />
                <NotFound />
              </>
            }
          />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}
