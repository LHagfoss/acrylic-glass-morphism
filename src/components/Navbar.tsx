"use client"

import Link from "next/link";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [showAlert, setShowAlert] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('lucash.1707@gmail.com');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
    };

    return (
        <>
            <div 
                className="fixed z-30 top-10 left-[50%] translate-x-[-50%] flex gap-2 backdrop-blur-[30px] p-3 
                rounded-3xl overflow-hidden bg-[#00000026] border-4 border-[#4c4c4c32]"
            >
                <Link 
                    href="/" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#00000026] hover:border-[#4c4c4c32] rounded-2xl duration-200"
                >
                    Home
                </Link>
                <Link 
                    href="/" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent
                    hover:bg-[#00000026] hover:border-[#4c4c4c32] rounded-2xl duration-200"
                >
                    Work
                </Link>
                <Link 
                    href="/" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#00000026] hover:border-[#4c4c4c32] rounded-2xl duration-200"
                >
                    About
                </Link>
                <Link 
                    href="/" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#00000026] hover:border-[#4c4c4c32] rounded-2xl duration-200"
                    >
                        Contact
                </Link>
                <div 
                    onClick={copyEmail} 
                    className="text-purple-50 p-3 px-4 flex gap-2 border-2 
                    border-transparent hover:bg-[#00000026] hover:border-[#4c4c4c32] duration-200 rounded-2xl cursor-pointer"
                >
                    <span className="material-icons">content_copy</span>
                    <div className="">lucash.1707@gmail.com</div>
                </div>
            </div>
            {showAlert && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="z-10 fixed bottom-10 right-10 bg-[#00000026] border-4 border-[#4c4c4c32] p-5 rounded-3xl shadow-lg"
                    onAnimationComplete={() => setTimeout(() => setShowAlert(false), 2500)}
                >
                    <h2 className="text-lg font-bold text-zinc-100">Heads up!</h2>
                    <p className="text-zinc-500">The E-Mail has been copied.</p>
                </motion.div>
            )}
        </>
    )
}