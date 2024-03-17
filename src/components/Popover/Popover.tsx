'use client';
import React from 'react';
import { Popover as AriaPopover } from 'react-aria-components';
import { MyPopoverProps } from '@/components/Popover/types';

const Popover: React.FC<MyPopoverProps> = ({ children, ...restProps }) => {
    return (
        <AriaPopover
            {...restProps}
            className={`max-h-60 w-[200px] overflow-auto rounded-md
             text-base shadow-lg ring-1 ring-black ring-opacity-5 entering:animate-in entering:fade-in 
             entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 
             fill-mode-forwards origin-top-left`}
        >
            {children}
        </AriaPopover>
    );
};

export default Popover;
