import React from 'react'
import {Title} from "../Title/Title";
import {Loading} from "../Loading/Loading";
import {RoomForFR} from "./RoomForFR";
import {connect} from "react-redux";
import {compose} from "redux";
import {getFeaturedRooms} from "../../Reducers/FeaturedRoomsReducer";



let mapStateToProps = (state) => {
    return {
        rooms: state.featuredRoomsRed.rooms,
        isLoading: state.featuredRoomsRed.isLoading
    }
}

class FeaturedRooms extends React.Component {

    componentDidMount() {
        this.props.getFeaturedRooms()
    }

    render() {
       let rooms = this.props.rooms.map(room => {
            return <RoomForFR key={room.id} room={room}/>

        })

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

export default compose(connect(mapStateToProps, {getFeaturedRooms}))(FeaturedRooms);