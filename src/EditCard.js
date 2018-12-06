import React from 'react'
import { BrowserRouter as Router, withRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig.js'



class EditCard extends React.Component {
  state = {
    flash_card:{
      fallacy_name: '',
      fallacy_name: ''
    }
  }

  handleChange = (event) => {

    const updatedCard = { ...this.state.flash_card, [event.target.name]: event.target.value }

    this.setState({
      flash_card: updatedCard
    })
  }


  submitEdit = async (event, user) => {
    event.preventDefault()
    // console.log(this.props)
    // console.log('the user is:', this.props.user)
    const { id } = this.props
    const {fallacy_name, fallacy_example} = this.state.flash_card

    return fetch(apiUrl + `/flash_cards/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      },
      body: JSON.stringify({
        flash_card: {
          fallacy_name: fallacy_name,
          fallacy_example: fallacy_example
        }
      })
    }).then(()=>{
      this.props.history.push('/home')
    })
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    const response = await axios.get(`http://localhost:4741/flash_cards/${id}`)
    const flash_card = response.data.flash_card

    this.setState({
      flash_card: flash_card
    })
  }

  render() {
    const { fallacy_example, fallacy_name } = this.state
    const { id, user } = this.props

    return (
      <React.Fragment>

        <h1>Edit Your Fallacy</h1>

        <form>
          <label htmlFor='fallacy_name'>Fallacy Name</label>

          <input id='fallacy_name' name='fallacy_name' type="text" value={fallacy_name} onChange={this.handleChange}/>

          <label htmlFor='fallacy_example'>Your Example</label>

          <input id='fallacy_example' name='fallacy_example' type="text" value={fallacy_example} onChange={this.handleChange} />

          <button type="submit" onClick={(event) => this.submitEdit(event, user)}> Update this card </button>
        </form>

      </React.Fragment>
    )
  };
}

export default withRouter(EditCard)

// alternative to handleChange
//console.log(event.target.value)
// const name = event.target.name
// const value = event.target.value
// const newMovie = Object.assign(this.state.movie)
// newMovie[name]= value
