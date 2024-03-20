import React from 'react';
import News from './News';

const title = "Company"
const content = ["1223", "abc"]

export const Company = () => {

    return <News
        title={title}
        content={content}
    />
};