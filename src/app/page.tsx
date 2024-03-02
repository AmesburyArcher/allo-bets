import Image from 'next/image';
import Select from '@/components/Select';
import Button from '@/components/Button';
import LinkButton from '@/components/LinkButton';
import ToggleButton from '@/components/ToggleButton';

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
            </div>
        </main>
    );
}
