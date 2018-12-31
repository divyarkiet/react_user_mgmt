import React from "react";
import UserList from "./userlist";
import UserForm from "./userform";
import Header from "./header";
import "../css/userform.css";

class UserProfileContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      addUser: false,
      persons: {
        userName: '',
        userEmail: '',
        userGender: '',
        userPhone: '',
        userAddress: '',
      }
    }
  }

  changeHandler(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const { persons } = this.state;
    persons[name] = value;
    this.setState({ persons });
  }

  submitFormHandler = (event) => {
    const { persons } = this.state;
    event.preventDefault();
    this.setData();
    persons.userName = '';
    persons.userEmail = '';
    persons.userGender = '';
    persons.userPhone = '';
    persons.userAddress = '';
    this.setState({ persons });
    this.togglePanel();
  }

  getData(){
    return JSON.parse(localStorage.getItem('list')) || [];
  }

  setData(){
    const {persons} = this.state;
    const data = this.getData();
    data.push(persons);
    this.saveDatatoStorage(data);
  }

  saveDatatoStorage(data){
    localStorage.setItem('list', JSON.stringify(data));
  }

  togglePanel = () => {
    const { addUser } = this.state;
    this.setState({
      addUser: !addUser
    });
  }

  editUserHandler = (event, index) => {
    console.log('user is in edit mode.', index);
    const data = this.getData();
    const currentData = { ...this.state.persons, ...data[index] };
    // const editFormData = data[index];
    this.setState({
      addUser: true,
      persons: currentData,
    });
  }

  deleteUserHandler = (event, index) => {
    const data = this.getData();
    if(data.splice(index, 1)){      
      this.saveDatatoStorage(data);
      this.forceUpdate();      
    }
  }

  forceUpdate = () => {
    const { persons } = this.state;
    this.setState({ persons });
  }

  searchWithEnter = (e) => {
    if(e.which == 13){
      const searchValue = e.target.value.trim().toLowerCase();
      console.log('search value is: '+ searchValue);
      e.preventDefault();
      const data = this.getData();
      data.filter((jsonData, index)=> {
        console.log(jsonData.includes());
      });
      console.log(data);
    }
  }

  render() {
    const { addUser } = this.state;
    return (
      <div className="container">

        <Header 
          togglePanel={this.togglePanel} 
          isAddUser={addUser}
          searchWithEnter={(e) => this.searchWithEnter(e)}/>

        <div className="table-mid-row">
          {addUser ? 
            <UserForm 
              changeInput={ (event) => this.changeHandler(event) }
              submitForm={ this.submitFormHandler }
              {...this.state}
              /> :
            <UserList 
              data={this.getData()}
              editUser={this.editUserHandler}
              deleteUser={this.deleteUserHandler} />}          
        </div>
        
        <div className="table-bottom-row"></div>
      </div>
    );
  }
}

export default UserProfileContainer;
