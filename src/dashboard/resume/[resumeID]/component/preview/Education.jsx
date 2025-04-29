import React from 'react';

const Education = ({ resumeinfo }) => {
  
  return (
    <div>
      <h2 className="text-center text-primary font-bold text-sm mb-2">Education</h2>
      <hr className="border-primary mb-4" />
      {resumeinfo.education.map((education, index) => (
        <div className="my-5" key={index}>
          <h2 className="text-sm text-primary font-bold">{education?.universityName}</h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} in {education?.major}
            <span>{education?.startDate} - {education?.endDate}</span>
          </h2>
          <p className="text-xs text-gray-600">{education?.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;