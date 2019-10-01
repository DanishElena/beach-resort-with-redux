import React from 'react';
import {NavLink} from "react-router-dom";
import defaultImg from '/src/Images/defaultBcg.jpeg'
import PropTypes from 'prop-types';


export const RoomForFR = ({room}) => {

    const {name, slug, images, price} = room;
    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0] || defaultImg}
                     alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <NavLink to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </NavLink>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}

RoomForFR.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}