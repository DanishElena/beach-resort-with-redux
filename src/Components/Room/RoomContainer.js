import React from 'react'
import {RoomList} from "./RoomList";
import {Loading} from "../Loading/Loading";
import {compose} from "redux";
import {connect} from "react-redux";
import {getRoomsToRC} from "../../Reducers/FeaturedRoomsReducer";
import RoomFilterFormContainer from "./RoomFilterFormContainer";

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

        return (
            <>
                <RoomFilterFormContainer />
                <div>
                    {this.props.isLoading ? <Loading/> : <RoomList rooms={this.props.rooms}/>}
                </div>
            </>
        )

    }
}

export default compose(connect(mapStateToProps, {getRoomsToRC}))(RoomContainer);