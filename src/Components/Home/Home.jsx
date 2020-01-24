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
        console.log(this.props)
        this._getPokeData()
    }

    _getPokeData = () => {
        fetch(this.props.api)
            .then(response => response.json())
            .then(r => {
                var data = r.results.map(res => res)
            })
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                {this.props.search}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(Home)