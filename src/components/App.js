import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import NutTimKiem from './NutTimKiem';
import TableData from './TableData';
import TableFix from './TableFix';
import dl from './dulieu.json';
import { v4 as uuidv4 } from 'uuid'
import EditUser from './EditUser';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai : true,
      Data: [],
      searchText: '',
      EditUserStatus:false,
      editUserObject:{}
    }
  }
  
 
 componentWillMount() {
   // kiem tra xem co localstorage nao chua
   if(localStorage.getItem('userData') === null){
     localStorage.setItem('userData',JSON.parse(dl))
   }
   else {
     var temp = JSON.parse(localStorage.getItem('userData'));
     this.setState({
       Data:temp
     });
   }
 }
 
  
  SuThayDoi = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  editUser = (user) => {
    console.log(user)
    this.setState({
      editUserObject: user
    });
    console.log(this.state.editUserObject)
  }
  SuaEditUser = (dl) => {
    this.setState({
      EditUserStatus:!this.state.EditUserStatus
    });
  }
  TruyenDuLieu = (name,phone,Per) => {
    var item ={};
    item.id = uuidv4();;
    item.name= name;
    item.phone= phone;
    item.Per= Per;
    var items = this.state.Data;
    items.push(item);
    this.setState({
      Data:items
    });
    console.log(this.state.Data)
    localStorage.setItem('userData',JSON.stringify(items))
    
  }
  DeleteUserApp = (idUser) => {
    console.log(idUser)
    var tempData = this.state.Data;
    tempData = tempData.filter(item => item.id != idUser)
    this.setState({
      Data : tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData))
  }
  getUserEditInfoApp = (info) => {
    // console.log('thong tin da sua duoc la ' + info.name)
    this.state.Data.forEach((item) => {
      if(item.id === info.id){
        item.name = info.name
        item.phone = info.phone
        item.Per = info.Per
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.Data))

  }
  Connection = () => {
    this.setState({
      trangThai: !this.state.trangThai
    });
  }
  render() {  
   var ketqua =[];
   this.state.Data.forEach((item) => {
     if(item.name.indexOf(this.state.searchText) !== -1) {
       ketqua.push(item)
     }
   })
    return (
      <div>
        <Header></Header>
        <div className='search-form'>
          <div className="container">
            <div className="row">
              
              <NutTimKiem getUserEditInfoApp={(info) =>this.getUserEditInfoApp(info)} editUserObject={this.state.editUserObject} SuaEditUser={(dl) => this.SuaEditUser(dl)} EditUserStatus={this.state.EditUserStatus} SuThayDoi={(dl) => this.SuThayDoi(dl)}  connect={() => this.Connection()} state={this.state.trangThai}></NutTimKiem>
              <TableData  DeleteUserApp={(idUser) => this.DeleteUserApp(idUser)} SuaEditUser={(dl) => this.SuaEditUser(dl)} editFun={(user) =>this.editUser(user)} ketqua={ketqua} ></TableData>
              <TableFix TruyenDuLieu={(name,phone,Per) => this.TruyenDuLieu(name,phone,Per)} connect={() => this.Connection()} state={this.state.trangThai}></TableFix>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
}

export default App;
