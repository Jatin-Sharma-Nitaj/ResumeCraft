import React, { useState } from 'react';
import { PlusSquare } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import useResumeStore from '../../../data/Defaultdata';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { motion } from 'framer-motion';

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState('');

  const addResume = useResumeStore((state) => state.addResume);

  const onCreate = () => {
    if (!title.trim()) return;
    addResume(title.trim());
    setTitle('');
    setOpenDialog(false);
  };

  return (
    <>
      {/* Add Resume Box */}
      <div
        onClick={() => setOpenDialog(true)}
        className="h-48 w-36 sm:h-52 sm:w-44 md:h-60 md:w-52 rounded-2xl border-2 border-dashed border-indigo-300 bg-white hover:bg-indigo-50 text-indigo-500 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105 shadow-sm"
      >
        <PlusSquare className="w-8 h-8" />
        <span className="text-sm mt-2 font-medium">Add Resume</span>
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white border shadow-xl rounded-xl max-w-md p-6"
          >
            <div>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-indigo-600">
                  Create New Resume
                </DialogTitle>
                <Dialog className="bg-gray-500"> Enter The Title</Dialog>
              </DialogHeader>

              <div className="mt-4 space-y-2">
                <label className="text-sm text-gray-700 font-medium">Resume Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex. Creative Developer"
                  className="mt-1"
                />
              </div>

              <DialogFooter className="mt-6">
                <Button variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button
                  disabled={!title.trim()}
                  onClick={onCreate}
                  className="bg-indigo-500 text-white hover:bg-indigo-600"
                >
                  Create
                </Button>
              </DialogFooter>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddResume;
