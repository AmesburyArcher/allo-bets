import React from 'react';
import MenuItem from '@/components/Menu/MenuItem';
import { Collection, Header, Section } from 'react-aria-components';
import { MyMenuItemProps } from '@/components/Menu/MenuItem/types';

const MenuItemSection: React.FC<Omit<MyMenuItemProps, 'type'>> = ({
    items,
    name,
}) => {
    return (
        <Section>
            <Header>{name}</Header>
            <Collection items={items}>
                {({ name, id, description, ...restProps }) => (
                    <MenuItem
                        {...restProps}
                        name={name}
                        id={id}
                        key={id}
                        description={description}
                    />
                )}
            </Collection>
        </Section>
    );
};

export default MenuItemSection;
