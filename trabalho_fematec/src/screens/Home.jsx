import React from "react";
import Description from "../components/screenHome/Description";
import NavBar from "../components/NavBar";
import Hero from "../components/screenHome/Hero";
import NewsLetter from "../components/screenHome/NewsLetter";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <Description/>
            <NewsLetter/>
        </div>
    )
}


export default Home;