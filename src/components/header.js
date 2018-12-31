import React from "react";

const Header = (props) => {
  const { togglePanel, isAddUser, searchWithEnter } = props;
  return (
    !isAddUser ?
      <div className="table-top-row">
        <button type="button" className="btn btn-default btn-md add-user" onClick={togglePanel}>Add User</button>
        <input type="search" className="search" placeholder="Search" onKeyPress={(e) => searchWithEnter(e)}/>
      </div>
      :
      <div className="table-top-row"><button type="button" className="btn btn-link" onClick={togglePanel}>Listing</button></div>
  )
};

export default Header;