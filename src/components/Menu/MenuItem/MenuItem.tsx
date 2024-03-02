'use client';
import React from 'react';
import { MenuItem as AriaMenuItem, Text } from 'react-aria-components';
import type { MyMenuItemProps } from '@/components/Menu/MenuItem/types';

const MenuItem: React.FC<Omit<MyMenuItemProps, 'type' | 'items'>> = ({
    name,
    description,
    id,
    ...restProps
}) => {
    return (
        <AriaMenuItem
            {...restProps}
            id={id || name}
            textValue={name}
            className={
                'group flex w-full items-center rounded-md px-3 py-2 box-border ' +
                'outline-none cursor-default text-white focus:bg-blue-600'
            }
        >
            <Text slot='label' className={`truncate`}>
                {name}
            </Text>
            {description && (
                <Text slot='description' className={`truncate text-xs italic`}>
                    {description}
                </Text>
            )}
        </AriaMenuItem>
    );
};

export default MenuItem;
