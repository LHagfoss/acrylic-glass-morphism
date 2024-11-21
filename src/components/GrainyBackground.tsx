"use client"

import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from 'react';

export default function GrainyBackground() {
    const [boxVariants, setBoxVariants] = useState({
        box1: { x: 100, y: 100 },
        box2: { x: 200, y: 200 },
        box3: { x: 300, y: 300 },
        box4: { x: 0, y: 0 },
        box5: { x: 100, y: 100 },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setBoxVariants({
                box1: { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) },
                box2: { x: Math.floor(Math.random() * 200), y: Math.floor(Math.random() * 200) },
                box3: { x: Math.floor(Math.random() * 300), y: Math.floor(Math.random() * 300) },
                box4: { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) },
                box5: { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) },

            });
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative inset-0">
            <div className="flex flex-col leading-[11vh]">
                <div className="flex justify-start">
                    <p className="text-purple-50 text-[5rem] opacity-80">Lucas</p>
                </div>
                <h1 className="text-purple-50 text-[13rem] opacity-80">Thanawat</h1>
                <div className="flex justify-end">
                    <p className="text-purple-50 text-[5rem] opacity-80">Hagfoss</p>
                </div>
            </div>

            <div className="absolute w-[100vw] h-[100vh] filter blur-[250px] inset-0 flex justify-center items-center">
                <motion.div 
                    className="w-[30vh] h-[50vh] bg-purple-800 rounded-full absolute top-0 left-0" 
                    transition={{ duration: Math.floor(Math.random() * (5 - 3 + 1)) + 3, ease: easeInOut }}
                    animate={boxVariants.box1}>
                </motion.div>

                <motion.div 
                    className="w-[40vh] h-[30vh] bg-purple-800 rounded-full" 
                    transition={{ duration: Math.floor(Math.random() * (5 - 3 + 1)) + 3, ease: easeInOut }}
                    animate={boxVariants.box2}>
                </motion.div>

                <motion.div 
                    className="w-[80vh] h-[80vh] bg-purple-800 rounded-full absolute bottom-[-300px] right-[-200px]" 
                    transition={{ duration: Math.floor(Math.random() * (5 - 3 + 1)) + 3, ease: easeInOut }}
                    animate={boxVariants.box3}>
                </motion.div>

                <motion.div 
                    className="w-[60vh] h-[60vh] bg-purple-800 rounded-full absolute bottom-[-200px] left-[-200px]" 
                    transition={{ duration: Math.floor(Math.random() * (5 - 3 + 1)) + 3, ease: easeInOut }}
                    animate={boxVariants.box4}>
                </motion.div>

                <motion.div 
                    className="w-[60vh] h-[30vh] bg-purple-800 rounded-full absolute top-[-209px] left-[40%]" 
                    transition={{ duration: Math.floor(Math.random() * (5 - 3 + 1)) + 3, ease: easeInOut }}
                    animate={boxVariants.box5}>
                </motion.div>
            </div>
        </div>
    )
}