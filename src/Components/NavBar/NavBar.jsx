import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText
} from 'reactstrap';
import iconPokeball from '../../resources/pokeball_PNG19.png'

export class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        };
    };

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>Pokédex</NavbarBrand>
                <div style={{ width: '2rem', height: '2rem' }} className='d-flex justify-content-center align-items-center'>
                    <img alt='Pokédex' src={iconPokeball} style={{ objectFit: 'contain' }} className='h-100 w-100'></img>
                </div>
            </Navbar>
        )
    }
}

export default NavBar
