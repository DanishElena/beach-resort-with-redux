import React from 'react'
import {RoomFilter} from "./RoomFilter";
import {RoomList} from "./RoomList";
import {Loading} from "../Loading/Loading";
import {RoomForFR} from "../FeaturedRooms/RoomForFR";
import {Title} from "../Title/Title";
import {compose} from "redux";
import {connect} from "react-redux";
import {getRoomsToRC} from "../../Reducers/Reducer";

// let mapStateToProps = (state) => {
//     return {
//         rooms: state.reducer.rooms,
//         isLoading: state.reducer.isLoading
//     }
// }
//
// class FeaturedRooms extends React.Component {
//     componentDidMount() {
//         this.props.getRoomsToRC()
//     }
//
//     render() {
//         let rooms = this.props.rooms.map(room => {
//             return <RoomForFR key={room.id} room={room}/>
//         })
//         return (
//             <section className="featured-rooms">
//                 <Title title="featured rooms"/>
//                 <div className="featured-rooms-center">
//                     {this.props.isLoading ? <Loading/> : rooms}
//                 </div>
//             </section>
//         )
//     }
// }
//
// export default compose(connect(mapStateToProps, {getRoomsToRC}))
// (FeaturedRooms);

let mapStateToProps = (state) => {
    return {
        rooms: state.reducer.rooms,
        isLoading: state.reducer.isLoading
    }
}

const RoomContainer = (props) => {
//    console.log(props)


    if (props.isLoading) {
        return <Loading/>
    }
    return (
        <>
            <RoomFilter context={props.rooms}/>
            <RoomList rooms={props.rooms}/>
        </>
    )
}



export default compose(connect(mapStateToProps, {getRoomsToRC}))
(RoomContainer);