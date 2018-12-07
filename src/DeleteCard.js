import React from 'react'
import { BrowserRouter as Router, browserHistory, withRouter, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig.js'



class DeleteCard extends React.Component{
  state = {
    isDeleted: false
  }
    handleDelete = event => {
      event.preventDefault()

      console.log('This is the thing we are looking for: ', this.props)
      const { id } = this.props
      const user = this.props.user

      alertUser = () => (
        alert('it worked')
      )
        

      return fetch(apiUrl + `/flash_cards/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        }
      }).then(()=>{
        this.setState({isDeleted: true})
        this.alertUser
        this.props.history.push('/flash_cards/') // the last slash is important!!!
      })
    }

    render(){
      if(this.state.isDeleted === true) {
        return <Redirect to='/flash_card_delete_from_Narnia' /> // made up path
      }

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
