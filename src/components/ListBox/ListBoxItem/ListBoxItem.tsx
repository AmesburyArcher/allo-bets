'use client';
import React from 'react';
import { ListBoxItem as AriaListBoxItem, Text } from 'react-aria-components';
import { MyListBoxItemProps } from '@/components/ListBox/types';

const ListBoxItem: React.FC<MyListBoxItemProps> = ({
    name,
    description,
    id,
    ...rest
}) => {
    return (
        <AriaListBoxItem
            {...rest}
            textValue={name}
            id={id || name}
            className='p-2 rounded-md text-sm hover:cursor-pointer hover:bg-blue-300 outline-none'
        >
            <Text slot='label'>{name}</Text>
            {description && <Text slot='description'>{description}</Text>}
        </AriaListBoxItem>
    );
};

export default ListBoxItem;
