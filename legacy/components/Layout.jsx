
import React, { useState, useMemo, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ShoppingCart as ShoppingCartIcon, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ShoppingCart from '@/components/ShoppingCart';
import { useCart } from '@/hooks/useCart';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

// Logo URL provided in the task
const digitrialLogoUrl = "https://horizons-cdn.hostinger.com/6b9bdf39-faeb-49b5-9aef-94e01a05f6fc/64cb1933ae82848e86fed46062507d19.png";
const darkLogoUrl = "https://horizons-cdn.hostinger.com/6b9bdf39-faeb-49b5-9aef-94e01a05f6fc/64cb1933ae82848e86fed46062507d19.png";

const Layout = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const totalItems = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleContactClick = () => {
    toast({
      title: "Contacto",
      description: "Serás redirigido a nuestro formulario de contacto en breve."
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573123299053', '_blank');
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "#servicios" },
    { name: "Soluciones", path: "#soluciones" },
    { name: "Tienda", path: "/store" },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        return;
      }
      e.preventDefault();
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
               <img 
                 src={digitrialLogoUrl} 
                 alt="DIGITRIAL" 
                 className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105 object-contain" 
               />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                link.path.startsWith('#') ? (
                  <a 
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-sm font-medium text-slate-600 hover:text-[#0052CC] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink 
                    key={link.path}
                    to={link.path} 
                    className={({ isActive }) => 
                      `text-sm font-medium transition-colors hover:text-[#0052CC] ${
                        isActive ? 'text-[#0052CC] font-semibold' : 'text-slate-600'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              ))}
              
              <div className="h-6 w-px bg-slate-200 mx-1"></div>

              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-600 hover:text-[#0052CC] hover:bg-blue-50 rounded-full transition-all"
                aria-label={t('nav.cart')}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-[#0052CC] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm border border-white">
                    {totalItems}
                  </span>
                )}
              </button>

              <Button 
                onClick={handleContactClick}
                className="bg-[#0052CC] hover:bg-[#003d99] text-white rounded-full px-6 shadow-lg shadow-blue-900/10 transition-all duration-300 hover:shadow-blue-700/20"
              >
                Contacto
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                link.path.startsWith('#') ? (
                  <a 
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      handleNavClick(e, link.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-2xl font-bold text-slate-800 hover:text-[#0052CC]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.path}
                    to={link.path}
                    className="text-2xl font-bold text-slate-800 hover:text-[#0052CC]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <hr className="border-slate-100" />
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="text-xl font-medium text-slate-600 flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon className="w-5 h-5" /> {t('nav.cart')} ({totalItems})
              </button>
              <Button onClick={() => { handleContactClick(); setIsMobileMenuOpen(false); }} className="w-full bg-[#0052CC] hover:bg-[#003d99] text-white py-6 text-lg rounded-xl mt-4">
                Contacto
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 pt-20 pb-10 px-6 border-t border-slate-800 text-slate-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="inline-block mb-6 group">
                <img src={darkLogoUrl} alt="DIGITRIAL" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
              </Link>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                Soluciones Digitales Integrales para transformar y escalar tu negocio en el entorno digital con tecnología de vanguardia.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0052CC] hover:text-white transition-colors cursor-pointer" aria-label="Facebook">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0052CC] hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="hover:text-[#0052CC] transition-colors">Servicios</a></li>
                <li><a href="#soluciones" onClick={(e) => handleNavClick(e, '#soluciones')} className="hover:text-[#0052CC] transition-colors">Soluciones</a></li>
                <li><Link to="/store" className="hover:text-[#0052CC] transition-colors">Tienda</Link></li>
                <li><a href="#" className="hover:text-[#0052CC] transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-[#0052CC] transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Servicios</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><span className="hover:text-[#0052CC] transition-colors cursor-pointer">Desarrollo Web</span></li>
                <li><span className="hover:text-[#0052CC] transition-colors cursor-pointer">Aplicaciones Móviles</span></li>
                <li><span className="hover:text-[#0052CC] transition-colors cursor-pointer">Soluciones Cloud</span></li>
                <li><span className="hover:text-[#0052CC] transition-colors cursor-pointer">Marketing Digital</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Contacto</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0052CC] shrink-0" />
                  <span>Bogotá, Colombia<br />Oficina Central</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0052CC] shrink-0" />
                  <span>+57 312 329 9053</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0052CC] shrink-0" />
                  <span>info@digitrial.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} DIGITRIAL. Todos los derechos reservados.
            </p>
            <p className="text-sm font-semibold text-digitrial-gradient">
              Centro de Soluciones
            </p>
          </div>
        </div>
      </footer>
      
      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      
      <motion.button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></span>
        <div className="relative bg-white text-green-500 p-4 rounded-full shadow-2xl hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
          <MessageCircle className="h-7 w-7" />
        </div>
      </motion.button>
    </div>
  );
};

export default Layout;
