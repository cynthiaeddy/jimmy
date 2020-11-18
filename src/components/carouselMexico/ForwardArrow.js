import React, { Component } from 'react';

class ForwardArrow extends Component {
  render() {
    return (
      <a href="#" onClick={this.props.goToNextSlide}>
         <div className='arrowSpace'><h2 >forward <span>&gt;&gt;</span></h2></div>


      </a>
    );
  }
}

export default ForwardArrow;



