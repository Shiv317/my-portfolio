import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiPython, SiJavascript, SiTensorflow, SiDjango, SiPytorch, SiMysql, SiJupyter } from 'react-icons/si'; // Importing relevant icons
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {/* Python */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className='text-6xl text-yellow-400' />
                </motion.div>
                {/* JavaScript */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className='text-6xl text-yellow-300' />
                </motion.div>
                {/* TensorFlow */}
                <motion.div
                    variants={iconVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTensorflow className='text-6xl text-orange-500' />
                </motion.div>
                {/* Django */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDjango className='text-6xl text-green-500' />
                </motion.div>
                {/* PyTorch */}
                <motion.div
                    variants={iconVariants(2.7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPytorch className='text-6xl text-orange-500' />
                </motion.div>
                {/* MySQL */}
                <motion.div
                    variants={iconVariants(3.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className='text-6xl text-blue-500' />
                </motion.div>
                {/* Jupyter */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJupyter className='text-6xl text-orange-400' />
                </motion.div>
                {/* React */}
                <motion.div
                    variants={iconVariants(2.9)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-6xl text-cyan-400' />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
