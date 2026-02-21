'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';

export default function Home() {
    const { toast } = useToast();

    const handleSelectPlan = (planName: string) => {
        toast({
            title: "¡Excelente elección!",
            description: `Has seleccionado el ${planName}. Serás redirigido al pago en breve.`,
        });
    };

    return (
        <div className="bg-black min-h-screen pt-24 pb-16 font-sans text-white relative overflow-hidden flex flex-col items-center">
            {/* Header / Logo Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <div className="flex items-center justify-center gap-3 mb-8">
                    {/* Simulated Logo based on user image */}
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-white"></div>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">
                        DIGI<span className="text-blue-500">TRIAL</span>
                    </span>
                </div>

                <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-2">
                    ¡Consulta inmediata GRATIS!
                </p>
                <h2 className="text-lg md:text-xl font-medium text-gray-300">
                    Elige el plan que hará crecer tu negocio en línea:
                </h2>
            </motion.div>

            {/* Pricing Cards Container */}
            <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-8 items-stretch">
                {/* Plan PRO Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative bg-[#111111] border border-gray-800 rounded-2xl p-1 shadow-2xl group"
                >
                    {/* Badge */}
                    <div className="absolute -top-3 right-8 z-20">
                        <span className="bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                            Más vendido
                        </span>
                    </div>

                    <div className="p-8 h-full flex flex-col">
                        <h3 className="text-3xl font-bold mb-6">Plan <span className="text-emerald-500">PRO</span></h3>

                        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800/50 flex items-start gap-4 mb-8">
                            <span className="text-2xl mt-1">👉</span>
                            <p className="text-gray-300 leading-relaxed">
                                Ideal si quieres una página web <span className="text-white font-bold italic underline decoration-emerald-500/50">moderna, rápida y lista</span> para vender en poco tiempo, con la inversión <span className="text-white font-bold underline decoration-emerald-500/50 tracking-tight">más accesible</span>
                            </p>
                        </div>

                        <Button
                            onClick={() => handleSelectPlan('Plan PRO')}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95"
                        >
                            Seleccionar Plan PRO <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>

                {/* Plan VIP Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative bg-[#111111] border border-gray-800 rounded-2xl p-1 shadow-2xl group"
                >
                    {/* Badge */}
                    <div className="absolute -top-3 right-8 z-20">
                        <span className="bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                            + $850 USD
                        </span>
                    </div>

                    <div className="p-8 h-full flex flex-col">
                        <h3 className="text-3xl font-bold mb-6 text-emerald-500">Plan <span className="text-white">VIP</span></h3>

                        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800/50 flex items-start gap-4 mb-8">
                            <span className="text-2xl mt-1">👉</span>
                            <p className="text-gray-300 leading-relaxed">
                                Ideal si buscas una página web con un <span className="text-white font-bold italic underline decoration-emerald-500/50 tracking-tight">diseño exclusivo y funcionalidades avanzadas</span> para elevar tu marca.
                            </p>
                        </div>

                        <Button
                            onClick={() => handleSelectPlan('Plan VIP')}
                            className="w-full bg-white text-black hover:bg-gray-100 py-6 text-lg rounded-xl transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95 font-bold"
                        >
                            Seleccionar Plan VIP <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Footer / Partner Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-20 flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition-opacity"
            >
                <div className="flex items-center gap-2 grayscale brightness-200">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1 4.5c-.2 0-.4 0-.6.1-.2 0-.3.1-.4.2l-2.6 1.8c-.1-.1-.3-.2-.5-.3-.2-.1-.4-.1-.7-.1s-.5 0-.7.1c-.2.1-.4.2-.5.3l-2.6-1.8c-.1-.1-.3-.2-.4-.2-.2-.1-.4-.1-.6-.1-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4v14c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.2 0 .4 0 .6-.1.2 0 .3-.1.4-.2l2.6-1.8c.1.1.3.2.5.3.2.1.4.1.7.1s.5 0 .7-.1c.2-.1.4-.2.5-.3l2.6 1.8c.1.1.3.2.4.2.2.1.4.1.6.1.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-14c.1-.5-.1-1-.5-1.4-.4-.4-.9-.6-1.4-.6zm-11 2c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.1 0 .2 0 .3.1l2.6 1.8V21.4c-.1 0-.2-.1-.3-.1-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7v-14zm5 14c-.1 0-.2 0-.3-.1l-1.6-1.1c-.1-.1-.2-.1-.4-.2-.2-.1-.3-.1-.5-.1s-.3 0-.5.1l-1.6 1.1c-.1 0-.2.1-.3.1s-.2 0-.4-.1c-.1 0-.1-.1-.2-.2v-11c0-.1 0-.2.1-.3l1.3-.9c.1.1.2.1.4.2.2.1.3.1.5.1s.3 0 .5-.1l1.3.9c.1.1.1.2.1.3v11c.1.1.1.2 0 .3zm6.3-1c0 .3-.1.5-.3.7-.2.2-.4.3-.7.3s-.2 0-.3-.1l-2.6-1.8v-14c.1 0 .2-.1.3-.1.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7v14z" />
                    </svg>
                    <span className="text-sm font-light tracking-[0.2em] uppercase">
                        shopify <span className="font-bold">partners</span>
                    </span>
                </div>
            </motion.div>
        </div>
    );
}

