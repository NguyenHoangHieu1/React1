import React, { Component } from 'react';

class EditUser extends Component {
  // editUserObject
  constructor(props) {
    super(props);
    this.state = {
      id :this.props.editUserObject.id,
      name :this.props.editUserObject.name,
      phone :this.props.editUserObject.phone,
      Per :this.props.editUserObject.Per,
    }
  }
  
  isChange= (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
    console.log(this.state)
  }
  saveButton = () =>{
    var info = {}
    info.id =this.state.id
    info.name =this.state.name
    info.phone =this.state.phone
    info.Per =this.state.Per;
    this.props.getUserEditInfo(info)
    this.props.ChangeEditUserStatus()

  }
  render() {
    return (
      <div className="col-12">
      <div className="card bg-secondary">
        <form>
    <div className="card-header  text-center text-white">Sửa thông tin</div>
    <div className="card-body text-primary">
      <div className="form-group">
        <label className='text-white' >Tên User</label>
        <input onChange={(event) =>this.isChange(event)} defaultValue={this.props.editUserObject.name} name="name" type="text" className="form-control"  placeholder="User's name" />
      </div>
      <div className="form-group">
        <label className='text-white' >Số điện thoại</label>
        <input onChange={(event) =>this.isChange(event)} defaultValue={this.props.editUserObject.phone}  name="phone" type="text" className="form-control"  placeholder="User's Phone" />
      </div>
      <div className="form-group">
        <label className='text-white' >Phân quyền</label>
        <select onChange={(event) =>this.isChange(event)} defaultValue={this.props.editUserObject.Per}  name="Per" className="form-control" >
          <option value={0}>-Lựa chọn-</option>
          <option value={1}>Admin</option>
          <option value={2}>manager</option>
          <option value={3}>Dân thường</option>
        </select>
      </div>
      <div className="form-group  text-center ">
        <input  type='reset' onClick={() =>this.saveButton()}  className="btn btn-success text-center" value='Luu'/>
      </div>
    </div>
    </form>
  </div>
  </div>
    );
  }
}

export default EditUser;