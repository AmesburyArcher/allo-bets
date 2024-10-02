import { MainLayoutProps } from '@/components/MainLayout/types';
import React from 'react';
const MainLayout: React.FC<MainLayoutProps> = ({
    header,
    sidebar,
    children,
}) => {
    return <div className='main-layout'></div>;
};

export default MainLayout;
