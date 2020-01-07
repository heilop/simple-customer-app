import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { getCustomerById } from '../selectors/customers';

class CustomerContainer extends Component {

  renderBody = () => (
    <Route path = "/customers/:id/edit"  children = {
      ( { match } ) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
        return  <CustomerControl { ...this.props.customer } />
      }
    } />
  );

  render() {
    return (
      <div>
        <AppFrame
          header = { `Customer ${this.props.id}` }
          body = { this.renderBody() }
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
