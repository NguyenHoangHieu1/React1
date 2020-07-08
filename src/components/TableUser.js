import React, { Component } from 'react';

class TableUser extends Component {
  SuaEditUser=()=>{
    this.props.ChangeEditUserStatus();
    this.props.editFunClick()
  }
  
  ChuyenDoi = () => {
    if(this.props.Per ==1) {
      return 'Admin'
    }
    else if (this.props.Per ==2) {
      return 'manager'
    }
    else {
      return 'Dân thường'
    }
  }
  DeleteButtonClick = (idUser) => {
    this.props.DeleteButtonClick(idUser)
  }
  render() {
   
    return (
      <tr>
        <td scope="row">{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.ChuyenDoi()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua"  onClick={() => this.SuaEditUser()}>Sửa</div>
            <div className="btn btn-danger xoa" onClick={(idUser) => this.DeleteButtonClick(this.props.id)}>Xóa</div>
          </div>
        </td>
      </tr>
    );
  }
}

export default TableUser;