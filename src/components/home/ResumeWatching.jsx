// import React from 'react';
// import { Box, Typography, Stack, Card, CardMedia, CardContent, Button } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
//
// const items = [
//     {
//         title: 'One Piece',
//         duration: '2hr : 20min',
//         image: 'https://images.unsplash.com/photo-1612036782180-6f0b6f3b6d53?w=800&h=1200&fit=crop',
//         primary: true,
//     },
//     { title: 'Pirates', duration: '2hr : 15min', image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&h=1200&fit=crop' },
//     { title: 'Fast & Furious', duration: '2hr : 05min', image: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=800&h=1200&fit=crop' },
//     { title: 'Godzilla', duration: '2hr : 10min', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1200&fit=crop' },
//     { title: 'Peaky Blinders', duration: '1hr : 00min', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=1200&fit=crop' },
//     { title: 'John Wick', duration: '2hr : 22min', image: 'https://images.unsplash.com/photo-1542204625-e3d64a37f72a?w=800&h=1200&fit=crop' },
// ];

import React from 'react';
import { Box, Typography, Stack, Card, CardMedia, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import r1 from "../../assets/home/r1.png";
import r2 from "../../assets/home/r2.png";
import r3 from "../../assets/home/r3.png";
import r4 from "../../assets/home/r4.png";
import r5 from "../../assets/home/r5.png";
import r6 from "../../assets/home/r6.png";
import r7 from "../../assets/home/r7.png";

const posters = [r1, r2, r3, r4, r5, r6, r7];
const items = posters.map((src, index) => ({
    src,
    title: `Movie ${index + 1}`,
    duration: '2hr : 20min',
}));

export default function ResumeWatching() {
    return (
        <Box sx={{ bgcolor: '#000', color: '#fff', px: 3, py: 4 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: 18 }}>Resume watching</Typography>
            <Swiper
                modules={[Navigation]}
                slidesPerView={6}
                spaceBetween={16}
                slidesOffsetBefore={12}
                slidesOffsetAfter={12}
                breakpoints={{
                    0: { slidesPerView:1, spaceBetween:5, slidesOffsetBefore: 12, slidesOffsetAfter: 12 },
                    500: { slidesPerView:2, spaceBetween:5, slidesOffsetBefore: 12, slidesOffsetAfter: 12 },
                    766: { slidesPerView: 3, spaceBetween: 14, slidesOffsetBefore: 14, slidesOffsetAfter: 14 },
                    1196: { slidesPerView: 4, spaceBetween: 16, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
                    1474: { slidesPerView: 5, spaceBetween: 16, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
                    1730: { slidesPerView: 6, spaceBetween: 20, slidesOffsetBefore: 18, slidesOffsetAfter: 18 },
                }}
                style={{ paddingBottom: 8 }}
            >
                {items.map((item, idx) => (
                    <SwiperSlide key={idx} style={{ height: 'auto' }}>
                        <Box sx={{ position: 'relative', pr: 0.5 }}>
                            <Card
                                sx={{
                                    width: { xs: 200, sm: 220, md: 270 },
                                    height: { xs: 300, sm: 330, md: 380 },
                                    borderRadius: 2,
                                    bgcolor: '#111',
                                    position: 'relative',
                                    zIndex: 1,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'transform .25s ease',
                                    '&:hover .media': { transform: 'scale(1.06)' },
                                    '&:hover .overlay': { opacity: 1 },
                                }}
                            >
                                <CardMedia
                                    className="media"
                                    component="img"
                                    image={item.src}
                                    alt={`Top ${idx + 1}`}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s ease' }}
                                />

                                {/* Hover overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        p: 2,
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 12%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 75%)',
                                        opacity: 0,
                                        transition: 'opacity .25s ease',
                                    }}
                                >
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: 700, lineHeight: 1.2,color: '#ffffff' }}>{item.title}</Typography>
                                        <Typography sx={{ fontSize: 12, color: '#cfcfcf', mb: 1 }}>{item.duration}</Typography>
                                        <Button size="small" variant="contained" sx={{ textTransform: 'none', bgcolor: '#2f2f2f', '&:hover': { bgcolor: '#3a3a3a' } }}>Watch</Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}


