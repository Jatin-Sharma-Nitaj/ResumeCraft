import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ResumeContext } from '@/Context/ResumeContext';
import Data from '@/../data/Data';
import { Link } from 'react-router-dom';  
import Header from '@/components/Custom/Header';
import { Button } from '@/components/ui/button';
import SharePopover from '@/components/ui/Sharebtn';
import PreviewSecrion from '@/dashboard/resume/[resumeID]/component/PreviewSecrion';

const Viewresume = () => {
  const params = useParams();
  const { resumeinfo, setresumeinfo } = useContext(ResumeContext);

  useEffect(() => {
    const savedData = localStorage.getItem('resumeinfo');
    if (savedData) {
      setresumeinfo(JSON.parse(savedData));
    }
  }, [params.resumeID]);

  const downloadResume = () => {
    window.print();
  };

  return (
    <>
      {/* NON-PRINTABLE HEADER AREA */}
      <div id='no-Print-Area'>
        
        <div className="px-4 sm:px-10 lg:px-36 py-10 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-3xl font-bold">
              Here's Your Resume Generated with Google's Gemini AI!
            </h2>
            <p className="font-semibold text-sm sm:text-base">
              You can Download and Share Your Resume Now
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
            <Button onClick={downloadResume} className="text-white">
              Download
            </Button>
            <SharePopover />
          </div>
        </div>
      </div>

      {/* PRINTABLE RESUME PREVIEW */}
      <div id='Yes-Print-Area' className="px-2 sm:px-10 lg:px-36 pb-10 print:px-0 print:pb-0 print:mt-0">
        <PreviewSecrion />
      </div>
      <div id="Box" className='flex justify-center items-center mt-10 mx-10m pb-10 my-10'>
        <Link to="/">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg rounded-md shadow">
            Go to Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Viewresume;
