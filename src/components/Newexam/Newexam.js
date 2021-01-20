import React, { Component } from 'react';

import './Newexam.css'

class Newexam extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
         <div>   
      <h1 id="heading">NEW EXAM</h1>
      <div id="mainbuttons">
        <div className="newexambutton">SET TIME</div> 
        <div className="newexambutton">SET TIME</div> 
        <div className="newexambutton">SET TIME</div>
       
      </div>
      </div>
        )
    }
}

export default Newexam