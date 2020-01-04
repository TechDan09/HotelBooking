import React from 'react';
import Hero from '../components/Hero'; 
import { Link } from 'react-router-dom';
import Banner from "../components/Banner"
import Services from "../components/Services"


const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                <Link to='/rooms' className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        </>
    );
}

export default Home;
