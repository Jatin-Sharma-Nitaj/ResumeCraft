import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/ui/SubmitButton';
import React, { useState, useContext, useEffect } from 'react';
import { ResumeContext } from '@/Context/ResumeContext';

const eduField = {
  universityName: '',
  degree: '',
  major: '',
  startDate: '',
  endDate: '',
  desc: '',
  expanded: true, // ⬅️ Add expanded flag
};

const Educationform = () => {
  const { resumeinfo, setresumeinfo } = useContext(ResumeContext);
  const [educationList, setEducationList] = useState([eduField]);

  const addEducation = () => {
    setEducationList([...educationList, { ...eduField }]);
  };

  const removeEducation = () => {
    setEducationList((prev) => prev.slice(0, -1));
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updated = [...educationList];
    updated[index][name] = value;
    setEducationList(updated);
  };

  const toggleExpand = (index) => {
    const updated = [...educationList];
    updated[index].expanded = !updated[index].expanded;
    setEducationList(updated);
  };

  // Sync to context without expanded
  useEffect(() => {
    const cleaned = educationList.map(({ expanded, ...rest }) => rest);
    setresumeinfo((prev) => ({
      ...prev,
      education: cleaned,
    }));
  }, [educationList]);

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-t-third m-10 bg-white'>
      <h2 className='font-bold text-xl mb-2'>Your Education</h2>
      <p className='text-gray-600 mb-4'>Add Your Education</p>

      {educationList.map((item, index) => (
        <div key={index} className='border p-3 my-5 rounded-md'>
          <div className='flex justify-between items-center mb-2'>
            <h3 className='font-semibold'>
              {item.universityName || `Education ${index + 1}`}
            </h3>
            <div className='flex gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => toggleExpand(index)}
              >
                {item.expanded ? 'Hide' : 'Show'}
              </Button>
            </div>
          </div>

          {item.expanded && (
            <div className='grid grid-cols-2 gap-4'>
              <div className='col-span-2'>
                <label className='font-semibold text-sm'>University Name</label>
                <Input
                  name='universityName'
                  placeholder='Ex. Harvard University'
                  value={item.universityName}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label className='font-semibold text-sm'>Degree</label>
                <Input
                  name='degree'
                  placeholder='Ex. Bachelor/Master'
                  value={item.degree}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label className='font-semibold text-sm'>Major</label>
                <Input
                  name='major'
                  placeholder='Ex. Computer Science'
                  value={item.major}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label className='font-semibold text-sm'>Start Date</label>
                <Input
                  type='date'
                  name='startDate'
                  placeholder='Start Date'
                  value={item.startDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label className='font-semibold text-sm'>End Date</label>
                <Input
                  type='date'
                  name='endDate'
                  placeholder='End Date'
                  value={item.endDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <div className='flex justify-between flex-wrap'>
        <div className='flex gap-3'>
          <Button
            onClick={addEducation}
            variant='outline'
            className='text-primary cursor-pointer'
          >
            Add Education
          </Button>
          {educationList.length > 1 && (
            <Button
              onClick={removeEducation}
              variant='outline'
              className='text-primary cursor-pointer'
            >
              Delete
            </Button>
          )}
        </div>
        <div>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
};

export default Educationform;