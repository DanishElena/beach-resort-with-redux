import React from 'react'
import {Title} from "../Title/Title";


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export const RoomFilter = (props) => {

    let types = getUnique(props.rooms, 'type')


    types = ['all', ...types];
    types = types.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
        }
    )
    let people =  getUnique(props.rooms, 'capacity')
    people =  people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    let maxPrice = Math.max(props.rooms.map(item => item.price))
    let maxSize = Math.max(props.rooms.map(item => item.size))
    let minPrice = 0;
    let minSize = 0;

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">

                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type"
                            value={props.rooms.type}
                            className="form-control"
                            // onChange={handleChange}
                        >
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity"
                            value={props.rooms.capacity}
                            className="form-control"
                            onChange={props.rooms.handleChange}>
                        {people}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">room price ${props.rooms.price}</label>
                    <input type="range"
                           name="price"
                           min = {minPrice}
                           max={maxPrice}
                           id="price"
                           value={props.rooms.price}
                         //  onChange={handleChange}
                           className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number"
                               name="minSize"
                               id="size"
                               value={minSize}
                             //  onChange={handleChange}
                               className="size-input"/>
                        <input type="number"
                               name="maxSize"
                               id="size1"
                               value={maxSize}
                            //  onChange={handleChange}
                               className="size-input"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                               name="breakfast"
                               id="breakfast"
                               checked={props.rooms.breakfast}
                             //  onChange={handleChange}
                            />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                               name="pets"
                               id="pets"
                               checked={props.rooms.pets}
                        //       onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}