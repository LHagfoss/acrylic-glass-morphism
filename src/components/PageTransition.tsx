"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PageTransition() {
    const [hideMe, setHideMe] = useState(false);
    
    useEffect(() => {
        setTimeout(() => setHideMe(true), 2500);
      }, []);

    return (
        <motion.div 
            initial={{ backdropFilter: "blur(100px)" }}
            animate={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 2 }}
            hidden={hideMe}
            className={`z-40 w-[100vw] h-[100vh] fixed top-0 left-0 ${hideMe ? "hidden" : ""}`}
        />
    )
}