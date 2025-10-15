import React from 'react';
import { Box, Typography, Stack, Card, CardMedia, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import l1 from "../../assets/home/l1.png";
import l2 from "../../assets/home/l2.png";
import l3 from "../../assets/home/l3.png";
import l4 from "../../assets/home/l4.png";
import l5 from "../../assets/home/l5.png";
import l6 from "../../assets/home/l6.png";
import l7 from "../../assets/home/l7.png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const posters = [l1, l2, l3, l4, l5, l6, l7];
const items = posters.map((src, index) => ({
    src,
    title: `Movie ${index + 1}`,
    duration: '2hr : 20min',
}));

export default function UpcomingMovies() {

    return (
        <Box sx={{ bgcolor: '#000', color: '#fff', px: 3, py: 4 }}>
            <Box sx={{display: 'flex'}}>
                <Typography sx={{ fontWeight: 700, mb: 2, fontSize: 18, marginRight: "10px" }}>Latest movies</Typography>
                <Typography>See more</Typography>
                <NavigateNextIcon/>
            </Box>
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
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    left: -10,
                                    fontSize: { xs: 64, md: 96 },
                                    fontWeight: 900,
                                    color: 'rgba(255,255,255,0.06)',
                                    zIndex: 0,
                                }}
                            >
                                {(idx + 1).toString().padStart(2, '0')}
                            </Typography>
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
                                        <Typography sx={{ fontSize: { xs: 18, md: 24 }, fontWeight: 700, lineHeight: 1.2, color: "white" }}>{item.title}</Typography>
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
