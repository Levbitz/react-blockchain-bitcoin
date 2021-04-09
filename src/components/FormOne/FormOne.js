import React from "react";
import "./formOne.css";

const FormOne = () => {
  return (
    <form className="form">
      <label>Name</label>
      <input placeholder="Name" />

      <label>Email</label>
      <input placeholder="Email" />
      <label>password</label>
      <input placeholder="password" />
      <label>Confirm Password</label>
      <input placeholder="confirm password" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormOne;
