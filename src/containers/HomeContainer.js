import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions'

class HomeContainer extends Component {

  handleOnClick = () => {
    console.log('HandleOn Click');
    this.props.history.push('/customers');
  }

  render() {
    return (
      <div>
        <AppFrame
          header = 'Home'
          body = {
            <div>
              This is the initial screen
              <CustomersActions>
                <button onClick={ this.handleOnClick }>Customers list</button>
              </CustomersActions>
            </div>
          }
        ></AppFrame>
      </div>
    );
  }
}

export default withRouter(HomeContainer);
