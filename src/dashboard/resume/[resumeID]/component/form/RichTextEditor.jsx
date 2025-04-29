import { Button } from '@/components/ui/button';
import { BrainCircuitIcon } from 'lucide-react';
import { ResumeContext } from '@/Context/ResumeContext';
import React, { useContext, useEffect, useState } from 'react';
import { model } from './../../../../../../service/GeminiAi';
import { Toaster, toast } from 'sonner';
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnUnderline,
  BtnRedo,
  BtnUndo,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
  BtnNumberedList,
} from 'react-simple-wysiwyg';

const RichTextEditor = ({ onRichTextEditorChange, value, experienceList }) => {
  const { resumeinfo, setresumeinfo } = useContext(ResumeContext);
  const [summary, setSummary] = useState(resumeinfo?.summary || '');

  useEffect(() => {
    if (resumeinfo.summary !== summary) {
      setSummary(resumeinfo.summary || '');
    }
  }, [resumeinfo.summary]);

  const generateSummaryWithAI = async () => {
    toast.info("Generating summary with AI. Please wait...");

    try {
      // Get the latest job title from the experience list
      const latestExperience = experienceList?.[experienceList.length - 1]; 
      const positionTitle = latestExperience?.title || "Software Developer"; 

      const prompt = `Based on the position '${positionTitle}', provide a concise resume summary of past work experience on this title (2 lines) only highlighting key skills and value to an employer.`;

      console.log("Generated Prompt:", prompt);

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = await response.text();

      console.log("AI Summary:", text);
      setSummary(text);
      setresumeinfo(prev => ({ ...prev, summary: text }));

      toast.success("AI Generated Summary Added!");
    } catch (error) {
      console.error("Error generating summary:", error);
      toast.error("Failed to generate summary. Try again!");
    }
  };

  const handleEditorChange = (newValue) => {
    setSummary(newValue);
    setresumeinfo(prev => ({ ...prev, summary: newValue }));
    if (onRichTextEditorChange) {
      onRichTextEditorChange(newValue);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-end my-2'>
        <label  htmlFor="summary">Add Summary</label>
        <Button
          onClick={generateSummaryWithAI}
          type="button"
          variant="outline"
          className="text-primary cursor-pointer rounded-full flex justify-between"
          size="sm"
        >
          <BrainCircuitIcon />
        </Button>
      </div>

      <EditorProvider>
        <Editor value={summary} onChange={(e) => handleEditorChange(e.target.value)}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnUnderline />
            <BtnNumberedList />
            <BtnBulletList />
          </Toolbar>
        </Editor>
      </EditorProvider>

      <Toaster />
    </div>
  );
};

export default RichTextEditor;
