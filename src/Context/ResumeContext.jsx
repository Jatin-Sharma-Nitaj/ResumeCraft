import React, { createContext, useState, useEffect } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeinfo, setresumeinfo] = useState(() => {
    const savedData = localStorage.getItem('resumeinfo');
    return savedData ? JSON.parse(savedData) : {
      firstname: '',
      lastname: '',
      jobTitle: '',
      address: '',
      phone: '',
      gmail: '',
      summery: '',
      exp: [],
      education: [],
      skills: [],
    };
  });

  // Save to localStorage whenever resumeinfo changes
  useEffect(() => {
    localStorage.setItem('resumeinfo', JSON.stringify(resumeinfo));
  }, [resumeinfo]);

  return (
    <ResumeContext.Provider value={{ resumeinfo, setresumeinfo }}>
      {children}
    </ResumeContext.Provider>
  );
};