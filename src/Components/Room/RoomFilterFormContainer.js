import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import FormForRoomFilter from "./RoomFilter";
import {filterRooms} from "../../Reducers/RoomFilterFormReducer";


let mapStateToProps = (state) => {
    return {
        rooms: state.forformRed.rooms,
        types: state.forformRed.types,
        capacity: state.forformRed.capacity,
        price: state.forformRed.price,
        minPrice: state.forformRed.minPrice,
        maxPrice: state.forformRed.maxPrice,
        minSize: state.forformRed.minSize,
        maxSize: state.forformRed.maxSize,
        size: state.forformRed.size,
        breakfast: state.forformRed.breakfast,
        pets: state.forformRed.pets
    }
}

class RoomFilterFormContainer extends React.Component {

    render() {
        return <>

            <FormForRoomFilter rooms={this.props.rooms}
                               types={this.props.types}
                               capacity={this.props.capacity}
                               price={this.props.price}
                               minPrice={this.props.minPrice}
                               maxPrice={this.props.maxPrice}
                               minSize={this.props.minSize}
                               maxSize={this.props.maxSize}
                               size={this.props.size}
                               breakfast={this.props.breakfast}
                               pets={this.props.pets}
                               filterRooms={this.props.filterRooms}
            />
        </>
    }

}

export default compose(connect(mapStateToProps, { filterRooms }))(RoomFilterFormContainer);
