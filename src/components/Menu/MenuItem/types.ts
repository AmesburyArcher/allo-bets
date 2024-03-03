import type { MenuItemProps } from 'react-aria-components';

export interface MyMenuItemProps extends MenuItemProps {
    type: 'item' | 'section';
    name: string;
    description?: string;
    id: string;
    items?: MyMenuItemProps[];
}
