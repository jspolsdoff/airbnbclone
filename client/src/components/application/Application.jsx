import React, { PropTypes } from 'react';
import { Router, browserHistory, IndexRoute } from 'react-router';
import HomePage from 'components/pages/HomePage/HomePage.jsx';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Router history={browserHistory}>
        <IndexRoute component={HomePage} />
      </Router>
    );
  }
}
