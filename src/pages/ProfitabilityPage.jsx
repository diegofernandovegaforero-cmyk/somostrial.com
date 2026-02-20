import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, ClipboardList, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProfitabilityPage = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: "Aún no hemos añadido los paquetes de Rentabilidad a la tienda. ¡Pídelo en tu próximo prompt! 🚀"
    });
  };

  const features = [
    {
      icon: DollarSign,
      title: "Análisis Financiero Profundo",
      description: "Realizamos una auditoría completa de tus finanzas para identificar fugas de capital y oportunidades de ahorro."
    },
    {
      icon: ClipboardList,
      title: "Estrategias Personalizadas",
      description: "Desarrollamos un plan de acción a medida para optimizar costos, mejorar precios y maximizar tus márgenes de ganancia."
    },
    {
      icon: TrendingUp,
      title: "ROI Medible y Sostenible",
      description: "Implementamos KPIs y sistemas de seguimiento para asegurar que cada acción genere un retorno de inversión claro y duradero."
    }
  ];

  const pricingPackages = [
    {
      name: "Diagnóstico de Rentabilidad",
      price: "950.000",
      description: "Un análisis completo para entender la salud financiera de tu negocio.",
      features: [
        "Análisis de estado de resultados",
        "Identificación de 3 áreas clave de mejora",
        "Informe detallado con recomendaciones",
        "Sesión de estrategia de 90 min"
      ],
      isPopular: false,
    },
    {
      name: "Plan de Optimización",
      price: "2.800.000",
      description: "Implementamos las estrategias para aumentar tu rentabilidad.",
      features: [
        "Todo lo del plan Diagnóstico",
        "Implementación de estrategias de precios",
        "Optimización de estructura de costos",
        "Seguimiento mensual por 3 meses"
      ],
      isPopular: true,
    },
    {
      name: "Asesoría Estratégica",
      price: "5.200.000",
      description: "Acompañamiento continuo para un crecimiento financiero sostenible.",
      features: [
        "Todo lo del plan Optimización",
        "Planificación financiera a largo plazo",
        "Asesoría en decisiones de inversión",
        "Reuniones quincenales de seguimiento"
      ],
      isPopular: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mejora de Rentabilidad - TRIAL</title>
        <meta name="description" content="Estrategias para optimizar y aumentar la rentabilidad de tu negocio. Análisis profundo, estrategias personalizadas y ROI medible." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Maximiza la <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Rentabilidad</span> de tu Negocio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre el verdadero potencial de ganancias de tu empresa con nuestras estrategias financieras probadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-gray-700 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 p-4 rounded-xl mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <section id="paquetes-rentabilidad" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Planes de Consultoría</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones a la medida para impulsar tus finanzas.
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
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para tomar el control de tus finanzas?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y sin compromiso para evaluar el potencial de rentabilidad de tu negocio.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-lg px-10 py-4">
            <Link to="/store">
              Consulta Gratuita <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default ProfitabilityPage;