import React from 'react'
import { BrowserRouter as Router, browserHistory, withRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig.js'


class DeleteCard extends React.Component{
    handleDelete = event => {
      event.preventDefault()
      console.log('This is the thing we are looking for: ', this.props)
      const { id } = this.props
      const user = this.props.user

      return fetch(apiUrl + `/flash_cards/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        }
      }).then(()=>{
        this.props.history.push('/home')
      })
    }

    render(){

      return (
        <React.Fragment>
          <form onSubmit={this.handleDelete}>
            <button type="submit">Delete</button>
          </form>
        </React.Fragment>
      )
    }
}

export default withRouter(DeleteCard)

// then(this.props.history.push('/home'))
