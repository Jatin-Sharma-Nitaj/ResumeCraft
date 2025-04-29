import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormSection from './component/FormSection';
import PreviewSection from './component/PreviewSecrion';
import { ResumeContext } from '@/Context/ResumeContext';
import Data from '@/../data/Data';

const Editresume = () => {
  const { resumeID } = useParams();
  const [resumeinfo, setresumeinfo] = useState(() => {
    const savedData = localStorage.getItem('resumeinfo');
    return savedData ? JSON.parse(savedData) : Data;
  });

  useEffect(() => {
    localStorage.setItem('resumeinfo', JSON.stringify(resumeinfo));
  }, [resumeinfo]);
  return (
    <ResumeContext.Provider value={{ resumeinfo, setresumeinfo }}>
      <div className="min-h-screen bg-gradient-to-br from-[#fefefe] via-[#f7faff] to-[#eef4fd] p-4 sm:p-8 md:p-10 transition-all">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormSection />
          <PreviewSection />
        </div>
      </div>
    </ResumeContext.Provider>
  );
};

export default Editresume;