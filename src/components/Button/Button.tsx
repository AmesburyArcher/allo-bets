'use client';
import React from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { MyButtonProps } from '@/components/Button/types';

const Button: React.FC<MyButtonProps> = ({ children, ...rest }) => {
    return (
        <AriaButton
            {...rest}
            className={`flex items-center hover:cursor-pointer rounded-md bg-gray-600 
            text-white opacity-90 pressed:opacity-100 hover:bg-gray-500
            transition px-5 py-2 text-base text-left leading-normal shadow-md focus:outline-none 
            focus-visible:ring-2 ring-white ring-offset-2`}
        >
            {children}
        </AriaButton>
    );
};

export default Button;
