import React, { Component } from 'react';

class BackArrow extends Component {
  render() {
    return (
      <a href="#"  onClick={this.props.goToPrevSlide}>
          <div className='arrowSpace backArrow'><h2 ><span>&lt;&lt; </span>back</h2></div>
        </a>

    )
  }
}

export default BackArrow;


