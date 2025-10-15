import React, { useRef } from 'react';
import { Box, Typography, Stack, Card, CardMedia, Button, IconButton, Rating, Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import u1 from "../../assets/home/u1.png";
import u2 from "../../assets/home/u2.png";
import u3 from "../../assets/home/u3.png";
import back from "../../assets/home/back.png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const posters = [u1, u2, u3, u1];
const items = posters.map((src, index) => ({
    src,
    title: `Movie ${index + 1}`,
    duration: '2hr : 20min',
}));


export default function LatestMovies() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, bgcolor: '#000', color: '#fff', py: 4 }}>
            {/* Left rail */}
            <Box sx={{ width: { xs: '100%', md: 320 }, px: 3, mb: { xs: 3, md: 0 } }}>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 18, mr: 1 }}>Upcoming movies</Typography>
                        <Typography>See more</Typography>
                        <NavigateNextIcon/>
                    </Box>
                </Box>
                <IconButton ref={prevRef} sx={{ color: '#fff', alignSelf: 'center', mb: 1 }} aria-label="scroll up">
                    <KeyboardArrowUpIcon />
                </IconButton>
                <Swiper
                    direction="vertical"
                    modules={[Navigation, Mousewheel]}
                    slidesPerView={3}
                    spaceBetween={16}
                    mousewheel
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    style={{ height: 540, maxWidth: '100%' }}
                >
                    {items.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Box sx={{ position: 'relative' }}>
                                <Typography
                                    sx={{
                                        position: 'absolute',
                                        top: -10,
                                        left: -6,
                                        fontSize: 64,
                                        fontWeight: 900,
                                        color: 'rgba(255,255,255,0.06)',
                                        zIndex: 0,
                                    }}
                                >
                                    {(idx + 1).toString().padStart(2, '0')}
                                </Typography>
                                <Card
                                    sx={{
                                        width: '100%',
                                        height: 160,
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
                                            <Typography sx={{ fontSize: 18, fontWeight: 700, lineHeight: 1.2, color: "white" }}>{item.title}</Typography>
                                            <Typography sx={{ fontSize: 12, color: '#cfcfcf', mb: 1 }}>{item.duration}</Typography>
                                            <Button size="small" variant="contained" sx={{ textTransform: 'none', bgcolor: '#2f2f2f', '&:hover': { bgcolor: '#3a3a3a' } }}>Watch</Button>
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <IconButton ref={nextRef} sx={{ color: '#fff', alignSelf: 'center', mt: 1 }} aria-label="scroll down">
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>

            {/* Right hero area */}
            <Box
                sx={{
                    flexGrow: 1,
                    position: 'relative',
                    backgroundImage: `url(${back})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    p: { xs: 3, md: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, background: { xs: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 20%, transparent 80%)', md: 'linear-gradient(to right, rgba(0,0,0,0.9) 20%, transparent 80%)' } }} />
                <Box sx={{ position: 'relative', maxWidth: { xs: '100%', md: 600 } }}>
                    <Typography variant="h2" fontWeight={900} mb={2} sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }}>
                        VENOM
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1} mb={2} sx={{ flexWrap: 'wrap' }}>
                        <Rating value={4.3} precision={0.1} readOnly sx={{ color: '#f5c518' }} />
                        <Typography>4.3</Typography>
                        <Chip label="IMDb" size="small" sx={{ bgcolor: '#f5c518', color: '#000' }} />
                        <Chip label="2hr : 10min" size="small" sx={{ bgcolor: '#333', color: '#fff' }} />
                    </Box>
                    <Typography variant="body1" color="#ccc" mb={3} sx={{ fontSize: { xs: 14, md: 16 } }}>
                        In John Wick: Chapter 4, the titular assassin embarks on his most dangerous journey yet as he
                        seeks to dismantle the High Table, a shadowy organization controlling the criminal underworld.
                    </Typography>
                    <Typography variant="subtitle2" color="#999">
                        Genres: <Typography component="span" color="#fff">Action, Thriller</Typography>
                    </Typography>
                    <Typography variant="subtitle2" color="#999" mb={4} sx={{ display: 'block' }}>
                        Tags: <Typography component="span" color="#fff">Action, Assassin, Thriller</Typography>
                    </Typography>
                    <Box display="flex" gap={2} sx={{ flexWrap: 'wrap' }}>
                        <Button variant="contained" sx={{ bgcolor: '#e50914', '&:hover': { bgcolor: '#b20710' }, borderRadius: 2, px: 3 }}>Notify me</Button>
                        <IconButton
                            sx={{
                                border: "1px solid #fff",
                                color: "#fff",
                                borderRadius: "50%",
                                width: 40,
                                height: 40,
                            }}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


