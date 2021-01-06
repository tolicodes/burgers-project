import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default ({
    selectedFilter,
    setSelectedFilter,
}) => {
    const FILTERS = [
        'Created',
        'Name',
        'Most Popular',
        'Least Popular',
        'Approved'
    ];

    return (
        <ButtonGroup variant="contained" color="primary">
            {
                FILTERS.map((filter) => {
                    const isSelected = filter && selectedFilter === filter;

                    return (
                        <Button
                            color="primary"
                            variant={isSelected ? null : "text"}
                            onClick={() => {
                                if (selectedFilter === filter) {
                                    setSelectedFilter(null)
                                } else {
                                    setSelectedFilter(filter)
                                }
                            }}
                        >
                            {filter}
                        </Button>
                    );
                })
            }
        </ButtonGroup>
    )
}