'use client';
import React from 'react';
import { MenuItem as AriaMenuItem, Text } from 'react-aria-components';
import type { MyMenuItemProps } from '@/components/Menu/MenuItem/types';
import Separator from '@/components/Separator';

const MenuItem: React.FC<Omit<MyMenuItemProps, 'type' | 'items'>> = ({
    name,
    description,
    id,
    separatorBefore,
    separatorAfter,
    ...restProps
}) => {
    return (
        <>
            {separatorBefore && <Separator />}
            <AriaMenuItem
                {...restProps}
                id={id}
                // key={id}
                textValue={name}
                className={`group flex w-full items-center rounded-md px-3 py-2 box-border
                    outline-none cursor-default text-white hover:bg-blue-300 focus:bg-blue-300 hover:cursor-pointer`}
            >
                <Text slot='label' className={`truncate`}>
                    {name}
                </Text>
                {description && (
                    <Text
                        slot='description'
                        className={`truncate text-xs italic`}
                    >
                        {description}
                    </Text>
                )}
            </AriaMenuItem>
            {separatorAfter && <Separator />}
        </>
    );
};

export default MenuItem;
