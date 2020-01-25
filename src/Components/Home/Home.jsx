import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import { Container, Row, Col } from 'reactstrap';
import { setSearch, setPaginator } from '../../actions'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export class Home extends Component {
    componentDidMount() {
        this._getDataList()
    }

    _getDataList = async (url = this.props.api) => {
        let response = await fetch(url);
        let data = await response.json();
        this.props.setPaginator({
            data,
            search: false
        })
    }

    _setChangePage = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        this.props.setPaginator({
            data,
            search: false
        })
    }

    _search = async (value) => {
        if (value !== '') {
            try {
                let response = await fetch(`${this.props.api}/${value.toLowerCase().trim()}`);
                let data = await response.json();
                this.props.setSearch({
                    data,
                    search: true
                })
            } catch (error) {
                alert('No hay ningun Pokémon con ese nombre')
            }
        } else {
            this._getDataList()
        }
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

                            {this.props.search ? (
                                <Card search={this.props.search} key={this.props.pokeList.name} data={this.props.pokeList}></Card>
                            ) : (
                                    this.props.pokeList.results.map(r =>
                                        <Card search={this.props.search} key={r.name} data={r}></Card>
                                    )
                                )
                            }
                        </div>
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
    setPaginator, setSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)