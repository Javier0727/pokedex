import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'reactstrap';
export default class Card extends Component {

    render() {
        return (
            <div>
                {this.props.data.name}
                {/* {this.props.data.types.map(r => console.log(r))} */}
                {console.log(typeof this.props.data.types)}
            </div>
        )
    }
}
