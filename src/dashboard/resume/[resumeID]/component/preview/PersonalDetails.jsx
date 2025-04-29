import React from 'react';

const PersonalDetails = ({ resumeinfo }) => {
 

  return (
    <div className="text-center">
      <h2 className="text-primary font-bold text-lg">
        {resumeinfo?.firstname} {resumeinfo?.lastname}
      </h2>
      <p className="text-sm font-medium">{resumeinfo?.jobTitle}</p>
      <p className="text-primary font-normal text-xs">{resumeinfo?.address}</p>
      <div className="flex flex-col sm:flex-row justify-between text-xs text-primary font-normal mt-3">
        <p>{resumeinfo?.phone}</p>
        <p>{resumeinfo?.gmail}</p>
      </div>
    </div>
  );
};

export default PersonalDetails;