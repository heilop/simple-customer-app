import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import { getCustomerById } from '../selectors/customers';

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame
          header = { `Customer ${this.props.id}` }
          body = { <p>Customer Data "{ this.props.customer.name }"</p> }

        >

        </AppFrame>
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  id: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerById(state, props)
});

export default connect(mapStateToProps, null)(CustomerContainer);
