import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star as StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const WebsitesPage = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleBuyClick = (productLink) => {
    if (!productLink) {
      toast({
        title: t('common.coming_soon_title'),
        description: t('common.coming_soon_desc')
      });
    }
  };

  const pricingPackages = [
    {
      name: "Paquete Emprendedor",
      price: "750.000",
      description: "Ideal para pequeños negocios y emprendedores que necesitan una presencia online básica y efectiva.",
      features: [
        "Diseño web básico (hasta 5 secciones)",
        "Integración de redes sociales",
        "Formulario de contacto",
        "Dominio y hosting (1 año)",
        "Soporte técnico (1 mes)"
      ],
      isPopular: false,
      productLink: "/product/prod_01K5KTDFNFA2J9J04W9NXFDHQ8"
    },
    {
      name: "Paquete Profesional",
      price: "1.800.000",
      description: "Perfecto para empresas que buscan una web más robusta con funcionalidades avanzadas y mayor impacto.",
      features: [
        "Diseño web personalizado (hasta 10 secciones)",
        "Integración de blog",
        "Galería de imágenes/videos",
        "Optimización SEO avanzada",
        "Integración de Google Analytics",
        "Dominio y hosting (1 año)",
        "Soporte técnico (3 meses)"
      ],
      isPopular: true,
      productLink: null
    },
    {
      name: "Paquete Premium",
      price: "3.500.000",
      description: "La solución completa para negocios que exigen lo mejor en diseño, funcionalidad y rendimiento.",
      features: [
        "Diseño web a medida (secciones ilimitadas)",
        "Integración de e-commerce (hasta 20 productos)",
        "Sistema de reservas/citas",
        "Optimización SEO completa",
        "Integración de CRM",
        "Dominio y hosting (1 año)",
        "Soporte técnico prioritario (6 meses)"
      ],
      isPopular: false,
      productLink: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('services.web')} - DIGITRIAL</title>
        <meta name="description" content="Creamos sitios web profesionales y modernos que convierten visitantes en clientes. Diseño responsivo, SEO optimizado y carga rápida." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
             {t('services.web')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creamos sitios web profesionales y modernos que no solo lucen bien, sino que también convierten visitantes en clientes.
          </p>
        </motion.div>

        <section id="paquetes-web" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Paquetes</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades y ambiciones de tu negocio.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col bg-white/5 backdrop-blur-md rounded-2xl p-8 border ${pkg.isPopular ? 'border-purple-500' : 'border-gray-700'}`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2">
                      <StarIcon className="h-4 w-4" />
                      {t('common.popular')}
                    </div>
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-center mb-6">{pkg.description}</p>
                  <div className="text-center mb-8">
                    <span className="text-5xl font-bold text-white">${pkg.price}</span>
                    <span className="text-gray-400"> COP</span>
                  </div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  {pkg.productLink ? (
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-lg">
                      <Link to={pkg.productLink}>
                        {t('common.buy_now')} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  ) : (
                    <Button onClick={() => handleBuyClick(pkg.productLink)} size="lg" className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-lg">
                      {t('common.buy_now')} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl py-16 px-8 mt-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para tener tu propia web?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y empecemos a construir la presencia digital que tu negocio merece.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-lg px-10 py-4">
            <Link to="/store">
              {t('common.contact_us')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default WebsitesPage;