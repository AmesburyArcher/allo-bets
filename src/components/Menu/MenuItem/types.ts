import type { MenuItemProps } from 'react-aria-components';

export interface MyMenuItemProps extends MenuItemProps {
    type: 'item' | 'section' | 'submenu';
    name: string;
    description?: string;
    id?: string;
    items?: MyMenuItemProps[];
}
