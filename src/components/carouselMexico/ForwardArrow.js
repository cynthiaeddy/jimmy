import React, { Component } from 'react';

class ForwardArrow extends Component {
  render() {
    return (
      <div className='forwardArrow' onClick={this.props.goToNextSlide}>
         <h2><div className='forward'>forward</div></h2>
      <i className='fas fa-angle-double-right fa-2x' aria-hidden='true'></i>
    </div>
    );
  }
}

export default ForwardArrow;


