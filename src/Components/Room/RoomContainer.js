import React from 'react'
import {RoomFilter} from "./RoomFilter";
import {RoomList} from "./RoomList";
import {Loading} from "../Loading/Loading";
import {RoomForFR} from "../FeaturedRooms/RoomForFR";
import {Title} from "../Title/Title";
import {compose} from "redux";
import {connect} from "react-redux";
import {getRoomsToRC} from "../../Reducers/FeaturedRoomsReducer";

// let mapStateToProps = (state) => {
//     return {
//         rooms: state.featuredRoomsReducer.rooms,
//         isLoading: state.featuredRoomsReducer.isLoading
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
        rooms: state.featuredRoomsRed.rooms,
        isLoading: state.featuredRoomsRed.isLoading
    }
}

class RoomContainer extends React.Component {

    componentDidMount() {
        this.props.getRoomsToRC()
    }

    render() {
        let rooms = this.props.rooms.map(room => {
            return <RoomList key={room.id} room={room}/>

        })

        return (
            <>
                <RoomFilter context={this.props.rooms}/>
                <div>
                    {this.props.isLoading ? <Loading/> : rooms}
                </div>
            </>
        )

    }
}

export default compose(connect(mapStateToProps, {getRoomsToRC}))(RoomContainer);