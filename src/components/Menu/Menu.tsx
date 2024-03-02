import React from 'react';
import { MenuTrigger, Menu as AriaMenu } from 'react-aria-components';
import Popover from '@/components/Popover';
import Button from '@/components/Button';
import { MyMenuProps } from '@/components/Menu/types';
import { IconMenu2 } from '@tabler/icons-react';

const Menu: React.FC<MyMenuProps> = ({
    items,
    buttonContent,
    ...restProps
}) => {
    return (
        <MenuTrigger>
            <Button aria-label='menu' padding='p-[2px]'>
                {buttonContent || <IconMenu2 />}
            </Button>
            <Popover>
                <AriaMenu {...restProps}></AriaMenu>
            </Popover>
        </MenuTrigger>
    );
};

export default Menu;
