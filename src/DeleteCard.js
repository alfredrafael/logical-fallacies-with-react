import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig.js'


class DeleteCard extends React.Component{
    handleDelete = event => {
      event.preventDefault()
      console.log(this.props)
      const { id } = this.props
      const user = this.props.user
      // const id = this.state.flash_cards.id

      return fetch(apiUrl + `/flash_cards/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        }

      })
      this.props.history.push('/flash_cards')
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

export default DeleteCard
