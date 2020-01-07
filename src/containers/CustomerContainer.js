import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame
          header = { `Customer ${this.props.id}` }
          body = { <p>Customer Data</p> }
        >

        </AppFrame>
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default connect(null, null)(CustomerContainer);
