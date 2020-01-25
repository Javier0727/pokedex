import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'reactstrap';
export default class Card extends Component {

    render() {
        return (
            <div style={{ boxShadow: '0px 0px 1px 2px gray' }} className='d-flex justify-content-between my-2 p-2 align-items-center'>
                <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                    {/* {console.log(this.props.data)} */}
                    {/* <img alt={this.props.data.name} src={this.props.data.sprites.front_default}></img> */}
                    <div>
                        {this.props.data.name}
                    </div>
                </div>
                <div className='d-flex flex-column flex-lg-row justify-content-between'>
                    {/* {Object.values(this.props.data.types).map(r =>
                        <div className='py-1 px-5 mx-2 contain-type' key={`${this.props.data.name} ${r.type.name}`}>
                            {r.type.name}
                        </div>
                    )} */}
                </div>

            </div>
        )
    }
}
