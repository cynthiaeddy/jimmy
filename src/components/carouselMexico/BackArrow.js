import React, { Component } from 'react';

class BackArrow extends Component {
  render() {
    return (
      <div className='backArrow' onClick={this.props.goToPrevSlide}>
        <i className='fas fa-angle-double-left fa-2x' aria-hidden='true'></i>
        <h2><div className='back'>back</div></h2>

      </div>
    );
  }
}

export default BackArrow;



