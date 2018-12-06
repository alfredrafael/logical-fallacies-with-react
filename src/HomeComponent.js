import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class FallaciesIndex extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div style={{border: 'solid black 1px'}}>
          <h4 style={{margin:'10px'}}> This is the HOME component! </h4>
          <Link to="/flash_cards/">/ Go to see all </Link>
          <Link to="/editCard">/ Click here to see the edit card component /</Link>


        </div>
      </React.Fragment>
    )
  }
}

export default FallaciesIndex



