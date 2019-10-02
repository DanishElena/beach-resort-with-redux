import React from 'react';
import defaultBcg from '../../Images/defaultBcg.jpeg'
import {NavLink} from "react-router-dom";
import {Banner} from "../Banner/Banner";
import StyledBackground from "../Background/StyledBackground";


export const SingleRoom = (props) => {

    if (!props.rooms) {
        return <div className="error">
            <h3>No such room</h3>
            <NavLink to="/rooms">back to rooms</NavLink>
        </div>
    }
            return (
              <div>
                    {props.rooms.map(room =>   <div>
                            <StyledBackground img={room.images[0].url || defaultBcg}>
                                <Banner title={`${room.name} room`}>
                                    <NavLink to="/rooms/" className='btn-primary'>back to rooms</NavLink>
                                </Banner>
                            </StyledBackground>
                            <section className='single-room'>
                                <div className="single-room-images">
                                    {room.images.map((item, index) => {
                                        return <img key={index} src={item.url} alt={room.name}/>
                                    })}
                                </div>
                                <div className="single-room-info">
                                    <article className="desc">
                                        <h3>details</h3>
                                        <p>{room.description}</p>
                                    </article>
                                    <article className="info">
                                        <h3>info</h3>
                                        <h6>price : ${room.price}</h6>
                                        <h6>size : ${room.size} SQFT</h6>
                                        <h6>max capacity : {" "}
                                            {room.capacity > 1 ? `${room.capacity} people` :
                                                `${room.capacity} person`}
                                        </h6>
                                        <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                                        <h6>{room.breakfast && "free breakfast included"}</h6>
                                    </article>
                                </div>
                            </section>
                            <section className="room-extras">
                                <h6>extras</h6>
                                <ul className="extras">
                                    {room.extras.map((item, index) => {
                                        return <li key={index}>
                                            - {item}
                                        </li>
                                    })}
                                </ul>
                            </section>
                    </div>
                    )}
                        </div>
            )


}