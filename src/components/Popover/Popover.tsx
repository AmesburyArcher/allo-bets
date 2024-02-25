'use client';
import React from 'react';
import { Popover as AriaPopover } from 'react-aria-components';
import { MyPopoverProps } from '@/components/Popover/types';

const Popover: React.FC<MyPopoverProps> = ({ children, ...restProps }) => {
    return (
        <AriaPopover
            {...restProps}
            className={`max-h-60 w-[200px] overflow-auto rounded-md
             text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out 
             exiting:fade-out`}
        >
            {children}
        </AriaPopover>
    );
};

export default Popover;
