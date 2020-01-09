import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { insertCustomer } from './../actions/insertCustomer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NewCustomerContainer extends Component {

  handleOnBack = () => {
    this.props.history.goBack();
  }

  handleSubmit = values => {
    this.props.insertCustomer(values);
  }

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  }

  renderBody = () => {
    const newCostumer = {
      "id": "",
      "name": "",
      "age": 0,
    }

    return <CustomerEdit
        { ...newCostumer }
        onSubmit = { this.handleSubmit }
        onSubmitSuccess = { this.handleOnSubmitSuccess }
        onBack = { this.handleOnBack }
      />
  }

  render() {
    return (
      <div>
        <AppFrame
          header = { `Add a New Customer` }
          body = { this.renderBody() }
        >
        </AppFrame>
      </div>
    );
  }
}

NewCustomerContainer.propTypes = {
  insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));
