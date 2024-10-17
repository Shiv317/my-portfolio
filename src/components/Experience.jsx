import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

const Experience = () => {
    const experience = EXPERIENCES[0]; // Directly access the single experience

    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl font-semibold'>Experience</motion.h2>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                {/* Year Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                    <p>{experience.year}</p>
                </motion.div>
                {/* Experience Details */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-3/4'>
                    <h3 className='text-2xl font-semibold mb-2'>{experience.role} at {experience.company}</h3>
                    <p className='text-neutral-400 mb-4'>{experience.description}</p>
                    <ul className='flex flex-wrap gap-2'>
                        {experience.technologies.map((tech, index) => (
                            <li key={index} className='bg-purple-500 text-xs text-white px-3 py-1 rounded-md'>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
