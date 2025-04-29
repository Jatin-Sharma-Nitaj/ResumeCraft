'use client';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  TelegramIcon,
} from 'react-share';

const SharePopover = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="text-white sm:w-auto">Share UR Resume</Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto bg-white shadow-xl border rounded-lg flex gap-3 p-4 justify-center">
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </PopoverContent>
    </Popover>
  );
};

export default SharePopover;
