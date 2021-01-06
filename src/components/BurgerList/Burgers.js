import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import styled from 'styled-components';

import { toggleApproved, incrementVote, decrementVote } from '../../api';

const Burger = styled(Card)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    padding: 10px;
`;

const Votes = styled(Typography)`
    width: 100px;
    text-align: center;

    ${({ approved }) => approved && `
        color: green;
    `}
`;

const Name = styled(Typography)`
    flex: 1;
    cursor: pointer;

    ${({ approved }) => approved && `
        color: green;
    `}
`;

const Arrows = styled('div')`
    svg {
        display: block;
        cursor: pointer;
    }
`;

export default ({
    burgers,
    setBurgers,
    sortBy,
    search,
}) => {
    return (
        burgers
        .sort(({
            created: createdA,
            name: nameA,
            votes: votesA,
            approved: approvedA
        }, {
            created: createdB,
            name: nameB,
            votes: votesB,
            approved: approvedB
        }) => {
            if (sortBy === 'Created') {
                return createdB - createdA;
            } else if (sortBy === 'Name') {
                return nameB < nameA ? 1 : -1;
            } else if (sortBy === 'Most Popular') {
                return votesB - votesA;
            } else if (sortBy === 'Least Popular') {
                return votesA - votesB;
            } else if (sortBy === 'Approved') {
                return approvedB - approvedA;
            } else {
                return nameB - nameA;
            }
        })
        .filter(({
            name
        }) => {
            return !search || name.includes(search) 
        })
        .map(({
            votes,
            name,
            approved,
            id
        }) => (
            <Burger>
                <Votes approved={approved} variant="h4">{votes}</Votes>
                <Name
                    approved={approved}
                    variant="h6"
                    onDoubleClick={() => setBurgers(toggleApproved({ id }))}
                >{name}</Name>

                <Arrows>
                    <KeyboardArrowUpIcon onClick={() => setBurgers(incrementVote({ id }))} />
                    <KeyboardArrowDownIcon  onClick={() => setBurgers(decrementVote({ id }))} />
                </Arrows>
            </Burger>
        ))
    );
} 