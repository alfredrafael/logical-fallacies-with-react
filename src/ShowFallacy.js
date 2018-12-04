import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class ShowFallacy extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div style={{border: 'solid black 1px'}}>
          <h4 style={{margin:'10px'}}> This is the ShowFallacy Component!</h4>
          <Link to="/createNew/">Click to Create a new fallacy</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default ShowFallacy