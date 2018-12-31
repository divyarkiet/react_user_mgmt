import React from "react";

const UserList = (props) => {
  const {data, editUser, deleteUser} = props;
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((val, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.userName}</td>
                <td>{val.userEmail}</td>
                <td>{val.userGender}</td>
                <td>{val.userPhone}</td>
                <td>{val.userAddress}</td>
                <td><a href="#" onClick={(e) => editUser(e, index)}>Edit</a> | <a href="#" onClick={(e) => deleteUser(e, index)}>Delete</a></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default UserList;