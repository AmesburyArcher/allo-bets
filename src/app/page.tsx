import Image from 'next/image';
import Select from '@/components/Select';
import Button from '@/components/Button';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div>
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
                />
                <Button>
                    <span>Click Me!</span>
                </Button>
            </div>
        </main>
    );
}
