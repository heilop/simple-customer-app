import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';

// const isRequired = value => (
//   !value && "Required field!"
// );

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
const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor = { name } >{ label }</label>
    <input { ...input } type = { !type ? "text" : type } />
      {
        meta.touched && meta.error && <span>{ meta.error }</span>
      }
    </div>
);

const CustomerEdit = ({ name, id, age}) => {
  return (
    <div>
      <h2>Customer Edition</h2>
      <h3>Name: { name } / ID: { id } / Age: { age }</h3>
      <form action="">
        <Field
          name = "name"
          component = { MyField }
          type = "text"
          label = "Name"
        ></Field>
        <Field
          name="id"
          component = { MyField }
          type = "text"
          validate = { isNumeric }
          label = "Id"
        ></Field>
        <Field
          name = "age"
          component = { MyField }
          type = "number"
          validate = { isNumeric }
          label = "Age"
        ></Field>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  age: PropTypes.number,
};

const CustomerEditForm = reduxForm({
  form: 'CustomerEdit',
  validate
})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);
