import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import styled from 'styled-components';

import { saveBurger } from '../api'

const Container = styled('div')`
    display: flex;
`;

const InputWrapper = styled('div')`
    flex: 1;
    padding-right: 10px;
`;

const BurgerNameInput = styled(TextField)`
    width: 100%;
`;

const Save = styled(Button)`
    width: 200px;
`;

export default ({
    burgerName: existingBurgerName,
    setBurgers,
}) => {
    const [burgerName, setBurgerName] = useState(existingBurgerName);
    const [error, setError] = useState('');

    return (
        <>
            <Typography variant="h4">New Burger Idea</Typography>
            <Container>
                <InputWrapper>
                    <BurgerNameInput
                        label="Burger Name"
                        variant="outlined" 
                        onChange={(event) => {
                            setError(null)
                            setBurgerName(event.target.value)
                        }}
                        value={burgerName}
                        error={error}
                        helperText={error}
                    />
                </InputWrapper>
        
                <Save
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        try { 
                            setBurgers(saveBurger({ name: burgerName }));
                            setBurgerName('');
                        } catch (e) {
                            setError(e.message);
                        }
                    }}
                >Save</Save>
            </Container>
        </>
    );
} 