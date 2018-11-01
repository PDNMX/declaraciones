import React, {Component} from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


import Login from '../components/Login';


// var loggedIn= sessionStorage.getItem('logged');

class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}


  render() {
    const container = {paddingTop:50}
    return (
      <div>
        <Router>
        <Navbar color="black" dark expand="md" scrolling fixed="top">
          <NavbarBrand href="/">
              <strong>Navbar</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem active>
                  <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/login">Features</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="#">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Options</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>              
              <NavItem>
                  <NavLink to="/logout">Salir</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
        </Router>
        <Container style={container} className="text-center mt-5">
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
            </Switch>
          </Router>


        </Container>
      </div>
    );
  }
}

export default Header;
