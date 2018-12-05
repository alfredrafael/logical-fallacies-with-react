import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'


class FallaciesIndex extends React.Component {
    state = {
      flash_cards: []
    }

    async componentDidMount() {
      const response = await axios.get('http://localhost:4741/flash_cards')
      this.setState({flash_cards:response.data.flash_cards})
    }

    handleDelete = (user, id) => {
      console.log(user)
      return fetch(apiUrl + `/flash_cards/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        },
        body: JSON.stringify({id})
      }).then(alert('this is the .then, firing'))
    }


    render() {
      const flash_cards_rows = this.state.flash_cards.map(flash_card => {
        const {id, fallacy_name, fallacy_example} = flash_card

        return (
          <tr key={id}>
            <td>
              <Link to={`/flash_cards/${id}`}>{ fallacy_name }</Link>
            </td>
            <td>{fallacy_example}</td>
            <td>
              <Link to={`/flash_cards/${id}/edit`}>Edit</Link>
            </td>
            <td>
              <a href="#" onClick={ (event)=> {
                return this.handleDelete(event, id)
              }}>/ Delete </a>
            </td>
          </tr>
        )
      })

      return (
        <React.Fragment>
          <h1>Flash Card Index</h1>
          <h3 style={{display: 'inline-block'}}>
            <Link to="/createNew/">Click here to ADD an Example</Link>
            <br/>
            <Link to="/home"> Go back to Home Page</Link>

          </h3>
          <table>
            <tbody>

              {flash_cards_rows}

            </tbody>
          </table>

        </React.Fragment>
      )
    }

}

export default FallaciesIndex


// async handleDelete(event, id) {
//   event.preventDefault()
//   const response = axios.delete(`http://localhost:4741/flash_cards/${id}`)
//   const updated_flash_cards = this.state.flash_cards.filter(flash_card => flash_card.id !== id)
//   this.setState({flash_cards: updated_flash_cards})
// }