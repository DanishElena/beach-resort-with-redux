import React from 'react';
import defaultImg from '/src/Images/defaultBcg.jpeg'
import {NavLink} from "react-router-dom";
import {Banner} from "../Banner/Banner";
import StyledBackground from "../Background/StyledBackground";


export class SingleRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        }

    }

    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className="error">
                <h3>No such room</h3>
                <NavLink to="/rooms">back to rooms</NavLink>
            </div>
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [mainImg, ...defaultImg] = images
        return (
            <>
                <StyledBackground img={mainImg || this.state.defaultImg}>
                    <Banner title={`${name} room`}>
                        <NavLink to="/rooms/" className='btn-primary'>back to rooms</NavLink>
                    </Banner>
                </StyledBackground>
                <section className='single-room'>
                    <div className="single-room-images">
                        {images.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>max capacity : {" "}
                                {capacity>1 ? `${capacity} people` :
                                    `${capacity} person` }
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>
                                - {item}
                            </li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}