import React, { useState } from 'react';
import Burgers from './Burgers';
import Filters from './Filters';
import Search from './Search';

export default ({
    burgers,
    setBurgers,
}) => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [search, setSearch] = useState('');

    return (
        <>
            <Filters
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />

            <Search
                search={search}
                setSearch={setSearch}
            />

            <Burgers 
                burgers={burgers}
                setBurgers={setBurgers}
                sortBy={selectedFilter}
                search={search}
            />
        </>
    );
    ;
}