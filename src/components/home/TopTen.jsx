import React from 'react';
import { Box, Typography, Stack, Card, CardMedia, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import t1 from "../../assets/home/t1.png";
import t2 from "../../assets/home/t2.png";
import t3 from "../../assets/home/t3.png";
import t4 from "../../assets/home/t4.png";
import t5 from "../../assets/home/t5.png";
import t6 from "../../assets/home/t6.png";
import t7 from "../../assets/home/t7.png";

const posters = [t1, t2, t3, t4, t5, t6, t7];
const items = posters.map((src, index) => ({
    src,
    title: `Movie ${index + 1}`,
    duration: '2hr : 20min',
}));

export default function TopTen() {
    return (
        <Box sx={{ bgcolor: '#000', color: '#fff', px: 3, py: 4 }}>
            <Typography sx={{ fontWeight: 700, mb: 2, fontSize: 18 }}>Top 10 movies</Typography>
            <Swiper
                modules={[Navigation]}
                slidesPerView={6}
                spaceBetween={16}
                breakpoints={{
                    0: { slidesPerView: 2.1, spaceBetween: 12 },
                    600: { slidesPerView: 3.1, spaceBetween: 14 },
                    900: { slidesPerView: 4.1, spaceBetween: 16 },
                    1200: { slidesPerView: 5.1, spaceBetween: 16 },
                    1536: { slidesPerView: 6.1, spaceBetween: 18     },
                }}
                style={{ paddingBottom: 8 }}
            >
                {items.map((item, idx) => (
                    <SwiperSlide key={idx} style={{ height: 'auto' }}>
                        <Box sx={{ position: 'relative', pr: 0.5 }}>
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    left: -10,
                                    fontSize: 96,
                                    fontWeight: 900,
                                    color: 'rgba(255,255,255,0.06)',
                                    zIndex: 0,
                                }}
                            >
                                {(idx + 1).toString().padStart(2, '0')}
                            </Typography>
                            <Card
                                sx={{
                                    width: 270,
                                    height: 380,
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
                                        <Typography sx={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2, color: "white" }}>{item.title}</Typography>
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


