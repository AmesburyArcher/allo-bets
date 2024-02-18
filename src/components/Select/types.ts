import React from 'react';
import { SelectProps, ValidationResult } from 'react-aria-components';
import {
    MyListBoxItemProps,
    MyListBoxSectionItemsProps,
} from '@/components/ListBox/types';

export interface MySelectProps<T extends object>
    extends Omit<SelectProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items: MyListBoxItemProps[] | MyListBoxSectionItemsProps[];
    children?: React.ReactNode | ((item: T) => React.ReactNode);
    className?: string;
}
