import React from 'react';
import Students from './Students';
import Future from './Future';
import CardList from './CardList';

const MainBody = () => {
    return (
        <div>
            <Students></Students>
            <Future></Future>
            <CardList />
        </div>
    );
};

export default MainBody;