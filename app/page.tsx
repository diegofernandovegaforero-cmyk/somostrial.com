'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Layers,
    ShoppingBag,
    Share2,
    Users,
    Video,
    Filter,
    TrendingUp,
    Mouse,
    Zap,
    LayoutTemplate,
    ShoppingCart,
    Megaphone,
    ShieldCheck,
    MonitorSmartphone,
    Rocket,
    MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    const services = [
        { title: "Desarrollo Web Premium", desc: "Sitios web ultrarrápidos y estéticamente impactantes que convierten visitantes en clientes.", icon: <MonitorSmartphone className="w-12 h-12 text-blue-500" />, colorClass: "bg-blue-50", color: "blue", glowClass: "bg-blue-500", cornerIcon: <span className="text-blue-600 font-bold font-mono text-xs">&lt;/&gt;</span> },
        { title: "Landing Pages de Alta Conversión", desc: "Páginas diseñadas psicológicamente para maximizar tus ventas y captación de leads.", icon: <LayoutTemplate className="w-12 h-12 text-purple-500" />, colorClass: "bg-purple-50", color: "purple", glowClass: "bg-purple-500", cornerIcon: <LayoutTemplate className="w-4 h-4 text-purple-600" /> },
        { title: "E-commerce & Tiendas Online", desc: "Plataformas robustas y seguras para vender tus productos a todo el mundo sin comisiones.", icon: <ShoppingCart className="w-12 h-12 text-emerald-500" />, colorClass: "bg-emerald-50", color: "emerald", glowClass: "bg-emerald-500", cornerIcon: <ShoppingCart className="w-4 h-4 text-emerald-600" /> },
        { title: "Estrategia Social Media", desc: "No solo publicamos, construimos comunidades leales y amplificamos tu voz de marca.", icon: <Megaphone className="w-12 h-12 text-indigo-500" />, colorClass: "bg-indigo-50", color: "indigo", glowClass: "bg-indigo-500", cornerIcon: <Users className="w-4 h-4 text-indigo-600" /> },
        { title: "Talento Humano & SST", desc: "Gestión integral del capital humano y seguridad laboral adaptada a la era moderna.", icon: <ShieldCheck className="w-12 h-12 text-teal-500" />, colorClass: "bg-teal-50", color: "teal", glowClass: "bg-teal-500", cornerIcon: <ShieldCheck className="w-4 h-4 text-teal-600" /> },
        { title: "Producción Audiovisual", desc: "Contenido visual de calidad cinematográfica para posicionar tu marca en el top.", icon: <Video className="w-12 h-12 text-orange-500" />, colorClass: "bg-orange-50", color: "orange", glowClass: "bg-orange-500", cornerIcon: <Video className="w-4 h-4 text-orange-600" /> },
    ];

    return (
        <div className="bg-[#f8fafc] font-sans text-slate-900 pb-20 overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 pt-12 lg:pt-24 min-h-[85vh] flex flex-col lg:flex-row items-center relative z-10 w-full gap-12 lg:gap-8">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start justify-center h-full max-w-xl w-full"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#172554] leading-[1.05] mb-6">
                        Impulsamos tu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-[#8b5cf6] to-[#ec4899]">
                            Visión Digital
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                        Somos el Centro de Soluciones que transforma desafíos complejos en oportunidades de crecimiento medibles a través de tecnología y estrategia.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link href="#services" className="w-full sm:w-auto bg-[#1e293b] hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-1">
                            Explorar Servicios <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="https://wa.me/573123299053" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white border text-slate-700 hover:text-green-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all border-slate-200 shadow-sm hover:-translate-y-1 hover:border-green-200">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Web Vector Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center lg:justify-end pt-12 lg:pt-0"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-lg relative z-10">
                        {[
                            { title: "Diseño Web", icon: <Layers className="text-green-500 w-6 h-6" />, badge: "PREMIUM", val: "UX/UI", valColor: "text-green-500", bg: "bg-green-50" },
                            { title: "Tienda Online", icon: <ShoppingBag className="text-purple-500 w-6 h-6" />, badge: "E-COMM", val: "Ventas", valColor: "text-purple-500", bg: "bg-purple-50" },
                            { title: "Social Media", icon: <Share2 className="text-green-500 w-6 h-6" />, badge: "GROWTH", val: "+300%", valColor: "text-green-500", bg: "bg-green-50" },
                            { title: "Talento Humano", icon: <Users className="text-purple-400 w-6 h-6" />, badge: "SST", val: "100%", valColor: "text-purple-500", bg: "bg-purple-50" },
                            { title: "Producción", icon: <Video className="text-green-500 w-6 h-6" />, badge: "MEDIA", val: "4K Cinema", valColor: "text-green-500", bg: "bg-green-50" },
                            { title: "Embudo de Ventas", icon: <Filter className="text-purple-400 w-6 h-6" />, badge: "STRATEGY", val: "Leads x10", valColor: "text-purple-500", bg: "bg-purple-50" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 border border-slate-100 flex flex-col justify-between h-36">
                                <div className="flex justify-between items-start">
                                    <div className={`p-2.5 rounded-2xl ${item.bg}`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-[9px] font-black text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-widest">{item.badge}</span>
                                </div>
                                <div className="mt-2">
                                    <h4 className="font-bold text-[#1e293b] text-sm mb-1">{item.title}</h4>
                                    <p className={`text-xs font-bold flex items-center gap-1 ${item.valColor}`}>
                                        <span className="text-base leading-none">★</span> {item.val}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Floating Card Left/Bottom */}
                    <div className="absolute -bottom-16 lg:-bottom-8 -left-4 lg:-left-12 z-20 bg-white rounded-3xl p-5 shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none" style={{ animationDuration: '3s' }}>
                        <div className="p-4 bg-green-50 border border-green-100 rounded-2xl">
                            <TrendingUp className="text-green-500 w-8 h-8" />
                        </div>
                        <div className="pr-4">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Crecimiento Real</span>
                            <span className="text-3xl font-extrabold text-green-500 leading-none block">+135%</span>
                        </div>
                    </div>

                    {/* Green chat bubble icon absolute floating right */}
                    <a href="https://wa.me/573123299053" target="_blank" rel="noopener noreferrer" className="absolute -bottom-10 -right-4 lg:-right-8 bg-green-500 text-white p-4 rounded-full shadow-xl shadow-green-500/30 z-20 hover:scale-110 transition-transform cursor-pointer">
                        <MessageCircle className="w-8 h-8" />
                    </a>
                </motion.div>
            </section>

            {/* Trust Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full bg-slate-100/50 border-y border-slate-200 py-5 mt-24 md:mt-32"
            >
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-[3px] border-white shadow-sm ${i === 1 ? 'bg-gradient-to-br from-blue-600 to-purple-600' :
                                        i === 2 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                                            i === 3 ? 'bg-gradient-to-br from-indigo-500 to-blue-500' :
                                                'bg-gradient-to-br from-teal-400 to-blue-500'
                                        }`}></div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-[#1e293b]">+100 Empresarios Confiaron</span>
                        </div>

                        <div className="hidden md:block w-px h-8 bg-slate-300"></div>

                        <div className="flex items-center gap-2">
                            <Zap className="text-amber-500 w-5 h-5 fill-amber-500" />
                            <span className="text-sm font-bold text-[#1e293b]">Resultados en 30 días</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-slate-200 animate-pulse">
                        <Mouse className="w-5 h-5 text-slate-500" />
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Scroll</span>
                    </div>
                </div>
            </motion.div>

            {/* Solutions Grid Section */}
            <section id="services" className="py-24 md:py-32 container mx-auto px-6 relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 text-blue-600 font-bold text-[10px] tracking-widest uppercase px-4 py-2 rounded-full inline-block mb-6 shadow-sm border border-blue-100"
                    >
                        Nuestras Soluciones
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight"
                    >
                        Todo lo que necesitas para escalar
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-xl font-medium"
                    >
                        Ecosistema integral de servicios diseñados para potenciar cada aspecto de tu presencia digital con resultados medibles.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                        >
                            {/* Minimalist vector illustration area */}
                            <div className={`${svc.colorClass} w-full h-56 rounded-3xl mb-10 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] origin-bottom transition-all duration-300`}>
                                {/* Ambient glow inside vector box */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-[50px] opacity-20 ${svc.glowClass}`}></div>

                                <div className={`bg-white p-8 rounded-[2rem] shadow-xl shadow-${svc.color}-500/10 relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500`}>
                                    {svc.icon}
                                </div>

                                {/* Decorative mini vectors floating */}
                                <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-white opacity-50"></div>
                                <div className="absolute bottom-8 right-8 w-4 h-4 rounded-full bg-white opacity-40"></div>
                            </div>

                            {/* Top Right small floating icon */}
                            <div className="absolute top-12 right-12 bg-white shadow-lg rounded-2xl p-3 z-20 flex items-center justify-center text-slate-600 font-medium">
                                {svc.cornerIcon}
                            </div>

                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{svc.title}</h3>
                            <p className="text-slate-500 text-base mb-8 leading-relaxed font-medium">
                                {svc.desc}
                            </p>
                            <Link href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors uppercase tracking-wider">
                                Conocer más <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* About Section - Minimalist Vector Style */}
            <section className="py-24 md:py-32 container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left side mock vector */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-[#0f172a] rounded-[3rem] p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                            {/* Ambient glows */}
                            <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-blue-500/30 rounded-full blur-[80px]"></div>
                            <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] bg-purple-500/30 rounded-full blur-[80px]"></div>

                            {/* Phone Vector Mockup */}
                            <div className="relative z-10 w-72 h-[550px] border-[12px] border-slate-800 bg-white rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col pt-8">
                                <div className="w-28 h-7 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20"></div>

                                <div className="px-6 pb-6 pt-4 relative z-10 flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-white"></div>
                                        </div>
                                        <div>
                                            <div className="w-24 h-4 bg-slate-200 rounded-md mb-2"></div>
                                            <div className="w-16 h-3 bg-slate-100 rounded-md"></div>
                                        </div>
                                    </div>
                                    <div className="w-full h-8 bg-slate-100 rounded-lg mb-6"></div>

                                    <div className="grid grid-cols-2 gap-3 mb-4 flex-1">
                                        <div className="bg-blue-50 rounded-2xl p-4 flex flex-col justify-end">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full mb-auto shadow-md"></div>
                                            <div className="w-full h-2 bg-blue-200 rounded-full mb-2"></div>
                                            <div className="w-1/2 h-2 bg-blue-200 rounded-full"></div>
                                        </div>
                                        <div className="bg-purple-50 rounded-2xl p-4 flex flex-col justify-end">
                                            <div className="w-8 h-8 bg-purple-500 rounded-full mb-auto shadow-md"></div>
                                            <div className="w-full h-2 bg-purple-200 rounded-full mb-2"></div>
                                            <div className="w-2/3 h-2 bg-purple-200 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="w-full h-14 bg-slate-900 rounded-2xl mt-auto"></div>
                                </div>
                            </div>

                            {/* Floating Stats Vector Badge */}
                            <div className="absolute -right-6 md:-right-12 bottom-20 bg-white rounded-3xl p-5 shadow-2xl z-20 flex items-center gap-4 border border-slate-100 animate-bounce hover:animate-none" style={{ animationDuration: '4s' }}>
                                <div className="p-3 bg-blue-50 rounded-2xl">
                                    <Rocket className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="pr-4">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Implementación Rápida</span>
                                    <span className="block text-2xl font-black text-[#0f172a]">+50 Éxitos</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] mb-8 leading-[1.1] tracking-tight">
                            No somos solo una agencia. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Somos tu equipo extendido.</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 leading-relaxed">
                            En <strong>SOMOSTRIAL</strong>, fusionamos creatividad, datos y tecnología para construir soluciones que perduran. No buscamos clientes, buscamos socios estratégicos para crecer juntos.
                        </p>

                        <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-14">
                            <div>
                                <h4 className="text-5xl font-black text-[#0f172a] mb-3">50+</h4>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block leading-relaxed">Proyectos Exitosos</span>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-[#0f172a] mb-3">98%</h4>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block leading-relaxed">Tasa de Fidelidad</span>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-[#0f172a] mb-3">24/7</h4>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block leading-relaxed">Soporte Dedicado</span>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-[#0f172a] mb-3">100%</h4>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block leading-relaxed">Compromiso Total</span>
                            </div>
                        </div>

                        <Link href="#contact" className="bg-[#0f172a] hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold inline-flex transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg">
                            Hablemos de tu Proyecto
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
