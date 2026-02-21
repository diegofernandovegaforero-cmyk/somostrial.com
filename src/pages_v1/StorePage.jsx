import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';
import { useTranslation } from 'react-i18next';

const StorePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('store.title')} - DIGITRIAL</title>
        <meta name="description" content={t('store.subtitle')} />
      </Helmet>
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{t('store.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('store.subtitle')}
          </p>
        </motion.div>
        <ProductsList />
      </div>
    </>
  );
};

export default StorePage;