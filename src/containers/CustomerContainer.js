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
import { deleteCustomer } from './../actions/deleteCustomer';

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

  handleSubmitSuccess = () => {
    this.props.history.goBack();
  }

  handleOnBack = () => {
    this.props.history.goBack();
  }

  handleOnDelete = id => {
    console.log('Deleting customer');
    this.props.deleteCustomer(id).then( v => {
      this.props.history.goBack();
    })
  }

  renderCustomerControl = (isEdit, isDelete) => {
    if (this.props.customer) {
      const CustomerControl = isEdit ? CustomerEdit : CustomerData;
        return  <CustomerControl
          { ...this.props.customer }
          onSubmit = { this.handleSubmit }
          onSubmitSuccess = { this.handleSubmitSuccess }
          onBack = { this.handleOnBack }
          isDeleteAllow = { !!isDelete }
          onDelete = { this.handleOnDelete }
        />
    }
    return null;
  }

  renderBody = () => (
    <Route
      path = "/customers/:id/edit"
      children = {
        ( { match: isEdit } ) => (
          <Route
            path = "/customers/:id/del"
            children = {
              ({ match: isDelete }) => (
                this.renderCustomerControl(isEdit, isDelete)
              )
            }
          />
        )
      }
    />
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
  deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerById(state, props)
});

export default withRouter(connect(mapStateToProps, {
  fetchCustomers,
  updateCustomer,
  deleteCustomer
})(CustomerContainer));
