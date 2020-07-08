import React, { Component } from 'react';
import dl from './dulieu.json'
import TableUser from './TableUser';
class TableData extends Component {
  DeleteButtonClick = (idUser) => {
    this.props.DeleteUserApp(idUser)
  }
  DuLieuNguoiDung = () => 
    this.props.ketqua.map((value,key) => {
      return <TableUser DeleteButtonClick={(idUser) => this.DeleteButtonClick(idUser)} ChangeEditUserStatus = {(dl) =>this.props.SuaEditUser(value)} SuaEditUser={(dl) =>this.props.SuaEditUser(value)} editFunClick={(user) =>this.props.editFun(value)} key={key} id={key +1} name={value.name} phone={value.phone} Per={value.Per}></TableUser>
      
    })
  //this.props.editFun()
  render() {
    return (
      <div className="col">
  <table className="table table-striped table-hover table-inverse ">
    <thead>
      <tr>
        <th>STT</th>
        <th>tên</th>
        <th>SDT</th>
        <th>Quyền</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {this.DuLieuNguoiDung()}
      
      
       
    </tbody>
  </table>
</div>

    );
  }
}

export default TableData;