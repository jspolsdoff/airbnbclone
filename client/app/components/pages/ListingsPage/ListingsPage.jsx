import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

import ListingsState from './ListingsState.js';


@observer export default class ListingsPage extends Component {
  static propTypes = {
    listingsState: PropTypes.object.isRequired,
  }
  static defaultProps = {
    listingsState: ListingsState,
  }

  render() {
    return (
      <div>
        <h2>This is the listings index page </h2>
        <p>
          This is rendered from mobx state: {this.props.listingsState.get('hello')}
        </p>
      </div>
    );
  }
}
