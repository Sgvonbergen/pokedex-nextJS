import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

type cardpropstype = {
    name: string,
    number: string,
    type1: string,
    type2: string,
    image: string
};

const PokeCard = (data: cardpropstype) => {
    const types: Array<string> = [
        'Fire',
        'Grass',
        'Water',
        'Poison',
        'Flying',
        'Bug',
        'Normal',
        'Electric',
        'Ground',
        'Fairy',
        'Fighting',
        'Psychic',
        'Rock',
        'Steel',
        'Dark',
        'Dragon',
        'Ghost',
        'Ice'
    ]

    return (
        <Card sx={{ minWidth: 275}}>
            {/* # Pokemon Image */}
            <CardMedia
                component='img'
                height='150'
                image={data.image}
                alt='test image'
                className='PokemonImage'
            />

            <CardContent>
                {/* Pokemon Number and Name */}
                <Typography variant='caption'>N.º {data.number}</Typography>
                <Typography variant='h4'>{data.name}</Typography>
                {/* # We iterate through all posible types to asign an appropiate color for the background and text
                # for type1 and type2 */}
                <div className='Types'>
                    {types.map((t) => (
                            data.type1 == t ?
                            <div className={data.type1}><p className={data.type1}>{data.type1}</p></div>:
                            null
                        ))}
                    {types.map((t) => (
                            data.type2 == t ?
                            <div className={data.type2}><p className={data.type2}>{data.type2}</p></div>:
                            null
                        ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default PokeCard
