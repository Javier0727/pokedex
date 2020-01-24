import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hola: 'it works'
        }
    }

    componentDidMount() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        search: new Home(state)
    }
}

export default connect(mapStateToProps, null)(Home)