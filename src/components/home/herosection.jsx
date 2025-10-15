import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import jwBg from '../../assets/home/1.png';
import textImg from '../../assets/home/2.png'

const Herosection = () => {
const hero = {
    texti: textImg,
    rating: 4.3,
    duration: '2hr : 20min',
    description: 'In John Wick: Chapter 4, the titular assassin embarks on his most dangerous journey yet as he seeks to dismantle the High Table, the shadowy organization controlling the criminal underworld.',
    genres: ['Action', 'Thriller'],
    tags: ['Action', 'Assassin', 'Thriller'],
    image: jwBg
};

// no left rail in the hero for this design

return (
<Box sx={{ background: '#000', color: '#fff' }}>
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden', pt: { xs: 7, md: 9 } }}>
        {/* Background image */}
        <Box sx={{ position: 'absolute', inset: 0, '& img': { width: '100%', height: '100%', objectFit: 'cover', objectPosition: '75% center', filter: 'brightness(0.9)' } }}>
            <img src={hero.image} alt={hero.title} />
        </Box>
        {/* Left gradient overlay */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0) 78%)' }} />

        {/* Content layer */}
        <Box sx={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', px: { xs: 2, md: 6 } }}>
            <Box sx={{ maxWidth: 720 }}>
                {/* Title */}
                <Stack spacing={1} sx={{ mb: 1 }}>
                    <img src={hero.texti} width={"545px"}/>
                </Stack>

                {/* Rating / meta row */}
                <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 1 }}>
                    <Stack direction="row" spacing={0.3}>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} sx={{ color: i < 4 ? '#FFD54F' : '#333', fontSize: 18 }} />
                        ))}
                    </Stack>
                    <Typography sx={{ fontSize: 14, color: '#ddd' }}>{hero.rating}</Typography>
                    <Box sx={{ backgroundColor: '#ffd54f', color: '#000', fontSize: 10, fontWeight: 700, px: 0.5, py: 0.1, borderRadius: 0.5 }}>IMDB</Box>
                    <Typography sx={{ fontSize: 14, color: '#ddd' }}>{hero.duration}</Typography>
                </Stack>

                {/* Description */}
                <Typography sx={{ color: '#ffffff', fontSize: 18, lineHeight: 1.6, mb: 2 , fontWeight: 700}}>
                    {hero.description}
                </Typography>

                {/* Genres & Tags */}
                <Stack direction="row" spacing={1} sx={{ mb: 0.5 }}>
                    <Typography sx={{ color: '#e53935', fontSize: 18 }}>Genres</Typography>
                    <Typography sx={{ color: '#ddd', fontSize: 18 }}>{hero.genres.join(', ')}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Typography sx={{ color: '#e53935', fontSize: 18 }}>Tags</Typography>
                    <Typography sx={{ color: '#ddd', fontSize: 18 }}>{hero.tags.join(', ')}</Typography>
                </Stack>

                {/* Buttons */}
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button variant="contained" sx={{ backgroundColor: '#e53935', color: '#fff', textTransform: 'none', px: 3, '&:hover': { backgroundColor: '#c62828' } }}>Watch now</Button>
                    <Button variant="outlined" sx={{ borderColor: '#4f4f4f', color: '#fff', textTransform: 'none', px: 3, backgroundColor: 'rgba(142,141,141,0.41)', '&:hover': { borderColor: '#6f6f6f', backgroundColor: 'rgba(0,0,0,0.5)' } }}>More Info</Button>
                </Stack>
            </Box>
        </Box>

        {/* Bottom progress bar */}
        <Box sx={{ position: 'absolute', left: "70%", right: 0, bottom: 18, zIndex: 2, px: { xs: 2, md: 6 } }}>
            <Box sx={{ height: 3,width: '25%', backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 2 }}>
                <Box sx={{ width: '15%', height: '100%', backgroundColor: '#c62828', borderRadius: 2 }} />
            </Box>
        </Box>
    </Box>
</Box>
);
};

export default Herosection;
