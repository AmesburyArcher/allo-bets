'use client';
import React, { useMemo } from 'react';
import { Button as AriaButton } from 'react-aria-components';
import { MyButtonProps } from '@/components/Button/types';
import classNames from 'classnames';

const Button: React.FC<MyButtonProps> = ({
    children,
    padding,
    hover,
    ...rest
}) => {
    const cx = useMemo(
        () =>
            classNames(
                `flex items-center hover:cursor-pointer 
                rounded-md border-0 bg-gray-600 pressed:bg-gray-700 transition 
                text-sm text-left leading-normal shadow-md text-white focus:outline-none 
                focus-visible:ring-2 ring-white ring-offset-2`,
                padding,
                { 'py-2 px-5': !padding, 'hover:bg-gray-500': hover }
            ),
        [padding, hover]
    );

    return (
        <AriaButton {...rest} className={cx}>
            {children}
        </AriaButton>
    );
};

export default Button;
