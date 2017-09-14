import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import './App.css';

class Header extends Component {
  
  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <div><li><a href="/auth/google"><i className="fa fa-sign-in" aria-hidden="true"></i>  Login With Google</a></li></div>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }
  
  render() {
    return (
      <nav >
        <div className="nav-wrapper green accent-3">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo nav-left"
          >
          <i className="material-icons">group</i> Your Bright Ideas
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);