import React from 'react'
import { BrowserRouter as Router, withRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'
import EditCard from './EditCard'
import apiUrl from '../src/apiConfig.js'


class FallacyShow extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      user: props.user,
      flash_card:{
        fallacy_name: '',
        fallacy_example: ''
      }
    }
  }

  async componentDidMount(){

    const id = this.props.match.params.id
    console.log(id)
    const response = await axios.get(apiUrl + `/flash_cards/${id}`)
    console.log(flash_card)

    const flash_card = response.data.flash_card
    //console.log(flash_card)
    this.setState({
      flash_card: flash_card
    })
    // console.log(flash_card)
  }
  render() {
    const {fallacy_name, fallacy_example} = this.state
    const id = this.props.match.params.id
    const {user} = this.props
    return (
      <React.Fragment>
        <div style={{height: '100vh'}}>
          <p> <h1><strong>{this.state.flash_card.fallacy_name}</strong></h1></p>
          <p> {this.state.flash_card.fallacy_example}</p>
          <Link to="/home">  Go back to Home Page</Link>
          <Link to="/flash_cards/"> Go to see all </Link>
          <EditCard id={id} user={user} component={EditCard}/>
        </div>
      </React.Fragment>
    )
  };
}

export default withRouter(FallacyShow)
