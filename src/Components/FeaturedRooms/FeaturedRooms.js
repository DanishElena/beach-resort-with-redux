import React from 'react'
import {Title} from "../Title/Title";
import {Loading} from "../Loading/Loading";
import {RoomForFR} from "./RoomForFR";


export default class FeaturedRooms extends React.Component {
    
    render() {
        let {loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
            return <RoomForFR key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
            </section>
        )
    }
}