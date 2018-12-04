import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class FallaciesIndex extends React.Component {
    state = {
      flash_cards: []
    }

    async componentDidMount() {
      const response = await axios.get('http://localhost:4741/flash_cards')
      this.setState({flash_cards:response.data.flash_cards})
    }

    async handleDelete(event, id) {
      event.preventDefault()

      const response = axios.delete(`http://localhost:4741/flash_cards/${id}`)
      const updated_flash_cards = this.state.movies.filter(flash_card => flash_card.id !== id)
      this.setState({flash_cards: updated_flash_cards})
    }

    render() {
      const flash_cards_rows = this.state.flash_cards.map(flash_card => {
        const {id, fallacy_name, fallacy_example} = flash_card

        return (
          <tr key={id}>
            <td>
              <Link to={`/flash_cards/${id}`}>{ fallacy_name }</Link>
            </td>
            <td>{name}</td>
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


// http://localhost:4741/movies
