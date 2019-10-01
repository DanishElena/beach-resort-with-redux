import React from 'react';
import {NavLink} from "react-router-dom";
import RoomContainer from "./RoomContainer";
import {Background} from "../Background/Background";
import {Banner} from "../Banner/Banner";


export const Room = () => {
    return (
        <>
            <div>
                <Background hero="roomsHero">
                    <Banner title="our rooms">
                        <NavLink to="/" className="btn-primary">
                            return home
                        </NavLink>
                    </Banner>
                </Background>
            </div>
            <RoomContainer/>
        </>
    )
}

