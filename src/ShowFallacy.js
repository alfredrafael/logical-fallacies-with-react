import React from 'react'
import { BrowserRouter as Router, withRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'


class FallacyShow extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      flash_card:{
        fallacy_name: '',
        fallacy_example: ''
      }
    }
  }

  async componentDidMount(){

    const id = this.props.match.params.id
    console.log(id)
    const response = await axios.get(`http://localhost:4741/flash_cards/${id}`)
    console.log(flash_card)

    const flash_card = response.data.flash_card
    console.log(flash_card)

    this.setState({
      flash_card: flash_card
    }),
    console.log(flash_card)
  }
  render() {
    return (
      <React.Fragment>
        <h4>Fallacy:</h4>
        <p> This is the name: {this.state.flash_card.fallacy_name}</p>
        <p> This is the example: {this.state.flash_card.fallacy_example}</p>

      </React.Fragment>
    )
  };

}

export default withRouter(FallacyShow)
