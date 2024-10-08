'use client';
import React, { useCallback } from 'react';
import { MenuTrigger, Menu as AriaMenu } from 'react-aria-components';
import Popover from '@/components/Popover';
import Button from '@/components/Button';
import { MyMenuProps } from '@/components/Menu/types';
import { IconMenu2 } from '@tabler/icons-react';
import type { MyMenuItemProps } from '@/components/Menu/MenuItem/types';
import MenuItemSection from '@/components/Menu/MenuItemSection';
import MenuItem from '@/components/Menu/MenuItem';

const Menu: React.FC<MyMenuProps> = ({ buttonContent, ...restProps }) => {
    const renderMenuItem = useCallback((item: MyMenuItemProps) => {
        const { type, items, name, id, description, ...rest } = item;

        if (type === 'section') {
            return (
                <MenuItemSection {...rest} name={name} items={items} id={id} />
            );
        }
        // if (type === 'submenu') {
        //     return (
        //         <SubMenuItem
        //             name={name}
        //             items={items}
        //             id={id}
        //             key={id}
        //             description={description}
        //         />
        //     );
        // }

        return (
            <MenuItem {...rest} name={name} id={id} description={description} />
        );
    }, []);

    return (
        <MenuTrigger>
            <Button aria-label='menu' padding='p-[4px]' hover>
                {buttonContent || <IconMenu2 />}
            </Button>
            <Popover>
                <AriaMenu
                    {...restProps}
                    className={`flex flex-col gap-1 bg-gray-600 p-2
                         overflow-y-auto overflow-x-hidden outline-none 
                         w-[200px] border-[1px] border-gray-400 border-solid rounded-md`}
                >
                    {(item) => renderMenuItem(item)}
                </AriaMenu>
            </Popover>
        </MenuTrigger>
    );
};

export default Menu;
