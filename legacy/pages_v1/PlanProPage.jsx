
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Smartphone, Globe, Clock, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlanProPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573123299053', '_blank');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const faqs = [
    { question: "¿Cuánto tiempo toma el desarrollo?", answer: "Normalmente entregamos tu tienda Shopify totalmente funcional en 15 a 20 días hábiles." },
    { question: "¿Necesito conocimientos técnicos?", answer: "No, nosotros nos encargamos de todo el aspecto técnico. Te daremos una capacitación para que sepas usarla." },
    { question: "¿Qué métodos de pago puedo aceptar?", answer: "Podrás aceptar tarjetas de crédito, débito, PSE y otros métodos locales e internacionales integrados en Shopify." },
    { question: "¿Incluye el dominio y hosting?", answer: "Te asesoramos en la compra del dominio. El hosting está incluido dentro de la mensualidad de Shopify." }
  ];

  return (
    <div className="bg-[#0f1115] min-h-screen text-white font-sans overflow-hidden">
      <Helmet>
        <title>Plan PRO - DIGITRIAL</title>
        <meta name="description" content="Tu página web se convierte en tu mejor vendedora. Automatiza ventas y atiende clientes 24/7." />
      </Helmet>

      {/* Hero Section (Task 1) */}
      <section className="relative pt-32 pb-20 px-6 lg:min-h-[90vh] flex items-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/40 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Shopify Partner
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                <span className="text-white">TU PÁGINA WEB SE CONVIERTE EN </span>
                <span className="text-green-500">TU MEJOR VENDEDORA</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                Automatiza ventas, ordena el negocio y atiende clientes 24/7.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto"
              >
                CONSULTA GRATIS POR WHATSAPP <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/6b9bdf39-faeb-49b5-9aef-94e01a05f6fc/4346e442691b55c81750ee51a2c9cabe.png" 
                alt="Shopify Branding" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section (Task 2) */}
      <section className="py-24 bg-[#15181e] relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portafolio de <span className="text-green-500">Éxito</span></h2>
            <p className="text-gray-400">Tiendas reales generando ventas todos los días.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="https://horizons-cdn.hostinger.com/6b9bdf39-faeb-49b5-9aef-94e01a05f6fc/bb2254a2e7e28fc6a253a9ef842dba52.png" 
                alt="Website Portfolio Thumbnails and 3D Laptop" 
                className="w-full rounded-2xl shadow-2xl shadow-green-900/20"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
              }}
              className="space-y-6"
            >
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-[#1e222b] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Diseño Optimizado</h3>
                  <p className="text-gray-400 text-sm">Interfaces creadas específicamente para maximizar la tasa de conversión y mejorar la experiencia de usuario.</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials & Benefits Section (Task 3) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Qué vas a obtener con tu <span className="text-green-500">página web?</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-[#15181e] p-6 rounded-2xl border border-gray-800">
                  <Clock className="w-10 h-10 text-green-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Atención 24/7</h4>
                  <p className="text-gray-400 text-sm">Tu negocio nunca duerme. Vende incluso cuando descansas.</p>
                </div>
                <div className="bg-[#15181e] p-6 rounded-2xl border border-gray-800">
                  <Globe className="w-10 h-10 text-green-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Alcance Global</h4>
                  <p className="text-gray-400 text-sm">Rompe fronteras geográficas y llega a más clientes.</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-[#15181e] p-6 rounded-2xl border border-gray-800">
                  <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Automatización</h4>
                  <p className="text-gray-400 text-sm">Procesos de pago y facturación automáticos.</p>
                </div>
                <div className="bg-[#15181e] p-6 rounded-2xl border border-gray-800">
                  <Smartphone className="w-10 h-10 text-green-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Mobile First</h4>
                  <p className="text-gray-400 text-sm">Diseño perfecto para smartphones y tablets.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="https://horizons-cdn.hostinger.com/6b9bdf39-faeb-49b5-9aef-94e01a05f6fc/923eabed3c31ca9e6fe0dce8455d71e4.png" 
                alt="Testimonios y Beneficios" 
                className="w-full rounded-2xl mb-8"
              />
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold text-lg py-6 rounded-xl shadow-lg shadow-green-500/20"
              >
                CONSULTA GRATIS POR WHATSAPP <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info Section (Task 4) */}
      <section className="py-24 bg-gradient-to-br from-green-900/40 to-[#0f1115] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="https://horizons-cdn.hostinger.com/6b9bdf39-faeb-49b5-9aef-94e01a05f6fc/10580b1cd84c46080b8655c03903340a.png" 
                alt="365 COMPANY" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">365 COMPANY</h2>
                <h3 className="text-2xl text-green-400 font-semibold">Expertos en E-commerce</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Brindamos consultoría personalizada para escalar tu negocio al siguiente nivel. Transformamos ideas en tiendas rentables.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-green-500 w-6 h-6 shrink-0" />
                  <span>Más de 4 años de experiencia en el mercado</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-green-500 w-6 h-6 shrink-0" />
                  <span>+340 clientes satisfechos a nivel global</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="text-green-500 w-6 h-6 shrink-0" />
                  <span>Soporte técnico y estratégico continuo</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA Section (Task 5) */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  SI TU QUIERES TU <span className="text-green-500">PÁGINA WEB</span>
                </h2>
                <p className="text-xl text-gray-400">Profesional y lista para vender.</p>
              </div>
              
              <img 
                src="https://horizons-cdn.hostinger.com/6b9bdf39-faeb-49b5-9aef-94e01a05f6fc/14bba071a56914f4e4d58a862674d7f3.png" 
                alt="3D Phone and WhatsApp" 
                className="w-full max-w-sm"
              />

              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold text-xl py-8 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-all"
              >
                ¡QUIERO MI PÁGINA WEB! <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-[#15181e] rounded-3xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-800 rounded-xl overflow-hidden bg-[#0f1115]">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-gray-200 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-green-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-green-500 shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-5 pb-5 text-gray-400 text-sm"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500">
                  Desarrollo de tiendas online especializadas en conversión.
                  <br />© {new Date().getFullYear()} DIGITRIAL
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanProPage;
