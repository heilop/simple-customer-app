import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';
import CustomersActions from './../components/CustomersActions';
import { Prompt } from 'react-router-dom';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../constants/permissions';

const isNumeric = value => (
  isNaN(Number(value)) && "This field should numeric"
);

const validate = values => {
  const error = {}
  if (!values.name) {
    error.name = "Name is a required field!";
  }

  if (!values.id) {
    error.id = "ID is a required field!";
  }
  return error;
}

const toNumber = value => value && Number(value);

const onlyGrow = (value, previousValue, values) =>
  value &&
  (!previousValue ? value : (value > previousValue ? value : previousValue));

class CustomerEdit extends Component {

  componentDidMount = () => {
    if (this.txt) {
      this.txt.focus();
    }
  }

  renderField = ({ input, meta, type, label, name, withFocus }) => (
    <div>
      <label htmlFor = { name } >{ label }</label>
      <input
        { ...input }
        type = { !type ? "text" : type }
        ref = { withFocus && (txt => this.txt = txt) }
      />
        {
          meta.touched && meta.error && <span>{ meta.error }</span>
        }
    </div>
  );


  render() {
    const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
    return (
      <div>
        <h2>Customer Edition</h2>
        <form onSubmit = { handleSubmit }>
          <Field
            withFocus
            name = "name"
            component = { this.renderField }
            type = "text"
            label = "Name"
          ></Field>
          <Field
            name="id"
            component = { this.renderField }
            type = "text"
            validate = { isNumeric }
            label = "Id"
          ></Field>
          <Field
            name = "age"
            component = { this.renderField }
            type = "number"
            validate = { isNumeric }
            label = "Age"
            parse = { toNumber }
            normalize = { onlyGrow }
          ></Field>
          <CustomersActions>
            <button type = "submit" disabled = { pristine || submitting }>
              Save
            </button>
            <button
              type = "button"
              disabled = { submitting }
              onClick = { onBack }
            >Cancel
            </button>
          </CustomersActions>
          <Prompt
            when = { !pristine && !submitSucceeded }
            message = "Unsaved data will be lost!"
          >
          </Prompt>
        </form>
      </div>
    );
  }
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({
  form: 'CustomerEdit',
  validate
})(CustomerEdit);

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));
