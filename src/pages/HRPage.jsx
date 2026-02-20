import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, ShieldCheck, HeartHandshake, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HRPage = () => {
  const { toast } = useToast();

  const handleBuyClick = () => {
    toast({
      title: "🚧 ¡Próximamente!",
      description: "Aún no hemos añadido estos paquetes a la tienda. ¡Pídelo en tu próximo prompt! 🚀"
    });
  };

  const features = [
    {
      icon: Users,
      title: "Gestión de Talento Humano",
      description: "Atraemos, seleccionamos y desarrollamos el mejor talento para tu organización, alineado con tu cultura y objetivos."
    },
    {
      icon: ShieldCheck,
      title: "Sistema de Gestión de SST",
      description: "Diseñamos e implementamos el SG-SST, garantizando el cumplimiento normativo y un entorno de trabajo seguro."
    },
    {
      icon: HeartHandshake,
      title: "Cultura y Bienestar Laboral",
      description: "Fomentamos un ambiente laboral positivo y productivo a través de estrategias de bienestar y desarrollo organizacional."
    }
  ];

  const pricingPackages = [
    {
      name: "Diseño SG-SST",
      price: "750.000",
      description: "Diseño del SG-SST para hasta 50 trabajadores. Es un pago único.",
      features: [
        "Diagnóstico inicial",
        "Documentación y formatos en Office",
        "Plan de trabajo anual",
        "Asesoría por 1 mes"
      ],
      isPopular: false,
    },
    {
      name: "Integral TH + SST",
      price: "2.500.000",
      description: "Gestión completa de talento humano y seguridad en el trabajo (hasta 50 trabajadores). Costo por mes.",
      features: [
        "Implementación completa del SG-SST",
        "Proceso de selección (1 vacante)"],
      isPopular: true,
    },
    {
      name: "Asesoría Personalizada",
      price: "1.500.000",
      description: "Soporte y consultoría a la medida para tus necesidades. Costo por mes.",
      features: [
        "Bolsa de 8 horas de consultoría",
        "Acompañamiento en procesos de TH"
      ],
      isPopular: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Talento Humano y SST - TRIAL</title>
        <meta name="description" content="Gestión integral del talento humano y cumplimiento de normativas de seguridad y salud en el trabajo (SST)." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Talento Humano y <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">Seguridad en el Trabajo</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cuidamos tu equipo y garantizamos un entorno laboral seguro y productivo.
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

        <section id="paquetes-th-sst" className="py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Planes</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones a la medida para la gestión de tu equipo y el cumplimiento normativo.
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
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para fortalecer tu equipo?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos potenciar tu talento humano y garantizar la seguridad en tu empresa.
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

export default HRPage;