import React, { Component } from 'react';
export default class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        if (!this.props.search) {
            this._getPokeData()
        }
    }
    _getPokeData = () => {
        var pokeData = [];
        fetch(this.props.data.url)
            .then(response => response.json())
            .then(r => {
                pokeData.push(r)
                this.setState({
                    data: pokeData
                })
            })
    }
    render() {
        return (
            this.state.data.length !== 0 ? (
                <div style={{ boxShadow: '0px 0px 1px 2px gray' }} className='d-flex justify-content-between my-2 p-2 align-items-center'>
                    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                        {this.props.search ? (
                            <>
                                <img alt={this.props.data.name} src={this.props.data.sprites.front_default}></img>
                                <div>
                                    {this.props.data.name}
                                </div>
                            </>
                        ) : (
                                <>
                                    <img alt={this.state.data[0].name} src={this.state.data[0].sprites.front_default}></img>
                                    <div>
                                        {this.state.data[0].name}
                                    </div>
                                </>
                            )}

                    </div>
                    <div className='d-flex flex-column flex-lg-row justify-content-between'>
                        {this.props.search ? (
                            Object.values(this.props.data.types).map(r =>
                                <div className='py-1 px-5 mx-2 contain-type' key={`${this.props.data.name} ${r.type.name}`}>
                                    {r.type.name}
                                </div>
                            )
                        ) : (
                                Object.values(this.state.data[0].types).map(r =>
                                    <div className='py-1 px-5 mx-2 contain-type' key={`${this.props.data.name} ${r.type.name}`}>
                                        {r.type.name}
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            ) : (null)
        )
    }
}
