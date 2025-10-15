import React from 'react';
import Upcoming from "../../components/home/upcoming.jsx";
import ResumeWatching from "../../components/home/ResumeWatching.jsx";
import TopTen from "../../components/home/TopTen.jsx";
import Herosection from "../../components/home/herosection.jsx";
import LatestMovies from "../../components/home/LatestMovies.jsx";
import ExploreByGenre from "../../components/home/ExploreByGenre.jsx";
import Header from "../../components/global/Header.jsx";
import Footer from "../../components/global/Footer.jsx";

function HomePage() {
    return (
        <>
            <Header/>
            <Herosection/>
            <ResumeWatching/>
            <TopTen/>
            <LatestMovies/>
            <Upcoming/>
            <ExploreByGenre/>
            <Footer show={true}/>
        </>
    );
}

export default HomePage;