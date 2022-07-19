import * as React from 'react';
import PokeCard from './pokeCard';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';


type cardpropstype = {
    name: string,
    number: string,
    type1: string,
    type2: string,
    image: string
};

interface cardsprops {
    data: Array<cardpropstype>
};

const PokeGrid = (data: cardsprops) => {
    const cards= data.data;
    return (
        <Box sx={{ m: 10, width: 0.7 }}>
            <Grid container spacing={{ md: 4, sx: 2}}>
            {cards.map((card, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                    <PokeCard {...card}/>
                </Grid>
            ))}
            </Grid>
        </Box>
    );
}

export default PokeGrid