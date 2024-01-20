// display box, takes in prop color
// div element to display css box, style color based on prop
// event listener

import React, { Component } from 'react';
import '../Box.css';
import { choice, colors } from '../helpers';

class ColorBox extends Component {

    constructor(props){
        super(props);
        this.state = {color: choice(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }

    chooseColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color)

        this.setState({ color: newColor });
    };

    handleClick() {
        this.chooseColor()
    };
    
    render() {
        return (
            <div
                className='Box'
                style={{ backgroundColor: `#${this.state.color}` }}
                onClick={this.handleClick}
            >

            </div>
        )
    }
};

export default ColorBox;
