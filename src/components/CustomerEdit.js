import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';

const isRequired = value => (
  !value && "Required field!"
);

const isNumeric = value => (
  isNaN(Number(value)) && "This field should numeric"
);

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
          validate = { isRequired }
          label = "Name"
        ></Field>
        <Field
          name="id"
          component = { MyField }
          type = "text"
          validate = { [isRequired, isNumeric] }
          label = "Id"
        ></Field>
        <Field
          name = "age"
          component = { MyField }
          type = "number"
          validate = { [isRequired, isNumeric] }
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

const CustomerEditForm = reduxForm({ form: 'CustomerEdit'})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);
