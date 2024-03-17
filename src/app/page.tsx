import Image from 'next/image';
import Select from '@/components/Select';
import Button from '@/components/Button';
import LinkButton from '@/components/LinkButton';
import ToggleButton from '@/components/ToggleButton';
import Menu from '@/components/Menu';
import { MyMenuItemProps } from '@/components/Menu/MenuItem/types';

const menuItems: MyMenuItemProps[] = [
    {
        name: 'Item 1',
        id: 'Item 1 ID',
        type: 'item',
    },
    {
        name: 'Section Title',
        id: 'section1',
        separatorBefore: true,
        items: [
            {
                name: 'Section Item 1',
                id: 'Sec1ID',
                type: 'item',
            },
            {
                name: 'Section Item 2',
                id: 'Sec2ID',
                type: 'item',
            },
        ],
        type: 'section',
    },
    // {
    //     name: 'Sub Menu 1',
    //     type: 'submenu',
    //     id: 'submenu1',
    //     items: [
    //         {
    //             name: 'Sub Menu 1 item',
    //             id: 'submenuitem1id',
    //             type: 'item',
    //         },
    //     ],
    // },
];

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className={`flex flex-col gap-2`}>
                <Select
                    items={[
                        {
                            id: '3',
                            name: 'Item Name',
                            description:
                                'Sample DescriptionDescriptionDescriptionDescriptionDescription',
                        },
                        { id: '4', name: 'Item 4' },
                    ]}
                    label='This is a label'
                    description='some description'
                    placeholder='Select an item'
                />
                <Button hover>
                    <span>Click Me!</span>
                </Button>
                <LinkButton hover>Link!</LinkButton>
                <ToggleButton hover>Toggle</ToggleButton>
                <Menu items={menuItems} />
            </div>
        </main>
    );
}
