import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Target, Award, CheckCircle, Star as StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BrandingPage = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: "Aún no hemos añadido los paquetes de Branding a la tienda. ¡Pídelo en tu próximo prompt! 🚀"
    });
  };

  const features = [
    {
      icon: Palette,
      title: "Branding Completo",
      description: "Creamos una identidad visual cohesiva y memorable, desde el logo hasta la paleta de colores y tipografía."
    },
    {
      icon: Target,
      title: "Estrategia de Marca",
      description: "Definimos el propósito, la voz y el posicionamiento de tu marca para conectar auténticamente con tu público."
    },
    {
      icon: Award,
      title: "Diferenciación y Valor",
      description: "Te ayudamos a destacar en un mercado competitivo, comunicando tu propuesta de valor única de forma efectiva."
    }
  ];

  const pricingPackages = [
    {
      name: "Identidad Visual",
      price: "1.500.000",
      description: "El paquete esencial para dar vida visual a tu marca.",
      features: [
        "Diseño de logotipo (3 propuestas)",
        "Paleta de colores y tipografías",
        "Manual de marca básico",
        "Diseño de tarjeta de presentación"
      ],
      isPopular: false,
    },
    {
      name: "Estrategia de Marca",
      price: "3.500.000",
      description: "Para marcas que buscan una base estratégica sólida.",
      features: [
        "Todo lo de Identidad Visual",
        "Definición de arquetipo y voz",
        "Análisis de competencia",
        "Estrategia de comunicación",
        "Manual de marca extendido"
      ],
      isPopular: true,
    },
    {
      name: "Branding 360°",
      price: "7.000.000",
      description: "La transformación completa para posicionar tu marca como líder.",
      features: [
        "Todo lo de Estrategia de Marca",
        "Diseño de papelería completa",
        "Plantillas para redes sociales",
        "Guía de estilo fotográfico",
        "Consultoría de marca (3 meses)"
      ],
      isPopular: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Posicionamiento de Marca - TRIAL</title>
        <meta name="description" content="Construimos marcas memorables. Ofrecemos branding completo, estrategia de marca y diferenciación para destacar en el mercado." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Marcas que <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Inspiran</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Construimos y fortalecemos la identidad de tu marca para que dejes una huella imborrable en el mercado.
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

        <section id="paquetes-branding" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Planes de Branding</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Elige el plan perfecto para construir o renovar tu marca.
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
          <h2 className="text-4xl font-bold text-white mb-4">¿Tu marca necesita una nueva dirección?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hablemos sobre tu visión. Juntos podemos construir una marca que no solo se vea bien, sino que también conecte y perdure.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-lg px-10 py-4">
            <Link to="/store">
              Iniciar mi Proyecto de Marca <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default BrandingPage;