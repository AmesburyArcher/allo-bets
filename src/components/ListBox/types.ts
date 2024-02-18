import type {
    ListBoxProps,
    ListBoxItemProps,
    Key,
} from 'react-aria-components';

export interface MyListBoxProps extends ListBoxProps<any> {
    isSection?: boolean;
    items: MyListBoxItemProps[] | MyListBoxSectionItemsProps[];
}

export interface MyListBoxItemProps extends ListBoxItemProps {
    name: string;
    description?: string;
    id: Key;
}

export interface MyListBoxSectionItemsProps {
    name: string;
    description?: string;
    items: MyListBoxItemProps[];
}
