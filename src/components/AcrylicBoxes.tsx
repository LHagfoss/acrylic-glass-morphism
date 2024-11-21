"use client"

import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from 'react';

import VideoList from "./VideoList";

export default function AcrylicBoxes() {
    const [boxVariants, setBoxVariants] = useState({
        box1: { x: 200, y: 200 },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setBoxVariants({
                box1: { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) },
            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex justify-center items-center p-5 md:px-32 relative inset-0">
            <motion.div 
                className="absolute w-[60vh] h-[60vh] bg-purple-800 rounded-full blur-[200px]" 
                transition={{ duration: Math.floor(Math.random() * (5 - 3 + 1)) + 3, ease: easeInOut }}
                animate={boxVariants.box1}>
            </motion.div>
            <div className="container h-full grid grid-rows-2 grid-cols-2 gap-4">
                <div className="w-full aspect-square backdrop-blur-[200px] p-3 rounded-3xl overflow-hidden bg-[#00000026] border-4 border-[#4c4c4c32]"></div>
                <div className="w-full aspect-square backdrop-blur-[200px] p-3 rounded-3xl bg-[#00000026] border-4 border-[#4c4c4c32] overflow-y-scroll">
                    <VideoList />
                </div>
                <div className="w-full aspect-square backdrop-blur-[200px] p-3 rounded-3xl overflow-hidden bg-[#00000026] border-4 border-[#4c4c4c32]"></div>
                <div className="w-full aspect-square backdrop-blur-[200px] p-3 rounded-3xl overflow-hidden bg-[#00000026] border-4 border-[#4c4c4c32]"></div>
            </div>
        </div>
    );
};