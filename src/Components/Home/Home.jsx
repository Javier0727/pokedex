import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: this.props.pokeList.then(r => r),
            pokeData: [],
            next: '',
            previus: ''
        }
    }

    componentDidMount() {
        this._setList()
    }

    _setList = async () => {
        // this.props.pokeList.then(r => this.setState({ list: r.results, next: r.next, previus: r.previus }))
        // this.props.pokeList.then(r => console.log(r.results))
        var pokeData = [];
        this.props.pokeList.then(r => {
            r.results.map(response => {
                // console.log(response.url)
                fetch(response.url)
                    .then(pokemon => pokemon.json())
                    .then(pokemonData => {
                        // console.log(pokemonData)
                        pokeData.push(pokemonData)
                        this.setState({ pokeData: pokeData })
                        // console.log(pokeData)
                    })
            })
        })
    }

    render() {
        return (
            <div>
                {this.props.pokeList !== null ? (
                    <>
                        <NavBar></NavBar>
                        <Form>
                            <FormGroup className='d-flex justify-content-end'>
                                <Input className='w-50 my-4 mx-2' type="text" id='Search' name="Search" placeholder="Search" />
                            </FormGroup>
                        </Form>
                        <div className='px-3'>
                            {this.state.pokeData.length !== 0 ? (
                                this.state.pokeData.map(r =>
                                    <Card key={r.name} data={r}></Card>
                                )
                            ) : (null)}
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

export default connect(mapStateToProps, null)(Home)