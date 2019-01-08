import React, { Component } from 'react';
import Spam from './Spam';


class Spamalot  extends Component {

  render() {
      let arrSpam = []
      for(let i =0; i < 500; i++){
        arrSpam.push(<Spam />)
      }

      return arrSpam
    }
}

export default Spamalot ;
