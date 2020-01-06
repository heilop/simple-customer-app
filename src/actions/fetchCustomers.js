import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from './../constants';

const customers = [{
    'id': '10000000',
    'name': 'Juanito Perez',
    'age': 21
  },
  {
    'id': '15000000',
    'name': 'Otro',
    'age': 25
  },
  {
    'id': '30000000',
    'name': 'Aueliano Buendia',
    'age': 30
  },
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
