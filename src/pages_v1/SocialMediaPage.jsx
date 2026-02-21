import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SocialMediaPage = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: "Aún no hemos añadido los paquetes de Redes Sociales a la tienda. ¡Pídelo en tu próximo prompt! 🚀"
    });
  };

  const pricingPackages = [
    {
      name: "Plan Básico",
      price: "500.000",
      description: "Para empezar a construir tu presencia en redes.",
      features: [
        "Gestión de 2 redes sociales",
        "12 publicaciones mensuales",
        "Creación de contenido básico",
        "Reporte mensual de métricas"
      ],
      isPopular: false,
    },
    {
      name: "Plan Crecimiento",
      price: "1.200.000",
      description: "Ideal para negocios que buscan crecer y generar engagement.",
      features: [
        "Gestión de 3 redes sociales",
        "20 publicaciones mensuales",
        "Contenido de video (Reels/Shorts)",
        "Gestión de comunidad",
        "Reporte quincenal detallado"
      ],
      isPopular: true,
    },
    {
      name: "Plan Dominio",
      price: "2.500.000",
      description: "La solución completa para dominar tu nicho en redes.",
      features: [
        "Gestión de hasta 5 redes",
        "Publicaciones diarias",
        "Estrategia de contenido avanzada",
        "Gestión de campañas de pago (ads)",
        "Soporte prioritario y reuniones"
      ],
      isPopular: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Manejo de Redes Sociales - TRIAL</title>
        <meta name="description" content="Gestión profesional de redes sociales para aumentar tu presencia, engagement y crecimiento orgánico. Creamos contenido que conecta." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Redes Sociales que <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Conectan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos tus perfiles sociales en potentes canales de comunicación y ventas para tu marca.
          </p>
        </motion.div>

        <section id="paquetes-redes" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Planes de Social Media</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus objetivos de crecimiento.
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
                      <Star className="h-4 w-4" />
                      MÁS POPULAR
                    </div>
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-center mb-6">{pkg.description}</p>
                  <div className="text-center mb-8">
                    <span className="text-5xl font-bold text-white">${pkg.price}</span>
                    <span className="text-gray-400"> COP/mes</span>
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
                  <Button onClick={handleBuyClick} size="lg" className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-lg">
                    Contratar Plan
                  </Button>
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
          <h2 className="text-4xl font-bold text-white mb-4">¿Buscas una estrategia a tu medida?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hablemos de tus objetivos. Diseñamos estrategias de redes sociales personalizadas para marcas únicas como la tuya.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-lg px-10 py-4">
            <Link to="/store">
              Agendar una Llamada <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default SocialMediaPage;