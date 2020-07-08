import React, { Component } from 'react';
import EditUser from './EditUser'
class NutTimKiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Temp : '',
      userObj : {}
    }
  }

  // editUserObject
  Chuyendoinut = () => {
    if(this.props.state ===false) {
     return <div onClick={() =>this.props.connect()} style={{marginBottom: '10px',cursor: 'pointer'}} className="btn btn-success btn-block">Open</div>

    }
    else {
      return  <div onClick={() =>this.props.connect()} style={{marginBottom: '10px',cursor: 'pointer'}} className="btn btn-danger btn-block">Close</div>

    }
    
  }
  getUserEditInfo = (info) =>{
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info)
  }
  isShowEditForm = () => {
    if(this.props.EditUserStatus === true) {
      return<EditUser getUserEditInfo={(info) => this.getUserEditInfo(info)} editUserObject={this.props.editUserObject} ChangeEditUserStatus = {() =>this.props.SuaEditUser()}></EditUser>
    }
    else {
      return false
    }
  }
  Ischange= (event) => {
    var giatri =(event.target.value)
    this.setState({
      Temp :giatri
    });
  }
 
  render() {
    return (
      
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {this.isShowEditForm()}
  <div className="form-group">
    <div className="btn-group">
      <input onChange={(event) => this.Ischange(event)} type="text" className="form-control"  placeholder="Nhập từ khóa" />
      <button onClick={(dl) => this.props.SuThayDoi(this.state.Temp)} className="btn-info">Tìm kiếm</button>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <hr/>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {this.Chuyendoinut()}
      </div>
</div>

    );
  }
}

export default NutTimKiem;