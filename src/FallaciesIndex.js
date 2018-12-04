import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class FallaciesIndex extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div style={{border: 'solid black 1px'}}>
          <h4 style={{margin:'10px'}}> This is the Index <small>(get all)</small> component</h4>
          <Link to="/createNew/">Go to CreateNew Component</Link>

        </div>
      </React.Fragment>
    )
  }
}

export default FallaciesIndex



