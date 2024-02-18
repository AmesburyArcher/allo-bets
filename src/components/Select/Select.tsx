'use client';
import React, { useMemo } from 'react';
import {
    Button,
    Label,
    ListBoxItem,
    Popover,
    Select as AriaSelect,
    SelectValue,
    Text,
} from 'react-aria-components';
import { MySelectProps } from '@/components/Select/types';
import classNames from 'classnames';
import ListBox from '@/components/ListBox';
import { Selector } from '@/components/Icons/Selector';

const Select: React.FC<MySelectProps<any>> = ({
    label,
    description,
    items,
    className,
    ...props
}) => {
    // const cx = useMemo(() => classNames('select', className), [className]);

    return (
        <AriaSelect {...props} className='flex flex-col gap-1 w-[200px]'>
            <Label className='text-white cursor-default'>{label}</Label>
            <Button
                className={`flex items-center hover:cursor-pointer 
                rounded-md border-0 bg-gray-600 bg-opacity-90 ap:bg-pressed-100 transition 
                py-2 pl-5 pr-2 text-base text-left leading-normal shadow-md text-white focus:outline-none 
                focus-visible:ring-2 ring-white ring-offset-2`}
            >
                <SelectValue className='flex-1 truncate placeholder-shown:italic' />
                <Selector size='m' />
            </Button>
            {description && <Text slot='description'>{description}</Text>}
            <Popover
                className={`max-h-60 w-[200px] overflow-auto rounded-md
             text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out 
             exiting:fade-out`}
            >
                <ListBox items={items} />
            </Popover>
        </AriaSelect>
    );
};

export default Select;
