import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import {Title} from "../Title/Title";

export class Services extends React.Component {
    state = [
        {
            icon: <FaCocktail/>,
            title: "Free cocktails",
            description: "some text"
        },
        {
            icon: <FaHiking/>,
            title: "Endless hiking",
            description: "some text"
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free shuttle",
            description: "some text"
        },
        {
            icon: <FaBeer/>,
            title: "Strongest beer",
            description: "some text"
        }
    ]


    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}