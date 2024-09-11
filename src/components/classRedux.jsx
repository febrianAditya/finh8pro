// UserComponent.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserComponent extends Component {
  render() {
    const { user } = this.props; // Ambil state dari Redux props

    return (
      <div className="card">
        <h1>User Information</h1>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
        </div>
      </div>
    );
  }
}

// Ambil state dari Redux store dan map ke props
const mapStateToProps = (state) => ({
  user: state.user,
});

// Hubungkan komponen class dengan Redux store
export default connect(mapStateToProps)(UserComponent);
