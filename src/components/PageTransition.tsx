"use client"

import React, { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";

export default function PageTransition() {
    const [hideMe, setHideMe] = useState(false);
    
    useEffect(() => {
        setTimeout(() => setHideMe(true), 3000);
      }, []);

    return (
        <motion.div 
            initial={{ backdropFilter: "blur(100px)" }}
            animate={{ backdropFilter: "blur(0px)" }}
            transition={{ delay: 1, duration: 2 }}
            className="z-30 w-[100vw] h-[100vh] fixed top-0 left-0"></motion.div>
            
    //     <motion.div className="fixed top-0 left-0 z-30 w-[100vw] h-[100vh]" hidden={hideMe}>
    //         <div className={`flex justify-center ${hideMe ? "hidden" : ""}`}>
    //             {Array.from({ length: 5 }).map((_, i) => (
    //                 <motion.div
    //                 key={i}
    //                 className="w-full h-[50vh] bg-[#0a0a0a] box"
    //                 initial={{ y: 0 }}
    //                 animate={{ translateY: '-110%' }}
    //                 transition={{ delay: 1 + i * 0.1, duration: 0.5, ease: easeIn }}
    //                 />
    //             ))}
    //             </div>
                
    //             <div className={`flex justify-center ${hideMe ? "hidden" : ""}`}>
    //             {Array.from({ length: 5 }).map((_, i) => (
    //                 <motion.div
    //                 key={i}
    //                 className="w-full h-[50vh] bg-[#0a0a0a] box"
    //                 initial={{ y: 0 }}
    //                 animate={{ translateY: '110%' }}
    //                 transition={{ delay: 1 + i * 0.1, duration: 0.5, ease: easeIn }}
    //                 />
    //             ))}
    //         </div>
    //   </motion.div>
    )
}