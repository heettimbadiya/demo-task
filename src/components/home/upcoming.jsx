import React, { useRef } from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
    Rating,
    Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

import venomImg from "../../assets/home/b7fc786f06387c144e445b89d2b55ea5d9db8a33.png";
import avengersImg from "../../assets/home/b9ff89bc865c402552982596b82042579bc2958a.png";
import civilwarImg from "../../assets/home/fca122368ce200e7ed1ba17aefe1f355c118f395.png";
import ironman3 from "../../assets/home/dcc2e26755cb6bb9288a770312e3210e2841fd3f.png";
import drstrangeImg from "../../assets/home/p19128463_v_h8_ah.jpg";

const upcomingMovies = [
    { title: "Avengers : Infinity War", duration: "2hr : 20min", image: avengersImg },
    { title: "Avengers : Civil War", duration: "2hr : 27min", image: civilwarImg },
    { title: "Iron Man 3", duration: "2hr : 3min", image: ironman3 },
    { title: "Doctor Strange", duration: "1hr : 55min", image: drstrangeImg },
    { title: "Venom", duration: "2hr : 20min", image: venomImg },
];

export default function UpcomingMovies() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Box sx={{ display: "flex", bgcolor: "#000", color: "#fff", height: "100vh" }}>
            {/* Left Sidebar */}
            <Box
                sx={{
                    width: 320,
                    bgcolor: "#111",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6" fontWeight={700}>
                        Upcoming Movies
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "#aaa", cursor: "pointer", "&:hover": { color: "#fff" } }}
                    >
                        See More ›
                    </Typography>
                </Box>

                {/* Up Button */}
                <IconButton ref={prevRef} sx={{ color: "#fff", alignSelf: "center" }}>
                    <KeyboardArrowUpIcon />
                </IconButton>

                {/* Swiper */}
                <Swiper
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={20}
                    mousewheel
                    modules={[Mousewheel, Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    navigation={true}
                    style={{ flexGrow: 1 }}
                >
                    {upcomingMovies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: "relative",
                                    height: 140,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    backgroundImage: `url(${movie.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "100%",
                                        p: 1.5,
                                        background:
                                            "linear-gradient(180deg, transparent, rgba(0,0,0,0.8))",
                                    }}
                                >
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="caption" color="#ccc">
                                        {movie.duration}
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Down Button */}
                <IconButton ref={nextRef} sx={{ color: "#fff", alignSelf: "center", mt: 1 }}>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>

            {/* Right Side */}
            <Box
                sx={{
                    flexGrow: 1,
                    position: "relative",
                    backgroundImage: `url(${venomImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: 6,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to right, rgba(0,0,0,0.9) 20%, transparent 80%)",
                    }}
                />
                <Box sx={{ position: "relative", maxWidth: 600 }}>
                    <Typography variant="h2" fontWeight={900} mb={2}>
                        VENOM
                    </Typography>

                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                        <Rating value={4.3} precision={0.1} readOnly sx={{ color: "#f5c518" }} />
                        <Typography>4.3</Typography>
                        <Chip label="IMDb" size="small" sx={{ bgcolor: "#f5c518", color: "#000" }} />
                        <Chip label="2hr : 10min" size="small" sx={{ bgcolor: "#333", color: "#fff" }} />
                    </Box>

                    <Typography variant="body1" color="#ccc" mb={3}>
                        In John Wick: Chapter 4, the titular assassin embarks on his most dangerous journey yet
                        as he seeks to dismantle the High Table, a shadowy organization controlling the criminal
                        underworld.
                    </Typography>

                    <Typography variant="subtitle2" color="#999">
                        Genres: <Typography component="span" color="#fff">Action, Thriller</Typography>
                    </Typography>
                    <Typography variant="subtitle2" color="#999" mb={4}>
                        Tags: <Typography component="span" color="#fff">Action, Assassin, Thriller</Typography>
                    </Typography>

                    <Box display="flex" gap={2}>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#e50914",
                                "&:hover": { bgcolor: "#b20710" },
                                borderRadius: 2,
                                px: 3,
                            }}
                        >
                            Notify me
                        </Button>
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
