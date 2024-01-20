// display box, takes in prop color
// div element to display css box, style color based on prop
// event listener

import React, { Component } from 'react';

class ColorBox extends Component {
    
    render() {
        return (
            <div
                className='Box'
                style={{ backgroundColor: `#${this.props.color}`}}
            >

            </div>
        )
    }
}
