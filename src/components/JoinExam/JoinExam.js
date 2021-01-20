import React, { Component } from 'react';

import './JoinExam.css'

class JoinExam extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
         <div>   
      
      <div id="mainbuttons">
       <form >
 
 <input type="number" className="joinexambutton"  placeholder="ROLL NO."/><br/>

 <input type="text" className="joinexambutton"  placeholder="EXAM CODE" /><br/>
 <input type="submit" id="joinexamsubmit" value="Join Exam"/>
</form> 

      </div>
      </div>
        )
    }
}

export default JoinExam