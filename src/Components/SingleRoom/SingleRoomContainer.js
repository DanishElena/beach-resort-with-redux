import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";

import {SingleRoom} from "./SingleRoom";
import {withRouter} from "react-router-dom";
import {getRoomsToSR} from "../../Reducers/SingleRoomsReducer";

let mapStateToProps = (state) => {
    return {
        rooms: state.singleRoomsRed.rooms,

    }
}

class SingleRoomContainer extends React.Component {

    refreshSRC() {
        let slug = this.props.match.params.slug;
        this.props.getRoomsToSR(slug);
    }

    componentDidMount() {
        this.refreshSRC()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.slug!==prevProps.match.params.slug) {
            this.refreshSRC()
        }
    }

    render() {
        return <>
            <SingleRoom rooms={this.props.rooms} getRoomsToSR={this.props.getRoomsToSR}/>
        </>
    }
}

export default compose(connect(mapStateToProps, {getRoomsToSR}), withRouter)(SingleRoomContainer);






