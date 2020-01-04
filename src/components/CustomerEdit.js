import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({ name, id, age}) => {
  return (
    <div>
      <h2>Customer Edition</h2>
      <h3>Name: { name } / ID: { id } / Age: { age }</h3>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  age: PropTypes.number,
};

export default CustomerEdit;
