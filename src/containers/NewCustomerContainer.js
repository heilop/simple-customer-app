import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NewCustomerContainer extends Component {

  handleOnBack = () => {
    this.props.history.goBack();
  }

  handleSubmit = () => {

  }

  handleSubmitSuccess = () => {

  }

  renderBody = () => {
    return <CustomerEdit
        onSubmit = { this.handleSubmit }
        onSubmitSucess = { this.handleSubmitSuccess }
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

};

export default withRouter(connect(null, null)(NewCustomerContainer));
