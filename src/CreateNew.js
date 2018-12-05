import React from 'react'
import { Link } from 'react-router-dom'
import './style/createNewStyle.scss'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'


class CreateNew extends React.Component {
  state = {
    flash_card:{
      fallacy_name: '',
      fallacy_example: ''
    },
    flashMessage: ''
  }
  
  handleChange = (event) => {

    const newCard = { ...this.state.flash_card, [event.target.name]: event.target.value }

    this.setState({
      flash_card: newCard
    })
  }

  // createCard = async (event) => {
  //   event.preventDefault()
  //   const flash_card = this.state.flash_card
  //   const response = await axios.post('http://localhost:4741/flash_cards', {flash_card})
  //     .then(alert('hello'))
  //   this.props.history.push('/flash_cards')
  //   console.log(response)
  // }

  createCard = (event, user) => {
    event.preventDefault()
    const flash_card = this.state.flash_card
    console.log(flash_card)
    return fetch(apiUrl + '/flash_cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      },

      body: JSON.stringify({
        
        flash_card: {
          fallacy_name: flash_card.fallacy_name,
          fallacy_example: flash_card.fallacy_example
        }
      })
    })
    // .then((response) => {
    //  this.props.history.push('/flash_cards')
    //   })
  }

  render() {

    const user = this.props.user

    return (
      <React.Fragment>
        <h1>New Logical Fallacy</h1>
        <p> {this.state.flashMessage}</p>
        <form>
          <input type='text' onChange={this.handleChange} value={this.state.flash_card.fallacy_name} name='fallacy_name' placeholder='Name your fallacy'/>
          <input type='text' onChange={this.handleChange} value={this.state.flash_card.fallacy_example} name='fallacy_example' placeholder='Share your example'/>
          <input type='submit' onClick={(event) => this.createCard(event, user)}/>
        </form>
        <Link to="/home">Go back to Home</Link>

      </React.Fragment>
    )
  }
}

export default CreateNew
