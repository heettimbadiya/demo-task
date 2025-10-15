import React from 'react';
import { Box, Typography, Card, CardMedia, Button, Stack, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import r1 from '../../assets/home/r1.png';
import r2 from '../../assets/home/r2.png';
import r3 from '../../assets/home/r3.png';
import r4 from '../../assets/home/r4.png';
import r5 from '../../assets/home/r5.png';
import r6 from '../../assets/home/r6.png';
import r7 from '../../assets/home/r7.png';

import e1 from '../../assets/home/e1.png';
import e2 from '../../assets/home/e2.png';
import m1 from '../../assets/home/m1.png';
import m2 from '../../assets/home/m2.png';
import m3 from '../../assets/home/m3.png';
import m4 from '../../assets/home/m4.png';




const genres = [
    {
        title: 'Action',
        hero: e1,
        thumbs: [m1, m2],
    },
    {
        title: 'Adventure',
        hero: e2,
        thumbs: [m3, m4],
    },
    {
        title: 'Action',
        hero: e1,
        thumbs: [m1, m2],
    },
    {
        title: 'Adventure',
        hero: e2,
        thumbs: [m3, m4],
    },
    {
        title: 'Action',
        hero: e1,
        thumbs: [m1, m2],
    },
];

export default function ExploreByGenre() {
    return (
        <Box sx={{ bgcolor: '#000', color: '#fff', px: 3, py: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 18, mr: 1 }}>Explore movies by genre</Typography>
            </Box>
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={16}
                breakpoints={{
                    0: { slidesPerView: 1.1, spaceBetween: 12 },
                    600: { slidesPerView: 2.1, spaceBetween: 14 },
                    900: { slidesPerView: 3.1, spaceBetween: 16 },
                    1200: { slidesPerView: 4.1, spaceBetween: 16 },
                }}
                style={{ paddingBottom: 8 }}
            >
                {genres.map((g, idx) => (
                    <SwiperSlide key={idx} style={{ height: 'auto' }}>
                        <Card sx={{ bgcolor: '#1a1a1a', borderRadius: 2, p: 2, height: 'auto' }}>
                            <CardMedia component="img" image={g.hero} alt={g.title} sx={{ height: 284, borderRadius: 2 }} />
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                {g.thumbs.map((t, i) => (
                                    <Box key={i} sx={{ flex: 1 }}>
                                        <CardMedia component="img" image={t} alt={`${g.title}-${i}`} sx={{ height: 142, borderRadius: 2 }} />
                                    </Box>
                                ))}
                            </Stack>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                                <Typography sx={{ fontWeight: 700, color: "white" }}>{g.title}</Typography>
                                <Button size="small" variant="contained" sx={{ textTransform: 'none', bgcolor: '#2f2f2f', '&:hover': { bgcolor: '#3a3a3a' } }}>Watch</Button>
                            </Stack>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}


