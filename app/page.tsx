'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Layout, Users, MonitorSmartphone, Video, Rocket, Mouse, Moon, Sun } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    // Persist and read theme choice from localStorage on mount
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    };

    return (
        <div className={`bg-white min-h-screen font-sans text-slate-900 overflow-x-hidden ${isDarkMode ? 'page-dark' : ''}`}>
            {/* --- Navbar --- */}
            <nav className={`fixed top-0 w-full z-50 p-4 transition-colors ${isDarkMode ? 'bg-[#00050f]/90 border-slate-800' : 'bg-white/80 border-gray-100'} backdrop-blur-md border-b`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                        {/* CSS Vector Logo */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 border' : 'bg-slate-100 border-slate-200 border'}`}>
                            {/* Inner Play/Triangle Icon */}
                            <div className={`w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-b-[6px] border-b-transparent ml-1 ${isDarkMode ? 'border-l-slate-300' : 'border-l-slate-400'}`}></div>
                        </div>
                        <div className="flex flex-col justify-center -space-y-1">
                            <span className="text-2xl font-black tracking-tight flex items-center">
                                <span className={isDarkMode ? 'text-blue-500' : 'text-blue-600'}>DIGI</span>
                                <span className={isDarkMode ? 'text-slate-300' : 'text-slate-500'}>TRIAL</span>
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                        <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Inicio</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Servicios</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Tienda</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Contacto</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                            aria-label="Toggle theme">
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button className="hidden md:flex bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:opacity-90 text-white rounded-full px-6 py-2 text-sm font-bold shadow-md shadow-fuchsia-500/20 transition-all hover:scale-105">
                            DISEÑA TU PÁGINA WEB GRATIS
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className={`pt-32 pb-20 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-[#00050f]' : 'bg-[#f8fafc]'}`}>
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className={`text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>
                            Impulsamos tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-500">
                                Visión Digital
                            </span>
                        </h1>
                        <p className={`text-lg mb-10 leading-relaxed max-w-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Somos el Centro de Soluciones que transforma desafíos complejos en oportunidades de crecimiento medibles a través de tecnología y estrategia.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-[#1e293b] hover:bg-[#0f172a] text-white px-8 py-6 rounded-xl text-md font-semibold flex items-center gap-2 shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-1">
                                Explorar Servicios <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className={`border px-8 py-6 rounded-xl text-md font-semibold flex items-center gap-2 shadow-sm transition-transform hover:-translate-y-1 ${isDarkMode ? 'border-slate-800 bg-[#0f172a]/50 text-slate-300 hover:bg-[#1e293b]' : 'border-gray-200 bg-white text-slate-800 hover:bg-gray-50'}`}>
                                <span className="text-emerald-500 text-xl font-bold">✆</span> WhatsApp
                            </button>
                        </div>

                        {/* Floating Metric Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className={`mt-12 inline-block p-4 rounded-2xl shadow-xl shadow-blue-900/5 border relative ${isDarkMode ? 'bg-[#0f172a]/80 border-slate-800 backdrop-blur-md' : 'bg-white border-gray-100'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Crecimiento Real</p>
                                    <p className="text-2xl font-black text-emerald-500 leading-none">+135%</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right content (Bento Grid) */}
                    <div className="grid grid-cols-2 gap-4 relative">
                        {/* Card 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={`p-6 rounded-3xl shadow-lg border hover:shadow-xl transition-shadow h-full flex flex-col ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800' : 'bg-white border-gray-50'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-emerald-500 ${isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                                    <Layout className="w-5 h-5" />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>Premium</span>
                            </div>
                            <h3 className={`font-bold text-lg mb-1 mt-auto ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Diseño Web</h3>
                            <p className="text-emerald-500 text-sm font-semibold flex items-center gap-1">★ UX/UI</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`p-6 rounded-3xl shadow-lg border hover:shadow-xl transition-shadow h-full flex flex-col ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800' : 'bg-white border-gray-50'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-blue-500 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                                    <ShoppingCart className="w-5 h-5" />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>E-comm</span>
                            </div>
                            <h3 className={`font-bold text-lg mb-1 mt-auto ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Tienda Online</h3>
                            <p className="text-blue-500 text-sm font-semibold flex items-center gap-1">★ Ventas</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={`p-6 rounded-3xl shadow-lg border hover:shadow-xl transition-shadow h-full flex flex-col ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800' : 'bg-white border-gray-50'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-indigo-500 ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-50'}`}>
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>SST</span>
                            </div>
                            <h3 className={`font-bold text-lg mb-1 mt-auto ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Talento Humano</h3>
                            <p className="text-indigo-500 text-sm font-semibold flex items-center gap-1">★ 100%</p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className={`p-6 rounded-3xl shadow-lg border hover:shadow-xl transition-shadow h-full flex flex-col ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800' : 'bg-white border-gray-50'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-purple-500 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-50'}`}>
                                    <Video className="w-5 h-5" />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>Media</span>
                            </div>
                            <h3 className={`font-bold text-lg mb-1 mt-auto ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Producción</h3>
                            <p className="text-purple-500 text-sm font-semibold flex items-center gap-1">★ 4K Cinema</p>
                        </motion.div>
                    </div>
                </div>

                {/* Social Proof Bar */}
                <div className={`mt-24 border-y py-4 backdrop-blur-sm ${isDarkMode ? 'border-slate-800 bg-[#0f172a]/50' : 'border-gray-100 bg-white/50'}`}>
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex justify-center items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-fuchsia-600 opacity-${100 - (i * 10)} z-${10 - i}`}></div>
                                ))}
                            </div>
                            <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>+100 Empresarios Confiaron</span>
                            <div className={`h-6 w-px hidden md:block ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}></div>
                            <span className={`text-sm font-bold hidden md:flex items-center gap-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                <span className="text-yellow-400">⚡</span> Resultados en 30 días
                            </span>
                        </div>

                        <div className={`flex items-center gap-2 px-4 py-2 border rounded-full shadow-sm text-xs font-bold tracking-widest ${isDarkMode ? 'bg-[#1e293b] border-slate-700 text-slate-300' : 'bg-white border-gray-100 text-[#0f172a]'}`}>
                            <Mouse className="w-4 h-4" /> SCROLL
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Solutions Section --- */}
            <section className="py-24 relative">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0,transparent_100%)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-4">
                        Nuestras Soluciones
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>
                        Todo lo que necesitas para <br /> escalar
                    </h2>
                    <p className={`mt-6 max-w-2xl mx-auto font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Ecosistema integral de servicios diseñados para potenciar cada aspecto de tu presencia digital con resultados medibles.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {/* Solution 1 */}
                    <div className={`rounded-3xl overflow-hidden shadow-xl border group hover:-translate-y-2 transition-transform duration-300 ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-slate-200/50'}`}>
                        <div className={`h-48 relative overflow-hidden flex items-center justify-center border-b transition-colors ${isDarkMode ? 'bg-[#1e293b]/50 border-slate-800 group-hover:bg-[#1e293b]' : 'bg-slate-50 border-gray-100 group-hover:bg-blue-50/50'}`}>
                            {/* Abstract Vector Representation for Web Dev */}
                            <div className="w-32 h-20 rounded-lg border-2 border-blue-200 bg-white relative shadow-sm group-hover:border-blue-400 group-hover:shadow-md transition-all">
                                <div className="absolute top-0 left-0 w-full h-4 border-b-2 border-blue-100 bg-slate-50 rounded-t-lg flex items-center gap-1 px-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                                </div>
                                <div className="mt-6 px-3 space-y-1.5 opacity-60">
                                    <div className="h-2 bg-slate-200 rounded-sm w-3/4"></div>
                                    <div className="h-2 bg-slate-200 rounded-sm w-1/2"></div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2 shadow-sm border border-gray-50">
                                <MonitorSmartphone className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Desarrollo Web Premium</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Sitios web ultrarrápidos y estéticamente impactantes que convierten visitantes en clientes.
                            </p>
                            <Link href="#" className="font-bold text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1 group/btn">
                                Conocer más <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Solution 2 */}
                    <div className={`rounded-3xl overflow-hidden shadow-xl border group hover:-translate-y-2 transition-transform duration-300 ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-slate-200/50'}`}>
                        <div className={`h-48 relative overflow-hidden flex items-center justify-center border-b transition-colors ${isDarkMode ? 'bg-[#1e293b]/50 border-slate-800 group-hover:bg-[#1e293b]' : 'bg-slate-50 border-gray-100 group-hover:bg-fuchsia-50/50'}`}>
                            {/* Abstract Vector Representation for Landing Pages */}
                            <div className="w-24 h-28 rounded-md border-2 border-fuchsia-200 bg-white relative shadow-sm group-hover:border-fuchsia-400 group-hover:shadow-md transition-all flex flex-col p-2 space-y-2">
                                <div className="h-8 bg-fuchsia-100 rounded-sm w-full"></div>
                                <div className="h-2 bg-slate-200 rounded-sm w-3/4 mx-auto"></div>
                                <div className="h-2 bg-slate-200 rounded-sm w-1/2 mx-auto"></div>
                                <div className="mt-auto h-6 bg-fuchsia-400 rounded-sm w-3/4 mx-auto opacity-80"></div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2 shadow-sm border border-gray-50">
                                <Layout className="w-5 h-5 text-fuchsia-600" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Landing Pages de Alta Conversión</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Páginas diseñadas psicológicamente para maximizar tus ventas y captación de leads.
                            </p>
                            <Link href="#" className="font-bold text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1 group/btn">
                                Conocer más <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Solution 3 */}
                    <div className={`rounded-3xl overflow-hidden shadow-xl border group hover:-translate-y-2 transition-transform duration-300 ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-slate-200/50'}`}>
                        <div className={`h-48 relative overflow-hidden flex items-center justify-center border-b transition-colors ${isDarkMode ? 'bg-[#1e293b]/50 border-slate-800 group-hover:bg-[#1e293b]' : 'bg-slate-50 border-gray-100 group-hover:bg-emerald-50/50'}`}>
                            {/* Abstract Vector Representation for E-commerce */}
                            <div className="w-28 h-20 rounded-lg border-2 border-emerald-200 bg-white relative shadow-sm group-hover:border-emerald-400 group-hover:shadow-md transition-all flex items-center justify-center">
                                <ShoppingCart className="w-10 h-10 text-emerald-300 opacity-60" />
                                <div className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">3</div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2 shadow-sm border border-gray-50">
                                <ShoppingCart className="w-5 h-5 text-emerald-600" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>E-commerce & Tiendas Online</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Plataformas robustas y seguras para vender tus productos a todo el mundo sin comisiones.
                            </p>
                            <Link href="#" className="font-bold text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1 group/btn">
                                Conocer más <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Solution 4 */}
                    <div className={`rounded-3xl overflow-hidden shadow-xl border group hover:-translate-y-2 transition-transform duration-300 ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-slate-200/50'}`}>
                        <div className={`h-48 relative overflow-hidden flex items-center justify-center border-b transition-colors gap-3 ${isDarkMode ? 'bg-[#1e293b]/50 border-slate-800 group-hover:bg-[#1e293b]' : 'bg-slate-50 border-gray-100 group-hover:bg-indigo-50/50'}`}>
                            {/* Abstract Vector Representation for Social Media */}
                            <div className="w-12 h-12 rounded-xl border-2 border-indigo-200 bg-white shadow-sm flex items-center justify-center group-hover:border-indigo-400 transition-all group-hover:-translate-y-1">
                                <div className="w-6 h-6 rounded-md bg-indigo-100"></div>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-sky-200 bg-white shadow-sm flex items-center justify-center group-hover:border-sky-400 transition-all group-hover:translate-y-1">
                                <div className="w-6 h-6 rounded-full bg-sky-100"></div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2 shadow-sm border border-gray-50">
                                <Rocket className="w-5 h-5 text-indigo-600" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Estrategia Social Media</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                No solo publicamos, construimos comunidades leales y amplificamos tu voz de marca.
                            </p>
                            <Link href="#" className="font-bold text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1 group/btn">
                                Conocer más <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Solution 5 */}
                    <div className={`rounded-3xl overflow-hidden shadow-xl border group hover:-translate-y-2 transition-transform duration-300 ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-slate-200/50'}`}>
                        <div className={`h-48 relative overflow-hidden flex items-center justify-center border-b transition-colors ${isDarkMode ? 'bg-[#1e293b]/50 border-slate-800 group-hover:bg-[#1e293b]' : 'bg-slate-50 border-gray-100 group-hover:bg-teal-50/50'}`}>
                            {/* Abstract Vector Representation for HR */}
                            <div className="flex flex-col items-center">
                                <div className="flex -space-x-4 mb-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-200 z-10 group-hover:-translate-y-1 transition-transform"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 z-0"></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-100 -z-10 group-hover:translate-x-1 transition-transform"></div>
                                </div>
                                <div className="w-20 h-1.5 bg-slate-200 rounded-full"></div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2 shadow-sm border border-gray-50">
                                <Users className="w-5 h-5 text-teal-600" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Talento Humano & SST</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Gestión integral del capital humano y seguridad laboral adaptada a la era moderna.
                            </p>
                            <Link href="#" className="font-bold text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1 group/btn">
                                Conocer más <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Solution 6 */}
                    <div className={`rounded-3xl overflow-hidden shadow-xl border group hover:-translate-y-2 transition-transform duration-300 ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-slate-200/50'}`}>
                        <div className={`h-48 relative overflow-hidden flex items-center justify-center border-b transition-colors ${isDarkMode ? 'bg-[#1e293b]/50 border-slate-800 group-hover:bg-[#1e293b]' : 'bg-slate-50 border-gray-100 group-hover:bg-orange-50/50'}`}>
                            {/* Abstract Vector Representation for Production */}
                            <div className="relative w-24 h-16 bg-white border-2 border-orange-200 rounded-xl flex items-center justify-center shadow-sm group-hover:border-orange-400 group-hover:shadow-md transition-all">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-orange-300 border-b-[8px] border-b-transparent ml-1"></div>
                                <div className="absolute -right-3 top-2 w-4 h-12 bg-orange-100 border-2 border-orange-200 rounded-md"></div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2 shadow-sm border border-gray-50">
                                <Video className="w-5 h-5 text-orange-500" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Producción Audiovisual</h3>
                            <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Contenido visual de calidad cinematográfica para posicionar tu marca en el top.
                            </p>
                            <Link href="#" className="font-bold text-blue-600 text-sm hover:text-blue-700 flex items-center gap-1 group/btn">
                                Conocer más <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Stats & Image Section --- */}
            <section className={`py-24 overflow-hidden transition-colors ${isDarkMode ? 'bg-[#00050f]' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    {/* Abstract Vector Graphic replacing the phone image */}
                    <div className={`relative h-[500px] w-full rounded-3xl border flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-[#0f172a]/50 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-fuchsia-100/50 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>

                        {/* Central abstract UI element */}
                        <div className="relative z-10 w-64 h-80 bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 flex flex-col gap-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="w-full flex justify-between items-center mb-2">
                                <div className={`w-8 h-8 rounded-md flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                    <div className={`w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-b-[4px] border-b-transparent ml-0.5 ${isDarkMode ? 'border-l-slate-300' : 'border-l-slate-400'}`}></div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                </div>
                            </div>

                            <div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-500/10 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>
                                {/* Simple Chart Bar Representation */}
                                <div className="absolute bottom-2 left-4 w-6 h-12 bg-blue-200 rounded-sm"></div>
                                <div className="absolute bottom-2 left-12 w-6 h-20 bg-fuchsia-200 rounded-sm"></div>
                                <div className="absolute bottom-2 left-20 w-6 h-16 bg-blue-300 rounded-sm"></div>
                                <div className="absolute bottom-2 left-28 w-6 h-24 bg-blue-500 rounded-sm"></div>
                            </div>

                            <div className="space-y-3 mt-4">
                                <div className="h-2 w-full bg-slate-100 rounded"></div>
                                <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                                <div className="h-8 w-full bg-blue-50 border border-blue-100 rounded-lg mt-4 flex items-center px-4 justify-between">
                                    <div className="h-1.5 w-1/3 bg-blue-200 rounded"></div>
                                    <ArrowRight className="w-3 h-3 text-blue-400" />
                                </div>
                            </div>
                        </div>

                        {/* Floating elements surrounding */}
                        <div className="absolute top-24 left-16 w-16 h-16 bg-white border border-gray-100 shadow-lg rounded-2xl flex items-center justify-center animate-bounce [animation-delay:0.2s] [animation-duration:3s]">
                            <span className="text-xl">📈</span>
                        </div>
                        <div className="absolute bottom-32 right-12 w-20 h-20 bg-white border border-gray-100 shadow-lg rounded-full flex flex-col items-center justify-center transform -rotate-12 animate-pulse">
                            <span className="text-fuchsia-500 font-black text-lg">98%</span>
                            <span className="text-[8px] font-bold text-slate-400 uppercase">Fidelidad</span>
                        </div>
                    </div>

                    <div>
                        <h2 className={`text-4xl md:text-5xl font-extrabold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>
                            No somos solo una agencia. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-500">
                                Somos tu equipo extendido.
                            </span>
                        </h2>
                        <p className={`text-lg mb-10 leading-relaxed max-w-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            En <strong className={isDarkMode ? 'text-white' : 'text-slate-800'}>DIGITRIAL</strong>, fusionamos creatividad, datos y tecnología para construir soluciones que perduran. No buscamos clientes, buscamos socios estratégicos para crecer juntos.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <p className={`text-5xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>50+</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Proyectos Exitosos</p>
                            </div>
                            <div>
                                <p className={`text-5xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>98%</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tasa de Fidelidad</p>
                            </div>
                            <div>
                                <p className={`text-5xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>24/7</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Soporte Dedicado</p>
                            </div>
                            <div>
                                <p className={`text-5xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-[#0f172a]'}`}>100%</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compromiso</p>
                            </div>
                        </div>

                        <button className={`px-8 py-6 rounded-xl text-md font-semibold shadow-xl transition-transform hover:-translate-y-1 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-900/20' : 'bg-[#0f172a] hover:bg-black text-white shadow-slate-900/20'}`}>
                            Hablemos de tu Proyecto
                        </button>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-transform hover:scale-110">
                    <span className="text-3xl">✆</span>
                </button>
            </div>

            {/* Simple dark footer base to match screenshot bottom edge */}
            <footer className="bg-[#0f172a] py-6 w-full flex items-center justify-center">
                <p className="text-slate-400 text-sm tracking-wide">
                    Una marca: <span className="font-semibold text-slate-300">somostrial.com</span>
                </p>
            </footer>
        </div>
    );
}

