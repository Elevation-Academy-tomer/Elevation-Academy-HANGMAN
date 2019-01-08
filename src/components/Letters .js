import React, { Component } from 'react';
import Single from './Single';

class Letters  extends Component {

  lineHide(arrString){
    return arrString.map(i => {
       if(this.props.letters[i] === true){
         return <Single  selectLetter={this.props.selectLetter} className={"letters"} key={i} letter={i} />
       }
       else{
         return  <Single selectLetter={this.props.selectLetter} className={""} key={i} letter={i} />
       }
     })
   }
 
 
   render() {
       return this.lineHide(Object.keys(this.props.letters))
     }
 }
 
export default Letters ;
