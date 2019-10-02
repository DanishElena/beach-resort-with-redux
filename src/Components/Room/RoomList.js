import React from 'react'
import {RoomForFR} from "../FeaturedRooms/RoomForFR";

export const RoomList = (props) => {
    if(props.rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunatelly no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <div className="roomslist">
            <div className="roomslist-center">
                {props.rooms.map(item => {
                        return <RoomForFR key={item.id} room={item} />
                    })
                }
            </div>
        </div>
    )
}