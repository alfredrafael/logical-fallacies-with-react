import React from 'react'
import UnauthenticatedHomeStyle from './UnauthenticatedHomeStyle.scss'
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'


class UnauthenticatedHome extends React.Component {
  render(){
    return(
      <section className="unauthenticatedHome">
        <Navbar>
          <Navbar.Header >
            <Navbar.Brand>
              <p> Dummy Text Here </p>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
              <NavItem eventKey={1} href="#">
        My frist link
              </NavItem>
              <NavItem eventKey={2} href="#">
        My Second Link
              </NavItem>
              <NavDropdown eventKey={3} title="See other links" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
        Link Right
              </NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <section className="left-and-right">
          <div className="halfs-container">
            <div className="left-half">
              <article>

                <h1>
                  <strong>What are logical fallacies</strong></h1>
                <p> A logical fallacy is a flaw in reasoning.
              Logical fallacies are like tricks or illusions of thought,
              and they are often very sneakily used by people to fool others. Do not be fooled! This website has been
              designed to help you identify and call out faulty logic, wherever it may raise its ugly, incoherent head...
              and to hear examples you can provide for us to see.
  
                  <br />
                  <br />
  
  
              Read the study materials (option on the top of this website) to learn about some logical fallacies, and
              (also on the top of this website) click to provide us with examples of these fallacies. Thank you!
  
                </p>


              </article>
            </div>
            <div className="right-half">
              <article>
                <h1>Right Half</h1>
                <p>Picture go here</p>
              </article>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default UnauthenticatedHome
