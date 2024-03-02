'use client';
import React from 'react';
import { SubmenuTrigger } from 'react-aria-components';
import MenuItem from '@/components/Menu/MenuItem';
import Menu from '@/components/Menu';
import Popover from '@/components/Popover';
import type { MyMenuItemProps } from '@/components/Menu/MenuItem/types';

const SubMenuItem: React.FC<MyMenuItemProps> = ({
    items,
    name,
    description,
    id,
}) => {
    return (
        <SubmenuTrigger>
            <MenuItem
                type='submenu'
                name={name}
                description={description}
                id={id}
            />
            <Popover>
                <Menu items={items} />
            </Popover>
        </SubmenuTrigger>
    );
};

export default SubMenuItem;
