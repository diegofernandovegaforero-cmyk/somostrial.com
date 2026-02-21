import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SalesFunnelsPage = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: "Aún no hemos añadido los paquetes de Funnels de Venta a la tienda. ¡Pídelo en tu próximo prompt! 🚀"
    });
  };

  const pricingPackages = [
    {
      name: "Funnel de Captura de Leads",
      price: "800.000",
      description: "Ideal para construir tu base de datos de clientes potenciales.",
      features: [
        "Landing Page de Captura",
        "Secuencia de 3 emails automáticos",
        "Integración con tu CRM/Email Marketing",
        "Reporte de rendimiento inicial"
      ],
      isPopular: false,
    },
    {
      name: "Funnel de Venta Directa",
      price: "1.900.000",
      description: "Para vender un producto o servicio de forma automatizada.",
      features: [
        "Página de ventas + Checkout",
        "Secuencia de 5 emails (venta y seguimiento)",
        "Order Bump y Upsell de 1 clic",
        "Optimización de conversión (1 mes)"
      ],
      isPopular: true,
    },
    {
      name: "Funnel de Lanzamiento",
      price: "4.500.000",
      description: "La solución completa para lanzar un nuevo producto al mercado.",
      features: [
        "Estrategia de lanzamiento completa",
        "Múltiples páginas (captura, venta, gracias)",
        "Automatización avanzada (webinars, etc.)",
        "Soporte y optimización durante el lanzamiento"
      ],
      isPopular: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicio de Funnels de Venta - TRIAL</title>
        <meta name="description" content="Diseñamos y optimizamos embudos de venta automatizados que convierten prospectos en clientes leales y maximizan tus ingresos." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Funnels de Venta que <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Trabajan por Ti</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Construimos sistemas automatizados que atraen, nutren y convierten clientes, permitiéndote escalar tu negocio.
          </p>
        </motion.div>

        <section id="paquetes-funnels" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Paquetes de Funnels</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones estratégicas para cada etapa de tu negocio.
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
          <h2 className="text-4xl font-bold text-white mb-4">¿Necesitas un embudo a la medida?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Diseñamos estrategias y embudos complejos adaptados a tus necesidades específicas.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-lg px-10 py-4">
            <Link to="/store">
              Solicitar Estrategia <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default SalesFunnelsPage;