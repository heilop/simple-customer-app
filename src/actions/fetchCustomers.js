import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from './../constants';

const url = 'http://localhost:3001/customers';

const apiFecthCustomers = fetch(url).then(data => data.json());
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => apiFecthCustomers);
