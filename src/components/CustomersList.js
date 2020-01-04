import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers, urlPath }) => {
  return (
    <div>
      <div className="customers-list">
        {
          customers.map( c =>
            <CustomerListItem
              key = { c.id }
              id =  { c.id }
              name = { c.name }
              editAction = { 'Edit' }
              delAction = { 'Delete' }
              urlPath = { urlPath }
            >
            </CustomerListItem>

          )
        }
      </div>
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomersList;
