
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/hooks/useCart';
import { Toaster } from '@/components/ui/toaster';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import Layout from '@/components/Layout';
import SalesFunnelPage from '@/pages/SalesFunnelPage';
import StorePage from '@/pages/StorePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import SuccessPage from '@/pages/SuccessPage';
import WebsitesPage from '@/pages/WebsitesPage';
import LandingPagesPage from '@/pages/LandingPagesPage';
import SalesFunnelsPage from '@/pages/SalesFunnelsPage';
import SocialMediaPage from '@/pages/SocialMediaPage';
import HRPage from '@/pages/HRPage';
import BrandingPage from '@/pages/BrandingPage';
import PlanProPage from '@/pages/PlanProPage';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SalesFunnelPage />} />
            <Route path="store" element={<StorePage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="success" element={<SuccessPage />} />
            <Route path="servicios/paginas-web" element={<WebsitesPage />} />
            <Route path="servicios/landing-pages" element={<LandingPagesPage />} />
            <Route path="servicios/funnel-de-ventas" element={<SalesFunnelsPage />} />
            <Route path="servicios/redes-sociales" element={<SocialMediaPage />} />
            <Route path="servicios/talento-humano-sst" element={<HRPage />} />
            <Route path="servicios/posicionamiento-marca" element={<BrandingPage />} />
            <Route path="plan-pro" element={<PlanProPage />} />
          </Route>
        </Routes>
        <Toaster />
      </CartProvider>
    </I18nextProvider>
  );
}

export default App;
