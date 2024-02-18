import React, { useMemo } from 'react';

interface SelectorProps {
    size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
}

export const Selector: React.FC<SelectorProps> = ({ size }) => {
    const sizeVal = useMemo(() => {
        if (size === 'xxs') {
            return '12';
        }
        if (size === 'xs') {
            return '16';
        }
        if (size === 's') {
            return '20';
        }
        if (size === 'm') {
            return '24';
        }
        if (size === 'l') {
            return '28';
        }
        if (size === 'xl') {
            return '32';
        }
    }, [size]);

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-selector'
            width={sizeVal}
            height={sizeVal}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M8 9l4 -4l4 4' />
            <path d='M16 15l-4 4l-4 -4' />
        </svg>
    );
};
