import React from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/AppBanner.css';

export default class AppBanner extends React.Component {

    render() {
        return (
          <div className="AppBanner">
            <div className="AppBanner-header">
              <img src={logo} className="AppBanner-logo" alt="logo" />
              <h1 className="AppBanner-title">Welcome to React Todo List Application</h1>
            </div>
          </div>
        );
    }
}
