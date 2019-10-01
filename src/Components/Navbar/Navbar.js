import React from 'react'
import logo from '/Images/logo.jpg'
import {FiAlignRight} from 'react-icons/fi'
import {NavLink} from "react-router-dom";
import "../App.css";

export class Navbar extends React.Component {

    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <NavLink to="/">
                            <img src={logo} alt="beach resort"/>
                        </NavLink>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FiAlignRight className="nav-icon"/>
                        </button>

                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/rooms">Rooms</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}