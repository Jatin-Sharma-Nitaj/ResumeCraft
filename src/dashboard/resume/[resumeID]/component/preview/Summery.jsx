import React from 'react';

const Summary = ({ resumeinfo }) => {
  if (!resumeinfo?.summery) {
    return (
      <div>
        <h2 className="text-center text-primary font-bold text-sm mb-2">Summary</h2>
        <hr className="border-primary mb-4" />
        <p className="text-gray-500 text-xs text-center">No summary added yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center text-primary font-bold text-sm mb-2">Summary</h2>
      <hr className="border-primary mb-4" />
      <p className="text-xs">{resumeinfo.summery}</p>
    </div>
  );
};

export default Summary;