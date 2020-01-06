import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

const customers = [
  {
    'id': '10000000',
    'name': 'Juanito Perez',
    'age': 21
  },
  {
    'id': '15000000',
    'name': 'Otro',
    'age': 25
  },
  {
    'id': '30000000',
    'name': 'Aueliano Buendia',
    'age': 30
  },
]

class CustomersContainer extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }


  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = customers => (
    <div>
      <CustomersList
        customers = { customers }
        urlPath = { 'customers/' }
      ></CustomersList>
      <CustomersActions>
        <button onClick = { this.handleAddNew }>New Customer</button>
      </CustomersActions>
    </div>
  );

  render() {
    return (
      <div>
        <AppFrame
          header = { 'Customers list' }
          body = { this.renderBody(customers) }
        >
        </AppFrame>
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, { fetchCustomers })(CustomersContainer)
);
