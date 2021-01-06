import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

const SearchContainer = styled('div')`
    position: relative;
`;

const SearchInput = styled(TextField)`
    width: 100%;

    input {
        padding-left: 30px;
    }
`;

const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    left: 5px;
    top: 15px;
`;

export default ({
    setSearch
}) => {
    return (
        <SearchContainer>
            <StyledSearchIcon/>
            <SearchInput
                variant="outlined" 
                onChange={(event) => setSearch(event.target.value)}
            />
        </SearchContainer>
    )
}