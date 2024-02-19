'use client';
import React from 'react';
import { ListBoxItem as AriaListBoxItem, Text } from 'react-aria-components';
import type { MyListBoxItemProps } from '@/components/ListBox/types';
import { IconCheck } from '@tabler/icons-react';

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
            className={
                'flex justify-between p-2 rounded-md text-sm hover:cursor-pointer' +
                ' hover:bg-blue-300 focus:bg-blue-300 selected:bg-blue-400 outline-none'
            }
        >
            {({ isSelected }) => (
                <>
                    <span className='flex flex-col gap-2 grow-0 w-[calc(100%-24px)]'>
                        <Text slot='label' className='truncate'>
                            {name}
                        </Text>
                        {description && (
                            <Text
                                slot='description'
                                className='truncate text-xs italic'
                            >
                                {description}
                            </Text>
                        )}
                    </span>
                    {isSelected && (
                        <span className='grow shrink-0'>
                            <IconCheck />
                        </span>
                    )}
                </>
            )}
        </AriaListBoxItem>
    );
};

export default ListBoxItem;
