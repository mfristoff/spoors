import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import SeoSchema from '@/components/SeoSchema';
import SiteLayout from '@/components/layout/SiteLayout';
import RouteLoadingFallback from '@/components/RouteLoadingFallback';


// Keep the homepage eager for the fastest first paint; split every other route.
import HomePage from './pages/HomePage';
import Group32 from './pages/Group32';
import Group33 from './pages/Group33';
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));
const Services = lazy(() => import('@/pages/Services'));
const ServicePage = lazy(() => import('@/pages/services/ServicePage'));
const ServiceAreaPage = lazy(() => import('@/pages/areas/ServiceAreaPage'));
const Resources = lazy(() => import('@/pages/Resources'));
const Article = lazy(() => import('@/pages/resources/Article'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy'));
const Terms = lazy(() => import('@/pages/Terms'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));
const Financing2 = lazy(() => import('./pages/Financing2'));
const HeatingServices = lazy(() => import('./pages/services/HeatingServices'));
const IndoorAirQualityServices = lazy(() => import('./pages/services/IndoorAirQualityServices'));
const EmergencyServices = lazy(() => import('./pages/services/EmergencyServices'));
const MaintenanceServices = lazy(() => import('./pages/services/MaintenanceServices'));
const DuctlessMiniSplitServices = lazy(() => import('./pages/services/DuctlessMiniSplitServices'));
const SwampCoolerServices = lazy(() => import('./pages/services/SwampCoolerServices'));
const WaterHeaterServices = lazy(() => import('./pages/services/WaterHeaterServices'));
const AirConditioningServices = lazy(() => import('./pages/services/AirConditioningServices'));
const Group30 = lazy(() => import('./pages/Group30'));
const Blog2 = lazy(() => import('./pages/Blog'));
const ServicesAreaPage = lazy(() => import('./pages/ServicesAreaPage'));
const Rebates2 = lazy(() => import('./pages/Rebates2'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const CareerPage = lazy(() => import('./pages/CareerPage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <SeoSchema />
          <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<SiteLayout />}>
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/about-us/:slug" element={<AboutPage />} />
              <Route path="/testimonials" element={<Testimonial />} />

              <Route path="/services" element={<Services />} />
              <Route path="/services/heating" element={<HeatingServices />} />
              <Route path="/services/indoor-air-quality" element={<IndoorAirQualityServices />} />
              <Route path="/services/emergency-repairs" element={<EmergencyServices />} />
              <Route path="/services/maintenance-tune-ups" element={<MaintenanceServices />} />
              <Route path="/services/ductless-mini-splits" element={<DuctlessMiniSplitServices />} />
              <Route path="/services/swamp-coolers" element={<SwampCoolerServices />} />
              <Route path="/services/water-heater-services" element={<WaterHeaterServices />} />
              <Route path="/services/air-conditioning" element={<AirConditioningServices />} />
              <Route path="/services/planned-maintenance" element={<Group30 />} />
              <Route path="/services/:slug" element={<ServicePage />} />

              <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />

              <Route path="/resources" element={<Resources />} />

              <Route path="/financing" element={<Financing2 />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/terms" element={<Terms />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/Blog" element={<Blog2 />} />
            <Route path="/resources/blog" element={<Blog2 />} />
            <Route path="/resources/blog/page/:pageNumber" element={<Blog2 />} />
            <Route path="/resources/blog/:slug" element={<Article />} />
            <Route path="/service-areas" element={<ServicesAreaPage />} />
            <Route path="/rebates" element={<Rebates2 />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/Group32" element={<Group32 />} />
            <Route path="/Group33" element={<Group33 />} />
          </Routes>
          </Suspense>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App