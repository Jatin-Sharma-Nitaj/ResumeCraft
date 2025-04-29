import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon } from 'react-share';

const Footer = () => {
  return (
    <footer className="w-full bg-white  border-gray-200 py-6 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-800">ResumeCraft</h2>
          <p className="text-sm">© {new Date().getFullYear()}  Jatin Sharma</p>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="https://github.com/Jatin-Sharma-Nitaj" target="_blank" rel="noopener noreferrer">
            <Github size={20} className="hover:text-black transition" />
          </Link>
          <Link to="https://www.linkedin.com/in/jatin-sharma-434723279/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={32} round className="hover:opacity-80 transition" />
          </Link>
          <Link to="https://twitter.com/Nitaj333" target="_blank" rel="noopener noreferrer">
            <TwitterIcon size={32} round className="hover:opacity-80 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
