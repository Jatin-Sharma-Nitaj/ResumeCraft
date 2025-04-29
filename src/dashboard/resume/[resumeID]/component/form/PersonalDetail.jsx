import { ResumeContext } from '@/Context/ResumeContext';
import React, { useContext } from 'react';
import { Input } from '@/components/ui/input';
import { Toaster, toast } from 'sonner';
import SubmitButton from '@/components/ui/SubmitButton';


const PersonalDetail = () => {
  const { resumeinfo, setresumeinfo } = useContext(ResumeContext);
  console.log("🔥 PersonalDetail component loaded",resumeinfo?.firstname);
  console.log("🔥 PersonalDetail component loaded",resumeinfo);
  

  const handlechange = (e) => {
    const { name, value } = e.target;
    setresumeinfo({
      ...resumeinfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    toast(<div>Data Updated Successfully.<br />Press 'Next' to Continue</div>);
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-t-third m-10 bg-white'>
      <h2 className='font-bold text-xl mb-2'>Personal Details</h2>
      <p className='text-gray-600 mb-4'>Fill Up the Basic Information</p>
      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='text-sm font-medium'>First Name</label>
            <Input
              name="firstname"
              value={resumeinfo?.firstname || ''}
              placeholder="Enter your first name"
              required
              onChange={handlechange}
              className='mt-1'
            />
          </div>
          <div>
            <label className='text-sm font-medium'>Last Name</label>
            <Input
              name="lastname"
              value={resumeinfo?.lastname || ''}
              placeholder="Enter your last name"
              required
              onChange={handlechange}
              className='mt-1'
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm font-medium'>Profession</label>
            <Input
              name="jobTitle"
              value={resumeinfo?.jobTitle || ''}
              placeholder="Enter your profession"
              required
              onChange={handlechange}
              className='mt-1'
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm font-medium'>Street Address</label>
            <Input
              name="address"
              value={resumeinfo?.address || ''}
              placeholder="Enter your street address"
              required
              onChange={handlechange}
              className='mt-1'
            />
          </div>
          <div>
            <label className='text-sm font-medium'>Phone No</label>
            <Input
              name="phone"
              value={resumeinfo?.phone || ''}
              placeholder="Enter your phone number"
              required
              onChange={handlechange}
              className='mt-1'
            />
          </div>
          <div>
            <label className='text-sm font-medium'>Gmail</label>
            <Input
              name="gmail"
              value={resumeinfo?.gmail || ''}
              placeholder="Enter your email"
              type="email"
              required
              onChange={handlechange}
              className='mt-1'
            />
          </div>
          <div className="col-span-2 mt-3 flex justify-end">
            <SubmitButton />
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default PersonalDetail;