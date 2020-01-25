import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import { Container, Row, Col } from 'reactstrap';
import { setSearch, setPaginator } from '../../actions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export class Home extends Component {
    componentDidMount() {
        // this._setList()
        this._getDataList()
    }

    _setList = async () => {
        var pokeData = [];
        this.props.pokeList.then(r => {
            this.setState({
                next: r.next, previus: r.previus
            }, () => {
                r.results.map(response => {
                    fetch(response.url)
                        .then(pokemon => pokemon.json())
                        .then(pokemonData => {
                            pokeData.push(pokemonData)
                            this.setState({ pokeData: pokeData, })
                        })
                })
            })
        })
    }
    // _setList = async () => {
    //     var pokeData = [];
    //     this.props.pokeList.then(r => {
    //         this.setState({
    //             next: r.next, previus: r.previus
    //         }, () => {
    //             r.results.map(response => {
    //                 fetch(response.url)
    //                     .then(pokemon => pokemon.json())
    //                     .then(pokemonData => {
    //                         pokeData.push(pokemonData)
    //                         this.setState({ pokeData: pokeData, })
    //                     })
    //             })
    //         })
    //     })
    // }

    // _getDataList = async (url) => {
    //     let response = await fetch(url);
    //     let data = await response.json();
    //     return data
    // }
    _getDataList = async (url = this.props.api) => {
        let response = await fetch(url);
        let data = await response.json();
        this.props.setPaginator({
            data
        })
    }

    _setChangePage = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        this.props.setPaginator({
            data
        })
    }

    // _search = (search) => {
    //     console.log(search)
    // }

    _search = (value) => {
        fetch()
        this.props.setSearch({
            value
        })
    }

    render() {
        return (
            <div>
                {this.props.pokeList !== null ? (
                    <>
                        <NavBar></NavBar>
                        <FormGroup className='d-flex justify-content-end'>
                            <Input onKeyDown={e => e.keyCode === 13 ? this._search(e.target.value) : null} className='w-50 my-4 mx-2' type="text" name="Search" placeholder="Search" />
                        </FormGroup>
                        <div className='px-3'>
                            {this.props.pokeList.results.map(r =>
                                <Card key={r.name} data={r}></Card>
                            )}
                        </div>
                        {console.log(this.props.pokeList)}
                        {/* {this.props.pokeList !== null ? (
                                this.props.pokeList.map(r =>
                                    <Card key={r.name} data={r}></Card>
                            )
                        ): (null)} */}
                        {/* {this.props.pokeList.results.map(r =>
                            <Card key={r.name} data={r}></Card>
                        )} */}

                        {/* {this.state.pokeData.length !== 0 ? (
                                this.state.pokeData.map(r =>
                                    <Card key={r.name} data={r}></Card>
                                )
                            ) : (null)} */}
                        <div className='my-4 d-flex justify-content-end align-items-center px-3'>
                            <Button disabled={this.props.pokeList.previous != null ? false : true} color='primary' onClick={_ => this._setChangePage(this.props.pokeList.previous)}>
                                Previus
                            </Button>
                            <Button disabled={this.props.pokeList.next != null ? false : true} className='ml-2' color='primary' onClick={_ => this._setChangePage(this.props.pokeList.next)}>
                                Next
                            </Button>
                        </div>
                    </>
                ) : (null)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {
    setPaginator
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)