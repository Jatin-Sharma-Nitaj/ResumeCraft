import React from 'react';

const Skills = ({ resumeinfo }) => {
  if (!Array.isArray(resumeinfo?.skills) || resumeinfo.skills.length === 0) {
    return (
      <div>
        <h2 className="text-center text-primary font-bold text-sm mb-2">Skills</h2>
        <hr className="border-primary mb-4" />
        <p className="text-gray-500 text-xs text-center">No skills added yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center text-primary font-bold text-sm mb-2">Skills</h2>
      <hr className="border-primary mb-4" />
      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeinfo.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <h2 className="text-xs w-[80px] truncate">{skill?.name}</h2>
            <div className="w-[120px] h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className="h-2 rounded transition-all duration-300 bg-primary"
                style={{
                  width: `${Math.min(skill?.rating > 10 ? skill.rating : skill.rating * 20, 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;