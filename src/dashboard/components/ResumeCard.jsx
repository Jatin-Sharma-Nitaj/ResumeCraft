import React from 'react';
import { Link } from 'react-router-dom';
import cv from '../../../src/assets/cv.png';
import { DeleteIcon, DownloadIcon, MoreVertical, PenBox, View } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from 'framer-motion';

const ResumeCard = ({ resumeID, title = "Full Stack Developer Resume" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] mx-auto"
    >
      <Link to={`resume/${resumeID}/edit`} className="group relative block">
        <div className="h-48 sm:h-52 md:h-64 rounded-2xl overflow-hidden shadow-md border border-neutral-300 bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 transition-transform duration-200 ease-in-out hover:shadow-lg">

          {/* Inner Content */}
          <div className="w-full h-full flex flex-col justify-between items-center p-3">

            {/* CV Icon */}
            <div className="flex-grow flex items-center justify-center">
              <motion.img
                src={cv}
                alt="CV Icon"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Resume Title + Dropdown */}
            <div className="w-full mt-2 bg-white/90 backdrop-blur-sm px-2.5 py-2 rounded-xl flex items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2 w-full pr-1">
                {title}
              </span>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <MoreVertical className="w-4 h-4 text-gray-600 hover:text-gray-900" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="z-50 bg-white shadow-lg rounded-md border border-neutral-200">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={`resume/${resumeID}/edit`} className="flex items-center gap-2">
                      <PenBox className="h-4 w-4" /> Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={`/dashboard/resume/${resumeID}/view`} className="flex items-center gap-2">
                      <View className="h-4 w-4" /> View
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DownloadIcon className="h-4 w-4 mr-2" /> Download
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DeleteIcon className="h-4 w-4 mr-2" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ResumeCard;
