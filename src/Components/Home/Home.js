import React from 'react';
import {NavLink} from "react-router-dom";
import {Banner} from "../Banner/Banner";
import {Background} from "../Background/Background";
import {Services} from "../Services/Services";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";


export const Home = () => {
    return (
        <div>
            <Background>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <NavLink to="/rooms" className="btn-primary">
                        our rooms
                    </NavLink>
                </Banner>
            </Background>
            <Services/>
            <FeaturedRooms />
        </div>
    )
}