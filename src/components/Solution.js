import React, { Component } from 'react';
import Single from './Single';


class Solution  extends Component {

  hideWord(arrString){
   return arrString.map(i => {
      if(this.props.letters[i] === true){
        return i = i + " "
      }
      else{
        return  i = " _ "
      }
    })
  }

  render() {
      return <div>
                <div>{this.hideWord(Array.from(this.props.solution.word))}</div>
                <Single hideLeters={this.hideWord(Array.from(this.props.solution.word))} />
                {this.props.solution.hint}
            </div>
    }
}

export default Solution ;
