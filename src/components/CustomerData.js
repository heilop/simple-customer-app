import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({
  name, id, age, onBack, isDeleteAllow, onDelete
}) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Customer info</h2>
        <div><strong>Name<i>{ name }</i></strong></div>
        <div><strong>ID<i>{ id }</i></strong></div>
        <div><strong>Age<i>{ age }</i></strong></div>
      </div>
      <CustomersActions>
        <button onClick = { onBack }>Back</button>
        { isDeleteAllow && <button onClick = { () => onDelete(id) }>Delete</button> }
      </CustomersActions>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
  isDeleteAllow: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default CustomerData;
