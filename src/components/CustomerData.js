import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({ name, id, age}) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Customer info</h2>
        <div><strong>Name<i>{ name }</i></strong></div>
        <div><strong>ID<i>{ id }</i></strong></div>
        <div><strong>Age<i>{ age }</i></strong></div>
      </div>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default CustomerData;
