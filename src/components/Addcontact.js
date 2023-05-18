import React from "react";
import './App.css';

function Addcontact() {
  return (
    <div>
      <h3 className="Header2" > Add contact</h3>
      <form>
        <div className="form">
          <label>Name</label>
          <input type="text" 
          name="name" 
          placeholder="Name"></input>
        </div>
        <div className="form">
          <label>Email</label>
          <input type="email" 
          name="name" 
          placeholder="Email"></input>
        </div>
        <button className="ui button blue">ADD</button>
      </form>
    </div>
  );
}

export default Addcontact;
