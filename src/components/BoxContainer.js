// Parent container component
// Default Props: Lost of colors, number of boxes
// Send color to color boxes as prop
// Import color box and helper functions
// State: color contains array of available colors
// method to generate new color
// setState method to update to new color

import React, { Component } from 'react';
import ColorBox from './ColorBox';
import '../Box.css'
import { colors } from '../helpers';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 16,
        allColors: colors
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes}).map(
            () => <ColorBox colors={this.props.allColors}/>
        );

        return(
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;



