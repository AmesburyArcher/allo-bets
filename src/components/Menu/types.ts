import type { MenuProps } from 'react-aria-components';
import type { MyMenuItemProps } from '@/components/Menu/MenuItem/types';
import type { ReactNode } from 'react';

export interface MyMenuProps extends MenuProps<any> {
    items: MyMenuItemProps[] | undefined;
    buttonContent?: ReactNode;
}
