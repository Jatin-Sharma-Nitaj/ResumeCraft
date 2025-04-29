import React from 'react';
import AddResume from './components/AddResume';
import useResumeStore from '../../data/Defaultdata';
import ResumeCard from './components/ResumeCard';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const resumes = useResumeStore((state) => state.resumes);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#fdf4f5] to-[#f7faff] px-6 py-10 md:px-16 lg:px-24 transition-all">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-bold text-4xl text-gray-800 mb-1 tracking-tight">
          My Resume
        </h2>
        <p className="text-gray-700 text-base">
          Create Your Resume Here
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="mt-10 grid gap-6 grid-cols-2a sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AddResume />
        </motion.div>

        {resumes.map((resume) => (
          <motion.div
            key={resume.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResumeCard title={resume.title} resumeID={resume.id} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
