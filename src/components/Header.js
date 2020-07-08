import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
            <h1 className="display-3 text-center">Quyền quản lí user bằng react js</h1>
            <p className="lead text-center">với dữ liệu json</p>
            <hr className="my-2" />
        </div>

    );
  }
}

export default Header;