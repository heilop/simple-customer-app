import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';
import { fetchCustomers } from './../actions/fetchCustomers';
import { getCustomerById } from '../selectors/customers';
import { updateCustomer } from './../actions/updateCustomer';

class CustomerContainer extends Component {

  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = values => {
    const { id } = values;
    return this.props.updateCustomer(id, values);
  };

  handleOnBack = () => {
    this.props.history.goBack();
  }

  renderBody = () => (
    <Route path = "/customers/:id/edit"  children = {
      ( { match } ) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
        return  <CustomerControl
          { ...this.props.customer }
          onSubmit = { this.handleSubmit }
          onBack = { this.handleOnBack }
        />
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
  customer: PropTypes.object,
  fetchCustomers: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerById(state, props)
});

export default withRouter(connect(mapStateToProps, {
  fetchCustomers,
  updateCustomer
})(CustomerContainer));
