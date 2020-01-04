import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

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

  renderBody = customers => (
    <div>
      <CustomersList
        customers = { customers }
        urlPath = { 'customer/' }
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

};

export default CustomersContainer;