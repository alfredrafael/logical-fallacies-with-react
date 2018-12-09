import React from 'react'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'
import DeleteCard from './DeleteCard.js'
import ShowFallacy from './ShowFallacy.js'
import { BrowserRouter as Router, browserHistory, withRouter, Route, Link } from 'react-router-dom'



class FallaciesIndex extends React.Component {
    state = {
      flash_cards: []
    }

    async componentDidMount() {
      const response = await axios.get('http://localhost:4741/flash_cards')
      this.setState({flash_cards:response.data.flash_cards})
    }

    render() {

      const flash_cards_rows = this.state.flash_cards.map(flash_card => {
        const {id, fallacy_name, fallacy_example} = flash_card
        const { user } = this.props

        return (

          <tr key={id}  style={{border: 'grey solid .5px'}}>
            <td>
              <Link to={`/flash_cards/${id}`}><h5> <strong>{fallacy_name }</strong></h5></Link>
            </td>
            <td>{fallacy_example}</td>
            <td>
            </td>
            <td>
              <DeleteCard id={id} user={user} component={DeleteCard}/>
            </td>
          </tr>
        )
      })

      return (
        <React.Fragment>
          <h5 style={{display: 'inline-block'}}>
            <Link to="/createNew/"> Click here to add an Example /</Link>
          </h5>
          <h5 style={{display: 'inline-block'}}>
            <Link to="/home">  Go back to Home Page</Link>
          </h5>
          <table>
            <tbody>

              {flash_cards_rows}

            </tbody>
          </table>

        </React.Fragment>
      )
    }
}

export default withRouter(FallaciesIndex)


// async handleDelete(event, id) {
//   event.preventDefault()
//   const response = axios.delete(`http://localhost:4741/flash_cards/${id}`)
//   const updated_flash_cards = this.state.flash_cards.filter(flash_card => flash_card.id !== id)
//   this.setState({flash_cards: updated_flash_cards})
// }
