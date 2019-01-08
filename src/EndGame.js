import React, { Component } from 'react';


class EndGame  extends Component {

  render() {
        return <div>
                    <div>{this.props.endGameText}</div>
                    <button onClick={this.props.restart}>Restart</button>
                </div>
    }
}

export default EndGame ;
