'use client';
import React from 'react';
import { SubmenuTrigger, Menu as AriaMenu } from 'react-aria-components';
// import Menu from '@/components/Menu';
import MenuItem from '@/components/Menu/MenuItem';
import Popover from '@/components/Popover';
import type { MyMenuItemProps } from '@/components/Menu/MenuItem/types';

const SubMenuItem: React.FC<Omit<MyMenuItemProps, 'type'>> = ({
    items,
    name,
    description,
    id,
}) => {
    return (
        <SubmenuTrigger>
            <MenuItem name={name} description={description} id={id} />
            <Popover>
                {/*<Menu items={items} />*/}
                <AriaMenu items={items}>
                    {({ name, id, description, ...restProps }) => (
                        <MenuItem
                            {...restProps}
                            name={name}
                            id={id}
                            key={id}
                            description={description}
                        />
                    )}
                </AriaMenu>
            </Popover>
        </SubmenuTrigger>
    );
};

export default SubMenuItem;
