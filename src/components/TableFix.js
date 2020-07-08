import React, { Component } from 'react';
import dl from './dulieu.json'
class TableFix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name:'',
      phone: '',
      Per: ''
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
    
    

  }
  Hienra = () => {
    if(this.props.state ===true){

      return <div className="card">
        <form>
    <div className="card-header text-center">Thêm mới</div>
    <div className="card-body text-primary">
      <div className="form-group">
        <label >Tên User</label>
        <input onChange={(event) =>this.isChange(event)} name="name" type="text" className="form-control"  placeholder="User's name" />
      </div>
      <div className="form-group">
        <label >Số điện thoại</label>
        <input onChange={(event) =>this.isChange(event)}  name="phone" type="text" className="form-control"  placeholder="User's Phone" />
      </div>
      <div className="form-group">
        <label >Phân quyền</label>
        <select onChange={(event) =>this.isChange(event)}  name="Per" className="form-control" >
          <option value={0}>-Lựa chọn-</option>
          <option value={1}>Admin</option>
          <option value={2}>manager</option>
          <option value={3}>Dân thường</option>
        </select>
      </div>
      <div className="form-group">
        <input type='reset' onClick={(name,phone,per) => this.props.TruyenDuLieu(this.state.name,this.state.phone,this.state.Per)} className="btn btn-danger text-center" value='Click to create'/>
      </div>
    </div>
    </form>
  </div>
    }
    else {
      return false
    }
  }
  render() {
    return (
      <div className="col-0">
        {this.Hienra()}
        </div>


    );
  }
}

export default TableFix;