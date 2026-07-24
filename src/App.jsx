import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AppGrid from './components/AppGrid'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import AppDetail from './pages/AppDetail'
import DownloadPage from './pages/DownloadPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import NotFound from './pages/NotFound'
import { HelmetProvider, Helmet } from 'react-helmet-async'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function SEO({ title, description, canonical, noIndex = false }) {
  const siteName = 't4tokito Store'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Free Apps by t4tokito | Tokito Store`
  const url = canonical || `https://t4tokito-store.netlify.app${window.location.pathname}`
  const image = 'https://t4tokito-store.netlify.app/logo.jpeg'

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
    </Helmet>
  )
}

function HomePage() {
  return (
    <>
      <SEO
        description="t4tokito Store - Official app store by t4tokito. Download TokitoTV anime streaming app and YT Notes Maker AI notes app for free. Open source, no ads. Also known as Tokito Store and Muichiro Store."
      />
      <div className="home-page">
        <Header />
        <main id="main-content">
          <Hero />
          <Stats />
          <AppGrid />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

function AppDetailPage() {
  return <AppDetail />
}

function DownloadPageWrapper() {
  return <DownloadPage />
}

function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="t4tokito Store Privacy Policy - How we collect, use, and protect your data."
        noIndex={true}
      />
      <PrivacyPolicy />
    </>
  )
}

function TermsOfServicePage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="t4tokito Store Terms of Service - Terms and conditions for using our app store."
        noIndex={true}
      />
      <TermsOfService />
    </>
  )
}

function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist on t4tokito Store."
        noIndex={true}
      />
      <NotFound />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps/:appId" element={<AppDetailPage />} />
        <Route path="/download/:appId" element={<DownloadPageWrapper />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HelmetProvider>
  )
}
