import React, { Component } from "react"
import { connect } from "react-redux";

export const accessControl = permissiondRequired => WrapperComponent => {
  const SecuredControl = class extends Component {
    render() {
      const { permissions } = this.props.user;
      const isAllow = permissiondRequired.every(
        perm => permissions.indexOf(perm) >= 0
      );

      if (!isAllow) {
        return <div><i>Permission denied!</i></div>
      }
      return <WrapperComponent { ...this.props } />;
    }
  }

  return connect(state => ({ user: state.user }))(SecuredControl);
};


