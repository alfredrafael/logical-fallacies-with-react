import React from 'react'
import { Link } from 'react-router-dom'
import './style/createNewStyle.scss'
import axios from 'axios'


class CreateNew extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div style={{border: 'solid black 1px'}}>
          <h4 style={{margin:'10px'}}> This is the CreateNew Component!</h4>
          <Link to="/fallaciesIndex/">Back to Index</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default CreateNew