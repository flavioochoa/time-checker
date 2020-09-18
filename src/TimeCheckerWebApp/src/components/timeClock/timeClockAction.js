import React, { Component, Fragment } from 'react';
import { Card } from 'antd';

class TimeClockAction extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { title } = this.props;
        return(
            <Card
                onClick={this.handleClick}
                hoverable 
                style={{ width: 300, display:"flex", justifyContent:"center" }}>
                <h1>{ title }</h1>
            </Card>
        );
    }

    handleClick() {
        const { id, onClick } = this.props;
        if(onClick) {
            onClick(id);
        }
    }
}

export default TimeClockAction;