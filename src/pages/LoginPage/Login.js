import React from "react";
import "./login.css";

const FormOne = () => {
  return (
    <form className="form ">
      <h5 className="center white-text">welecome back</h5>
      <label>Wallet ID</label>
      <input placeholder="wallet id" />

      <label>Email</label>
      <input placeholder="Email" />
      <label>
        Your Wallet ID can be found at the bottom of any email we’ve ever sent
        you. Need a reminder? Send my Wallet ID
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default FormOne;
