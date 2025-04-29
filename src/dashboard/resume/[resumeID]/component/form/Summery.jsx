import { Button } from '@/components/ui/button';
import SubmitButton from '@/components/ui/SubmitButton';
import { Textarea } from '@/components/ui/textarea';
import { ResumeContext } from '@/Context/ResumeContext';
import { BrainCircuitIcon } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { model } from './../../../../../../service/GeminiAi';
import { Toaster, toast } from 'sonner';

const Summary = () => {
  const { resumeinfo, setresumeinfo } = useContext(ResumeContext);

  const [summery, setSummery] = useState('');

  const generateSummeryWithAI = async () => {
    toast.info("Generating summary with AI. Please wait...");
    try {
      const prompt = `Based on the job title '${resumeinfo?.jobTitle || "Software Developer"}', provide a 5-line only exact in plain text resume summary.`;
      console.log("Generated Prompt:", prompt);

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = await response.text();

      console.log("AI Summary:", text);
      setSummery(text);

      // ✅ Update context
      setresumeinfo(prev => ({ ...prev, summery: text }));

      toast.success("AI Generated Summary Added!");
    } catch (error) {
      console.error("Error generating summary:", error);
      toast.error("Failed to generate summary. Try again!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Summary Added!");
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setSummery(newText);
    setresumeinfo(prev => ({ ...prev, summery: newText }));
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-4 border-t-third m-10 bg-white'>
      <h2 className='font-bold text-xl mb-2'>Your Bio</h2>
      <p className='text-gray-600 mb-4'>Add a Short and Simple Bio</p>

      <form onSubmit={handleSubmit}>
        <div className='flex justify-between items-end'>
          <label className='font-semibold text-sm' htmlFor="summery">Add Summary</label>
          <Button
            onClick={generateSummeryWithAI}
            type="button"
            variant="outline"
            className="text-primary cursor-pointer rounded-full flex justify-between"
            size="sm"
          >
            <BrainCircuitIcon />
          </Button>
        </div>

        <Textarea
          id="summery"
          value={summery}
          className="mt-5"
          required
          onChange={handleChange}
          placeholder="Enter your summary here"
        />

        <div className='mt-2 flex justify-end'>
          <SubmitButton onClick={() => toast.success("Summary Added!")} />
        </div>
      </form>

      <Toaster />
    </div>
  );
};

export default Summary;
