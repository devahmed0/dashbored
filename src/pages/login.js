import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="main_login">
        <div className="login">
          <h1 className="text_login">
            {" "}
            Login <i className="fa fa-american-sign-language-interpreting"> </i>
          </h1>
          <div className="group">
            <input
              className="input_login"
              type="email"
              name="email"
              required
              placeholder="Email"
            />
            <i className="fa fa-user" />
          </div>
          <div className="group">
            <input
              className="input_login"
              type="password"
              name="password"
              required
              autoComplete="on"
              placeholder="Password"
            />
            <i className="fa fa-lock" />
          </div>{" "}
          <button className="button_login">
            {" "}
            <Link to="/admin">
              {" "}
              <i className="fa fa-send" /> Login{" "}
            </Link>
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default Login;
