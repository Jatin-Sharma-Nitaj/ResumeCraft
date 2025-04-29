import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/ui/SubmitButton';
import React, { useState, useContext, useEffect } from 'react';
import RichTextEditor from './RichTextEditor';
import { ResumeContext } from '@/Context/ResumeContext';
import { toast } from 'sonner';

const formfeild = {
  title: '',
  companyame: '',
  city: '',
  startdate: '',
  enddate: '',
  state: '',
  workSummary: '',
};

const toas = () => {
  toast.success('Experience Added!');
};

const Experince = () => {
  const { resumeinfo, setresumeinfo } = useContext(ResumeContext);
  const [expiernincelist, setexpiernincelist] = useState([formfeild]);

  // Add new experience field
  const AddnewExp = () => {
    setexpiernincelist([...expiernincelist, { ...formfeild }]);
  };

  // Remove last experience field
  const RemoveExp = () => {
    setexpiernincelist((expiernincelist) => expiernincelist.slice(0, -1));
  };

  // Handle input changes
  const handlechange = (event, index) => {
    const { name, value } = event.target;
    const newentries = [...expiernincelist];
    newentries[index][name] = value;
    setexpiernincelist(newentries);
  };

  // Handle RichTextEditor changes
  const handleRichTextEditor = (value, name, index) => {
    const newentries = [...expiernincelist];
    newentries[index][name] = value;
    setexpiernincelist(newentries);
  };

  useEffect(() => {
    setresumeinfo({
      ...resumeinfo,
      exp: expiernincelist,
    });
  }, [expiernincelist]);

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-t-third m-10 bg-white'>
      <h2 className='font-bold text-xl mb-2'>Your Experience</h2>
      <p className='text-gray-600 mb-4'>Add Your Experience</p>
      <div>
        {expiernincelist.map((item, index) => (
          <div key={index} className='grid grid-cols-2 gap-4 border p-3 my-5 rounded-md'>
            <div>
              <label className='font-semibold text-sm'>Position Name</label>
              <Input
                placeholder="Ex. Backend Developer"
                name="title"
                value={item.title}
                onChange={(event) => handlechange(event, index)}
              />
            </div>
            <div>
              <label className='font-semibold text-sm'>Company Name</label>
              <Input
                placeholder="Ex. Pearl Organization"
                name="companyame"
                value={item.companyame}
                onChange={(event) => handlechange(event, index)}
              />
            </div>
            <div>
              <label className='font-semibold text-sm'>City</label>
              <Input
                placeholder="Ex. New York"
                name="city"
                value={item.city}
                onChange={(event) => handlechange(event, index)}
              />
            </div>
            <div>
              <label className='font-semibold text-sm'>State</label>
              <Input
                placeholder="Ex. California"
                name="state"
                value={item.state}
                onChange={(event) => handlechange(event, index)}
              />
            </div>
            <div>
              <label className='font-semibold text-sm'>Start Date</label>
              <Input
                type="date"
                placeholder="Start Date"
                name="startdate"
                value={item.startdate}
                onChange={(event) => handlechange(event, index)}
              />
            </div>
            <div>
              <label className='font-semibold text-sm'>End Date</label>
              <Input
                type="date"
                placeholder="End Date"
                name="enddate"
                value={item.enddate}
                onChange={(event) => handlechange(event, index)}
              />
            </div>
            <div className='col-span-2'>
              <RichTextEditor
                value={item.workSummary}
                onRichTextEditorChange={(value) => handleRichTextEditor(value, 'workSummary', index)}
                experienceList={expiernincelist} // Pass experience list
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between flex-wrap'>
        <div className='flex gap-3'>
          <Button onClick={AddnewExp} variant="outline" className="text-primary cursor-pointer">
            Add Exp.
          </Button>
          {expiernincelist.length > 1 && (
            <Button onClick={RemoveExp} variant="outline" className="text-primary cursor-pointer">
              Delete
            </Button>
          )}
        </div>
        <div>
          <SubmitButton onClick={toas} />
        </div>
      </div>
    </div>
  );
};

export default Experince;