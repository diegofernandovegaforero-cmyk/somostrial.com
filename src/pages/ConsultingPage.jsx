import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Sliders, Activity, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ConsultingPage = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: "Aún no hemos añadido los paquetes de Consultoría a la tienda. ¡Pídelo en tu próximo prompt! 🚀"
    });
  };

  const features = [
    {
      icon: Search,
      title: "Diagnóstico de Sistemas de Gestión",
      description: "Analizamos a fondo tus procesos actuales para identificar ineficiencias y áreas de mejora clave en tu sistema de gestión."
    },
    {
      icon: Sliders,
      title: "Implementación a Medida",
      description: "Diseñamos e implementamos sistemas de gestión personalizados que se adaptan a tus necesidades y objetivos específicos."
    },
    {
      icon: Activity,
      title: "Monitoreo y Mejora Continua",
      description: "Ofrecemos seguimiento constante y análisis de rendimiento para asegurar la optimización y el éxito a largo plazo de tus sistemas."
    }
  ];

  const pricingPackages = [
    {
      name: "Diagnóstico Inicial",
      price: "1.200.000",
      description: "Una evaluación completa para entender el estado actual de tus sistemas de gestión.",
      features: [
        "Análisis de hasta 3 procesos clave",
        "Mapeo de flujo de trabajo actual",
        "Informe de diagnóstico con hallazgos",
        "Sesión de presentación de resultados"
      ],
      isPopular: false,
    },
    {
      name: "Implementación Completa",
      price: "4.500.000",
      description: "Diseño y puesta en marcha de un sistema de gestión optimizado.",
      features: [
        "Todo lo del plan Diagnóstico",
        "Diseño de nuevo sistema de gestión",
        "Implementación y configuración",
        "Capacitación para el equipo (hasta 10 personas)"
      ],
      isPopular: true,
    },
    {
      name: "Soporte y Monitoreo",
      price: "2.500.000",
      description: "Acompañamiento mensual para asegurar el rendimiento y la mejora continua.",
      features: [
        "Seguimiento mensual de KPIs",
        "Informes de rendimiento y optimización",
        "Soporte técnico prioritario",
        "Reuniones de revisión trimestrales"
      ],
      isPopular: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultoría en Sistemas de Gestión - TRIAL</title>
        <meta name="description" content="Ofrecemos diagnóstico, implementación y monitoreo de sistemas de gestión para optimizar la eficiencia y el rendimiento de tu empresa." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Consultoría en <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Sistemas de Gestión</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimizamos la eficiencia y el rendimiento de tu empresa a través del diagnóstico, implementación y monitoreo de sistemas de gestión.
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

        <section id="paquetes-consultoria" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Planes de Consultoría</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones estructuradas para transformar la gestión de tu negocio.
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
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para optimizar tu gestión?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos mejorar la eficiencia de tus operaciones.
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

export default ConsultingPage;