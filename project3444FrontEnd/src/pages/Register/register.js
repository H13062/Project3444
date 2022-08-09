import React, { useEffect, useState } from "react";
import "./register.css";

const Register = () => {
  const apiServerEndpoint = "/api/";

  // const [testedArray, setTestedArray] = useState(null);
  const [users, setUsers] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("https://localhost:7169" + apiServerEndpoint + "user", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  const onUserSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(username);
    console.log(password);
    fetch("https://localhost:7169" + apiServerEndpoint + "user", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        userName: username,
        password: password,
        commentId: 1,
      }),
    }).then(() => {
      console.log("new user added");
    });
  };

  return (
    <div className="login-page">
      {/**Header */}
      <div className="login-header">
        <h1>LOGIN</h1>
        <p>
          Log in to your account to make orders, get our restaurant updates, and
          more!
        </p>
      </div>
      {/**End header */}

      <div className="login-registration">
        {/* Left */}
        <div class="split left">
          <div class="centered">
            <div className="form">
              <div className="header">
                <h2>Login</h2>
              </div>
              <div className="form-body">
                <div className="form-body">
                  <div className="name">
                    <input
                      className="form__input"
                      type="text"
                      id="name"
                      required
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="username">
                    <input
                      className="form__input"
                      type="text"
                      id="username"
                      required
                      placeholder="Username"
                    />
                  </div>
                  <div className="email">
                    <input
                      type="email"
                      id="email"
                      className="form__input"
                      required
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="footer">
                  <button type="submit" class="btn">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End left */}
        <div className="dash"></div>
        {/* Right */}
        <div class="split right">
          <div class="centered">
            <div className="form">
              <div className="header">
                <h2>Register</h2>
              </div>
              <form onSubmit={onUserSubmitHandler}>
                <div className="form-body">
                  <div className="name">
                    <input
                      className="form__input"
                      type="text"
                      id="name"
                      required
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="username">
                    <input
                      className="form__input"
                      type="text"
                      required
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="email">
                    <input
                      type="email"
                      className="form__input"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="password">
                    <input
                      className="form__input"
                      type="password"
                      required
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="confirm-password">
                    <input
                      className="form__input"
                      type="password"
                      required
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div class="footer">
                  <button type="submit" class="btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/**End right */}
      </div>
    </div>
  );
};

export default Register;
