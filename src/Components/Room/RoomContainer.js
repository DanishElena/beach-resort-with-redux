import React from 'react'
import {RoomFilter} from "./RoomFilter";
import {RoomList} from "./RoomList";
import {Loading} from "../Loading/Loading";



const RoomContainer = ({context}) => {
//    console.log(context)


    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <RoomFilter context={context}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}



export default withRoomConsumer(RoomContainer)