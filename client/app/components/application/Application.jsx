import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import HomePage from 'components/pages/HomePage/HomePage.jsx';

export default class Application extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
      </Router>
    );
  }
}
