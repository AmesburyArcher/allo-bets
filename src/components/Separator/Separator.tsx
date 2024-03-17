import React from 'react';
import {
    Separator as AriaSeparator,
    SeparatorProps,
} from 'react-aria-components';

const Separator: React.FC<SeparatorProps> = (props) => {
    return (
        <AriaSeparator {...props} className={`bg-gray-400 h-[1px] mx-3 my-1`} />
    );
};

export default Separator;
