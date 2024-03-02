'use client';
import React, { useCallback, useMemo, useState } from 'react';
import { ToggleButton as AriaToggleButton } from 'react-aria-components';
import { MyToggleButtonProps } from '@/components/ToggleButton/types';
import classNames from 'classnames';

const ToggleButton: React.FC<MyToggleButtonProps> = ({
    padding,
    hover,
    children,
    onChange,
    ...restProps
}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleChange = useCallback(
        (val: boolean) => {
            onChange?.(val);
            setIsSelected(val);
        },
        [onChange]
    );

    const cx = useMemo(
        () =>
            classNames(
                `flex items-center hover:cursor-pointer w-[fit-content]
                rounded-sm border-0 transition 
                text-sm text-left leading-normal shadow-md text-white focus:outline-none 
                focus-visible:ring-1 ring-white ring-offset-1`,
                padding,
                {
                    'py-2 px-2': !padding,
                    'hover:bg-gray-500': hover && !isSelected,
                    'hover:bg-blue-500': hover && isSelected,
                    'bg-gray-600': !isSelected,
                    'pressed:bg-gray-700': !isSelected,
                    'bg-blue-600': isSelected,
                    'pressed:bg-blue-700': isSelected,
                }
            ),
        [padding, hover, isSelected]
    );

    return (
        <AriaToggleButton {...restProps} onChange={handleChange} className={cx}>
            {children}
        </AriaToggleButton>
    );
};

export default ToggleButton;
