import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from 'components/common/Layout/Layout.jsx';
import HomePage from 'components/pages/HomePage/HomePage.jsx';
import ListingsPage from 'components/pages/ListingsPage/ListingsPage.jsx';

export default class Application extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomePage} />
          <Route path="listings" component={ListingsPage} />
        </Route>
      </Router>
    );
  }
}
