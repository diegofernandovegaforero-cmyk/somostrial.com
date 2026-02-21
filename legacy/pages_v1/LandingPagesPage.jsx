import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TestTube2, BarChart3, FileText, Zap, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const LandingPagesPage = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: "Aún no hemos añadido los paquetes de Landing Pages a la tienda. ¡Pídelo en tu próximo prompt! 🚀"
    });
  };

  const features = [
    {
      icon: Target,
      title: "Diseño Enfocado en Conversión",
      description: "Cada elemento está estratégicamente diseñado para guiar al usuario hacia una única acción: convertir."
    },
    {
      icon: TestTube2,
      title: "Pruebas A/B para Optimización",
      description: "Probamos diferentes versiones de tu landing page para descubrir qué funciona mejor y maximizar tus resultados."
    },
    {
      icon: BarChart3,
      title: "Análisis y Reportes Detallados",
      description: "Integramos herramientas de análisis para medir cada clic y entender el comportamiento de tus visitantes."
    },
    {
      icon: FileText,
      title: "Copywriting Persuasivo",
      description: "Creamos textos que conectan, convencen y motivan a la acción, comunicando tu propuesta de valor de forma clara."
    },
    {
      icon: Zap,
      title: "Velocidad de Carga Extrema",
      description: "Optimizamos tu página para que cargue al instante, evitando que pierdas visitantes impacientes."
    },
    {
      icon: CheckCircle,
      title: "Formularios Inteligentes",
      description: "Diseñamos formularios sencillos y eficaces que aumentan la tasa de captación de leads sin fricción."
    }
  ];

  const pricingPackages = [
    {
      name: "Landing Page de Captura",
      price: "450.000",
      description: "Perfecta para capturar leads y validar ideas de negocio.",
      features: [
        "Diseño de 1 sección",
        "Formulario de contacto/suscripción",
        "Integración con Mailchimp",
        "Análisis de tráfico básico",
        "Entrega en 7 días"
      ],
      isPopular: false,
    },
    {
      name: "Landing Page de Ventas",
      price: "950.000",
      description: "Diseñada para vender un producto o servicio específico.",
      features: [
        "Diseño multi-sección persuasivo",
        "Copywriting enfocado en ventas",
        "Pruebas A/B (2 variantes)",
        "Análisis de conversión avanzado",
        "Integración con pasarela de pago"
      ],
      isPopular: true,
    },
    {
      name: "Paquete de Campaña",
      price: "2.100.000",
      description: "Un conjunto de landing pages para una campaña completa.",
      features: [
        "3 Landing Pages optimizadas",
        "Análisis de embudo completo",
        "Reportes de rendimiento semanales",
        "Soporte prioritario para la campaña",
        "Optimización continua"
      ],
      isPopular: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicio de Landing Pages - TRIAL</title>
        <meta name="description" content="Creamos Landing Pages de alta conversión, optimizadas con pruebas A/B y análisis para maximizar los resultados de tus campañas." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Landing Pages que <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Venden</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Páginas de aterrizaje diseñadas con un único objetivo: convertir a tus visitantes en clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        <section id="paquetes-landing" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Paquetes de Landing Pages</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones enfocadas para cada objetivo de tu campaña.
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
                    Comprar Ahora
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
          <h2 className="text-4xl font-bold text-white mb-4">¿Tu campaña necesita algo especial?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creamos experiencias a medida. Contáctanos y diseñemos juntos la landing page perfecta.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-lg px-10 py-4">
            <Link to="/store">
              Solicitar Consulta <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPagesPage;