'use client'
import { Input } from '@/components/ui/input';
import React, { useState, useEffect, useContext } from 'react';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';
import SubmitButton from '@/components/ui/SubmitButton';
import { ResumeContext } from '@/Context/ResumeContext';

export const SkillForm = () => {
  const { resumeinfo, setresumeinfo } = useContext(ResumeContext);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#33C950',
    inactiveFillColor: '#BCEDC5',
  };

  const [skilllist, setskilllist] = useState([
    {
      name: '',
      rating: 0,
    },
  ]);

  const handlechange = (index, name, value) => {
    const newentries = [...skilllist];
    newentries[index][name] = value;
    setskilllist(newentries);
  };

  useEffect(() => {
    setresumeinfo({
      ...resumeinfo,
      skills: skilllist,
    });
  }, [skilllist]);

  const AddnewSkill = () => {
    setskilllist([...skilllist, { name: '', rating: 0 }]);
  };

  const RemoveSkill = () => {
    setskilllist((prev) => prev.slice(0, -1));
  };

  const onSave = () => {
    console.log('Skills saved:', skilllist);
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-t-third m-10 bg-white'>
      <h2 className='font-bold text-xl mb-2'>Your Skills</h2>
      <p className='text-gray-600 mb-4'>Add Your Skills</p>

      {skilllist.map((item, index) => (
        <div
          key={index}
          className='flex flex-col md:flex-row justify-between items-start md:items-center border rounded-lg mb-5 p-3 gap-3'
        >
          <div className='flex flex-col w-full md:w-1/2'>
            <label className='font-semibold text-sm mb-1'>Skill Name</label>
            <Input
              value={item.name}
              onChange={(e) => handlechange(index, 'name', e.target.value)}
              placeholder='Enter skill name'
            />
          </div>
          <div className='flex flex-col items-start md:items-end md:ml-4'>
            <label className='font-semibold text-sm mb-1'>Rating</label>
            <Rating
              itemStyles={myStyles}
              style={{ maxWidth: 100 }}
              value={item.rating}
              onChange={(value) => handlechange(index, 'rating', value)}
            />
          </div>
        </div>
      ))}

      <div className='flex justify-between flex-wrap gap-3'>
        <div className='flex gap-3'>
          <Button onClick={AddnewSkill} variant='outline'>
            Add Skill
          </Button>
          {skilllist.length > 1 && (
            <Button onClick={RemoveSkill} variant='outline'>
              Remove
            </Button>
          )}
        </div>
        <SubmitButton onClick={onSave} />
      </div>
    </div>
  );
};

export default SkillForm;
