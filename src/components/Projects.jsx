import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        {/* Year Section */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4'>
                            <p>{project.year}</p>
                        </motion.div>
                        {/* Project Details */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-3/4'>
                            <motion.h3
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -100 }}
                                transition={{ duration: 0.5 }}
                                className='text-2xl font-semibold mb-2'>{project.title}</motion.h3>
                            <p className='text-neutral-400 mb-4'>{project.description}</p>
                            <ul className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex} className='bg-purple-500 text-xs text-white px-3 py-1 rounded-md'>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
