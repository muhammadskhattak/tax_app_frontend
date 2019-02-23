import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import MediaQuery from 'react-responsive';
import '../Stylesheets/Navbar.css';

export default class TaxAppNav extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <h1 className='pageHeader'><a className='homeLink' href='/home'>DEDUCTIVE</a></h1>
          <Navbar style={{opacity:0.90, fontSize:'20px', paddingTop:'3px'}} color="light" light expand="md">
            <MediaQuery minWidth={768}>
              <NavbarBrand href="/home"></NavbarBrand>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              <NavbarBrand href="/home">Project Deductive</NavbarBrand>
            </MediaQuery>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/team">Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/demo">Demo</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
