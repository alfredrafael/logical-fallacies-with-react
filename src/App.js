import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

// authentication and custom components
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
// added components
import FallaciesIndex from './FallaciesIndex'
import CreateNew from './CreateNew'
import ShowFallacy from './ShowFallacy'
import HomeComponent from './HomeComponent'
import UnauthenticatedHome from './UnauthenticatedHome'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
        
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
        </main>

        <AuthenticatedRoute user={user} path='/flash_cards' render={() => (
          <FallaciesIndex user={user} />
        )} />

        <Route exact path="/createNew" render={()=>(
          <CreateNew user={user}/>
        )} />
        
        <Route exact path="/flash_cards/:id" component={ShowFallacy} />
        <Route exact path="/home" component={HomeComponent} />



      </React.Fragment>
    )
  }
}

export default App

//         <Route exact path="/unauthHome" component={UnauthenticatedHome} />

//        <Route exact path="/createNew" component={CreateNew} />

//        <Route exact path="/flash_cards" component={FallaciesIndex} />

//        <Route exact path="/flash_cards" render={()=>(
//        <FallaciesIndex user={user}/>
//        )} />
