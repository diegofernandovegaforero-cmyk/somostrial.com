'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, ArrowRight, Shield, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/use-toast';

export default function Home() {
    const { toast } = useToast();

    const handleSelectPlan = (planName: string) => {
        toast({
            title: "¡Excelente elección!",
            description: `Has seleccionado el ${planName}. Serás redirigido al pago en breve.`,
        });
    };

    const proFeatures = [
        "Diseño web personalizado y responsive",
        "Optimización SEO básica",
        "Integración con redes sociales",
        "Formulario de contacto avanzado",
        "Certificado SSL incluido",
        "Soporte técnico por correo electrónico",
        "Hasta 5 páginas internas"
    ];

    const vipFeatures = [
        "Todo lo incluido en el Plan PRO",
        "E-commerce integrado (hasta 50 productos)",
        "Pasarela de pagos configurada",
        "Optimización SEO avanzada",
        "Sistema de reservas o citas online",
        "Soporte técnico prioritario 24/7",
        "Mantenimiento mensual incluido (1 año)"
    ];

    return (
        <div className="bg-slate-950 min-h-screen pt-20 pb-24 font-sans text-slate-50 relative overflow-hidden">
            {/* Promo Banner - Moved to be below Navbar */}
            <div className="w-full z-40 relative">
                <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-b border-emerald-500/30 py-2 text-center backdrop-blur-md">
                    <p className="text-emerald-400 text-sm font-semibold tracking-wide">
                        🚀 OFERTA ESPECIAL DISPONIBLE SOLO HASTA MARZO 2026
                    </p>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0052CC]/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        Lleva tu negocio al siguiente nivel en <span className="text-emerald-400">Marzo 2026</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400"
                    >
                        Soluciones escalables diseñadas para maximizar tu presencia digital y aumentar tus ventas.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Plan PRO Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-emerald-500/30 transition-all duration-300 group flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 p-6">
                            <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/20">
                                Más vendido
                            </span>
                        </div>

                        <div className="mb-8">
                            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Plan <span className="text-gray-400">PRO</span></h3>
                            <p className="text-slate-400">La solución perfecta para establecer tu presencia digital profesional.</p>
                        </div>

                        <div className="flex-grow">
                            <ul className="space-y-4 mb-8">
                                {proFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-slate-300">
                                        <div className="mt-1 mr-3 bg-emerald-500/20 rounded-full p-1 shrink-0">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            onClick={() => handleSelectPlan('Plan PRO')}
                            className="w-full bg-[#0052CC] hover:bg-[#003d99] text-white py-6 text-lg rounded-xl shadow-lg shadow-[#0052CC]/20 hover:shadow-[#0052CC]/40 transition-all group-hover:-translate-y-1 mt-auto"
                        >
                            Comenzar con PRO <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>

                    {/* Plan VIP Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-[#0052CC]/30 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-[#0052CC]/60 transition-all duration-300 group flex flex-col h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC]/5 to-emerald-500/5 rounded-3xl pointer-events-none"></div>

                        <div className="absolute top-0 right-0 p-6">
                            <span className="bg-[#0052CC]/20 text-blue-300 text-sm font-bold px-4 py-1.5 rounded-full border border-[#0052CC]/30">
                                +$850 USD
                            </span>
                        </div>

                        <div className="mb-8 relative z-10">
                            <div className="w-14 h-14 bg-[#0052CC]/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                <Star className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                Plan VIP <Shield className="w-6 h-6 text-emerald-400" />
                            </h3>
                            <p className="text-slate-400">Potencia total para negocios listos para escalar y vender online.</p>
                        </div>

                        <div className="flex-grow relative z-10">
                            <ul className="space-y-4 mb-8">
                                {vipFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-slate-300">
                                        <div className="mt-1 mr-3 bg-[#0052CC]/20 rounded-full p-1 shrink-0">
                                            <Check className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className={idx === 0 ? "font-semibold text-white" : ""}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            onClick={() => handleSelectPlan('Plan VIP')}
                            className="w-full relative z-10 bg-white text-slate-900 hover:bg-slate-100 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all group-hover:-translate-y-1 font-bold mt-auto"
                        >
                            Comenzar con VIP <Rocket className="ml-2 w-5 h-5 text-[#0052CC]" />
                        </Button>
                    </motion.div>
                </div>

                {/* Trust Indicators below cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-6">Garantías incluidas en todos los planes</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <div className="flex items-center gap-2 text-slate-400">
                            <Check className="w-5 h-5 text-emerald-500" />
                            <span>Sin contratos forzosos</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <Check className="w-5 h-5 text-emerald-500" />
                            <span>Soporte en español</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <Check className="w-5 h-5 text-emerald-500" />
                            <span>Migración gratuita</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

