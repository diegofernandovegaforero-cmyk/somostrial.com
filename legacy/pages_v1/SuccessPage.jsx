import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useTranslation } from 'react-i18next';

const SuccessPage = () => {
  const { clearCart } = useCart();
  const { t } = useTranslation();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Helmet>
        <title>{t('success.title')} - DIGITRIAL</title>
        <meta name="description" content={t('success.message')} />
      </Helmet>
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-gray-700"
        >
          <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('success.title')}</h1>
          <p className="text-lg text-gray-300 mb-8">
            {t('success.message')}
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-lg px-8 py-4">
            <Link to="/store">
              {t('success.continue')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessPage;