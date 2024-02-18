'use client';
import React, { useCallback, useMemo } from 'react';
import {
    Collection,
    Header,
    ListBox as AriaListBox,
    Section,
} from 'react-aria-components';
import ListBoxItem from '@/components/ListBox/ListBoxItem';
import {
    MyListBoxProps,
    MyListBoxItemProps,
    MyListBoxSectionItemsProps,
} from '@/components/ListBox/types';
import classNames from 'classnames';

const ListBox: React.FC<MyListBoxProps> = ({
    items,
    className,
    isSection = false,
    ...props
}) => {
    // const cx = useMemo(() => classNames('list-box', className), [className]);

    const renderBoxList = useCallback(
        (item: MyListBoxItemProps | MyListBoxSectionItemsProps) => {
            if (isSection) {
                const section: MyListBoxSectionItemsProps =
                    item as MyListBoxSectionItemsProps;
                return (
                    <Section id={section.name} className='list-box-section'>
                        <Header className='font-bold'>{section.name}</Header>
                        <Collection items={section.items}>
                            {(item) => (
                                <ListBoxItem name={item.name} id={item.id} />
                            )}
                        </Collection>
                    </Section>
                );
            }
            const listBoxItem = item as MyListBoxItemProps;

            return <ListBoxItem name={listBoxItem.name} id={listBoxItem.id} />;
        },
        [isSection]
    );

    return (
        <AriaListBox
            {...props}
            className='bg-gray-600 p-2 overflow-auto outline-none max-w-[300px] border-[1px] border-gray-400 border-solid rounded-md'
            items={items}
        >
            {renderBoxList}
        </AriaListBox>
    );
};

export default ListBox;
