import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const CustomerEdit = ({ name, id, age}) => {
  return (
    <div>
      <h2>Customer Edition</h2>
      <h3>Name: { name } / ID: { id } / Age: { age }</h3>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="id">ID</label>
          <Field name="id" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Field name="age" component="input" type="number"></Field>
        </div>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  age: PropTypes.number,
};

export default reduxForm({ form: 'CustomerEdit'})(CustomerEdit);
