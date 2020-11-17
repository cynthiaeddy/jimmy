import React, { Component } from 'react';

class BackArrow extends Component {
  render() {
    return (

      <a href="#"  onClick={this.props.goToPrevSlide}>
        <i className="fas fa-angle-double-left fa-2x" >
          <div className='arrowSpace'><h2 >back</h2></div>
        </i>
      </a>

    )
  }
}

export default BackArrow;


