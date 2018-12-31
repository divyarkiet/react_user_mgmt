import React from "react";

const UserForm = (props) => {
  const { persons, changeInput, submitForm } = props;
  const { userName, userEmail, userPhone, userAddress, userGender } = persons;
  return (
    <form method="post" onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="userName">Name </label>
        <input type="text" className="form-control" name="userName" value={userName || ''}  onChange={(e) => changeInput(e)} />
      </div>
      
      <div className="form-group">
        <label htmlFor="userEmail">Email </label>
        <input type="email"className="form-control" name="userEmail" value={userEmail || ''} onChange={(e) => changeInput(e)} />
      </div>
      
      <div className="radio">
        <label className="radio-inline"><input type="radio" name="userGender" checked={userGender === 'M'} value="M" onChange={(e) => changeInput(e)} /> Male</label>
        <label className="radio-inline"><input type="radio" name="userGender" checked={userGender === 'F'} value="F" onChange={(e) => changeInput(e)} /> Female</label>
      </div>
      
      <div className="form-group">
        <label htmlFor="userPhone">Phone No:</label>
        <input type="number" className="form-control" name="userPhone" value={userPhone || ''} onChange={(e) => changeInput(e)} />
      </div>
      
      <div className="form-group">
        <label htmlFor="userAddress">Address:</label>
        <textarea className="form-control" name="userAddress" value={userAddress || ''} onChange={(e) => changeInput(e)} />
      </div>
      
      <div className="form-group">
        <button type="reset" className="btn btn-default btn-md reset">Reset</button>
        <button type="submit" className="btn btn-default btn-md">Submit</button>
      </div>
    </form>
  )
};

export default UserForm;