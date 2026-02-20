
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, Users, Zap, Star, CheckCircle, HeartHandshake, MessageCircle, Mail, Phone, MapPin, Briefcase, Layers, Code, Smartphone, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleContactClick = () => {
    toast({
      title: t('common.feature_not_implemented'),
      description: t('common.feature_request')
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573123299053', '_blank');
  };

  const services = [
    {
      icon: Rocket,
      color: "text-green-600",
      bg: "bg-green-50",
      title: "Plan PRO Shopify",
      description: "Tu página web se convierte en tu mejor vendedora. Automatiza ventas, ordena el negocio y atiende clientes 24/7.",
      features: ["Diseño Optimizado", "Automatización", "Mobile First"],
      link: "/plan-pro",
      highlight: true
    },
    {
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: t('services.web'),
      description: "Sitios web de alto impacto que fusionan estética y funcionalidad para convertir visitantes en clientes.",
      features: ["Diseño Responsive", "UX/UI Moderno", "Optimización SEO"],
      link: "/servicios/paginas-web"
    },
    {
      icon: Layers,
      color: "text-purple-600",
      bg: "bg-purple-50",
      title: t('services.landing'),
      description: "Páginas de aterrizaje optimizadas científicamente para maximizar tus tasas de conversión.",
      features: ["A/B Testing", "Copywriting Persuasivo", "Carga Rápida"],
      link: "/servicios/landing-pages"
    },
    {
      icon: TrendingUp,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      title: t('services.funnels'),
      description: "Sistemas automatizados que guían a tus prospectos hasta la compra de forma natural.",
      features: ["Automatización", "Email Marketing", "Seguimiento"],
      link: "/servicios/funnel-de-ventas"
    },
    {
      icon: Users,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      title: t('services.social'),
      description: "Estrategias de contenido que construyen comunidad y amplifican la voz de tu marca.",
      features: ["Gestión de Comunidad", "Contenido Viral", "Ads Management"],
      link: "/servicios/redes-sociales"
    },
    {
      icon: Star,
      color: "text-amber-600",
      bg: "bg-amber-50",
      title: t('services.branding'),
      description: "Construcción de identidad de marca que resuena emocionalmente con tu audiencia.",
      features: ["Identidad Visual", "Tono de Voz", "Manual de Marca"],
      link: "/servicios/posicionamiento-marca"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "CEO, Tech Solutions",
      text: "TRIAL DIGITAL no solo creó nuestra web, redefinió cómo interactuamos con nuestros clientes. Las ventas subieron un 300%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Carlos Rodríguez",
      role: "Director, Innovate Corp",
      text: "La claridad estratégica y la ejecución técnica de este equipo es de clase mundial. Un socio indispensable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Ana Martínez",
      role: "Founder, Creative Agency",
      text: "Transformaron nuestra visión abstracta en una realidad digital tangible y rentable. Simplemente brillantes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>DIGITRIAL | Centro de Soluciones Digitales</title>
        <meta name="description" content="DIGITRIAL - Transformamos negocios con soluciones digitales de vanguardia. Desarrollo web, marketing y estrategia en Colombia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-purple-50 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {t('hero.badge')}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6 tracking-tight">
                {t('hero.title_start')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {t('hero.title_highlight')}
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-slate-900 hover:bg-blue-600 text-white rounded-full px-8 h-14 text-lg transition-all duration-300 shadow-xl hover:shadow-blue-600/20"
                >
                  <Link to="/store">
                    {t('hero.cta_explore')}
                  </Link>
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-8 h-14 text-lg border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                  {t('hero.cta_whatsapp')}
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                 <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-white relative overflow-hidden group">
                   <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                   <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                      alt="Digital Team Working" 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                   />
                 </div>
                 
                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-green-100 rounded-full text-green-600">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Crecimiento</p>
                        <p className="text-2xl font-bold text-slate-900">+127%</p>
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[80%] rounded-full"></div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">{t('services.title')}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.subtitle')}</h3>
            <p className="text-lg text-slate-600">Ecosistema integral de servicios diseñados para potenciar cada aspecto de tu presencia digital.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group rounded-3xl p-8 transition-all duration-300 relative overflow-hidden ${service.highlight ? 'bg-slate-900 text-white shadow-2xl shadow-green-900/20' : 'bg-white hover:shadow-2xl hover:shadow-blue-900/5 border border-slate-100 hover:border-blue-100'}`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl pointer-events-none"></div>
                )}
                <div className={`w-14 h-14 rounded-2xl ${service.highlight ? 'bg-green-500/20 text-green-400' : service.bg + ' ' + service.color} flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h4 className={`text-2xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-slate-900'}`}>{service.title}</h4>
                <p className={`mb-8 leading-relaxed ${service.highlight ? 'text-gray-400' : 'text-slate-600'}`}>{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-sm ${service.highlight ? 'text-gray-300' : 'text-slate-500'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${service.highlight ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={service.link} className={`inline-flex items-center font-semibold group-hover:translate-x-1 transition-transform ${service.highlight ? 'text-green-400' : 'text-blue-600'}`}>
                  {t('common.view_more')} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature / About Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] transform rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Collaboration" 
                className="relative rounded-[2rem] shadow-2xl w-full z-10"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                No somos solo una agencia.<br />
                <span className="text-blue-600">Somos tu equipo extendido.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En DIGITRIAL, creemos que el verdadero éxito digital nace de la colaboración estrecha. Fusionamos creatividad, datos y tecnología para construir soluciones que perduran.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">50+</h4>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Proyectos Exitosos</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">98%</h4>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Clientes Felices</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">24/7</h4>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Soporte Dedicado</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-1">100%</h4>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Compromiso</p>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                className="bg-slate-900 text-white hover:bg-blue-600 px-8 py-6 rounded-xl text-lg transition-colors"
              >
                Hablemos de tu Proyecto
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Voces de Confianza</h2>
              <p className="text-lg text-slate-600 max-w-xl">
                Historias reales de empresas que transformaron su futuro con DIGITRIAL.
              </p>
            </div>
            <div className="hidden md:block">
              <Link to="/store" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Ver casos de estudio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">{t.name}</h5>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  ¿Listo para el siguiente nivel?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-lg">
                  "En DIGITRIAL, no vendemos servicios. Diseñamos soluciones que se convierten en el motor de tu crecimiento."
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold">Diego Fernando Vega Forero</h5>
                      <p className="text-blue-200 text-sm">CEO & Fundador</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                     <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg border-none">
                        <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Directo
                     </Button>
                     <Button onClick={handleContactClick} variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                        <Mail className="mr-2 w-5 h-5" /> Email
                     </Button>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block relative">
                 <div className="glass-card-dark p-8 rounded-3xl max-w-md ml-auto transform rotate-2 hover:rotate-0 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                       <MapPin className="text-blue-400 w-6 h-6" />
                       <div>
                          <h4 className="text-white font-bold">Ubicación</h4>
                          <p className="text-slate-300 text-sm">Colombia, Global Service</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-blue-400" />
                          <span>Atención Personalizada</span>
                       </div>
                       <div className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-purple-400" />
                          <span>Estrategia 360°</span>
                       </div>
                       <div className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span>Resultados Garantizados</span>
                       </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                       <p className="text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                         {t('footer.tagline')}
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
