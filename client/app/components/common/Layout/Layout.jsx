import React, { PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              LandBnB
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Text>
            <Link to="/">Home</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/listings">Listings</Link>
          </Navbar.Text>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
