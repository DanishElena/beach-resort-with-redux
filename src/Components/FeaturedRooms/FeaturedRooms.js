import React from 'react'
import {Title} from "../Title/Title";
import {Loading} from "../Loading/Loading";
import {RoomForFR} from "./RoomForFR";
import {connect} from "react-redux";
import {compose} from "redux";
import {getRoomsToRC} from "../../Reducers/Reducer";



let mapStateToProps = (state) => {
    return {
        rooms: state.roomsRed.rooms,
        isLoading: state.roomsRed.isLoading
    }
}

class FeaturedRooms extends React.Component {

    componentDidMount() {
        this.props.getRoomsToRC()
    }

    render() {
       let rooms = this.props.rooms.map(room => {
            return <RoomForFR key={room.id} room={room}/>
        })
   //   if(this.props.rooms.rooms)
        console.log(this.props.rooms)
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {this.props.isLoading ? <Loading/> : rooms}
                </div>
            </section>
        )
    }
}

export default compose(connect(mapStateToProps, {getRoomsToRC}))
(FeaturedRooms);