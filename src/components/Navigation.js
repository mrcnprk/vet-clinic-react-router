import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Naviagtion extends Component {
    state = {
        navOptions: [
            {
                title: "Cennik",
                path: '/cennik'
            },
            {
                title: "Ogłoszenia",
                path: '/ogloszenia'
            },
            {
                title: "Pracownicy",
                path: '/pracownicy'
            },
            {
                title: "Kontakt",
                path: '/'
            }
        ]
     }
    render() {
        const list = this.state.navOptions.map(option => <NavLink key={option.title} to={option.path}>{option.title}</NavLink>)
        return (
            <ul className="navList">
                {list}
            </ul>
         );
    }
}

export default Naviagtion;