'use client';
import React from 'react';
import {
    Label,
    Select as AriaSelect,
    SelectValue,
    Text,
} from 'react-aria-components';
import { MySelectProps } from '@/components/Select/types';
import ListBox from '@/components/ListBox';
import { IconSelector } from '@tabler/icons-react';
import Popover from '@/components/Popover';
import Button from '@/components/Button';

const Select: React.FC<MySelectProps<any>> = ({
    label,
    description,
    items,
    className,
    placeholder,
    ...props
}) => {
    return (
        <AriaSelect {...props} className='flex flex-col gap-1 w-[200px]'>
            <Label className='text-white cursor-default'>{label}</Label>
            <Button
                padding='py-2 pl-5 pr-2'
                // spacing={'justify-between items-center'}
                gap='gap-5'
            >
                <SelectValue className='flex-1 truncate placeholder-shown:italic'>
                    {(item) => <>{item.selectedText || placeholder}</>}
                </SelectValue>
                <IconSelector />
            </Button>
            {description && (
                <Text slot='description' className={`italic text-sm`}>
                    {description}
                </Text>
            )}
            <Popover>
                <ListBox items={items} />
            </Popover>
        </AriaSelect>
    );
};

export default Select;
