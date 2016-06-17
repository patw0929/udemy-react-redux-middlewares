import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers([]);
  }

  renderUser(user) {
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Partner Studio</p>
        <a className="btn btn-primary">E-mail</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);
