'use client';
import React, { useMemo } from 'react';
import { Link as AriaLink } from 'react-aria-components';
import classNames from 'classnames';
import { MyLinkButtonProps } from '@/components/LinkButton/types';

const LinkButton: React.FC<MyLinkButtonProps> = ({
    children,
    padding,
    hover,
    ...rest
}) => {
    const cx = useMemo(
        () =>
            classNames(
                `flex items-center hover:cursor-pointer w-[fit-content]
                rounded-md border-0 bg-gray-600 pressed:bg-gray-700 transition 
                text-sm text-left leading-normal shadow-md text-white focus:outline-none 
                focus-visible:ring-1 ring-white ring-offset-1`,
                padding,
                { 'py-2 px-5': !padding, 'hover:bg-gray-500': hover }
            ),
        [padding, hover]
    );

    return (
        <AriaLink {...rest} className={cx}>
            {children}
        </AriaLink>
    );
};

export default LinkButton;
