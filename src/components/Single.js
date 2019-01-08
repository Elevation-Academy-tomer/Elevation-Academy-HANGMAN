import React, { Component } from 'react';



class Single  extends Component {

  getLetter = () =>{
    this.props.selectLetter(this.props.letter)
  }

  render() {
      return <span onClick={this.getLetter} className={this.props.className}> {this.props.letter} </span>
    }
}


export default Single ;
