import React, { Component } from 'react';

class ForwardArrow extends Component {
  render() {
    return (
      <a href="#" onClick={this.props.goToNextSlide}>
        <i className="fas fa-angle-double-right fa-2x" >
          <div className='arrowSpace'><h2 >forward</h2></div>
        </i>
      </a>
    );
  }
}

export default ForwardArrow;


