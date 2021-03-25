import React, { useEffect, useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Store } from "../../store";
import { loginUser, setErrors } from "../../store/actions/authActions";
import classnames from "classnames";

const Login = (props) => {
  const { state, dispatch } = useContext(Store);
  const errors = state.error;
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  useEffect(() => {
    if (state.auth.isAuthenticated) history.push("/");
  }, [state, props]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(setErrors({ response: { data: {} } }));

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    loginUser(userData, history)(dispatch);
  };

  return (
    <div className="container">
      <div id="loginDiv" className="glass">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div className="col s8 offset-s2">
            <Link to="/" className="white-text btn-flat waves-effect">
              <i className="white-text material-icons left">
                keyboard_backspace
              </i>{" "}
              Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="white-text">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={onSubmit}>
              <div className="white-text input-field col s12">
                <input
                  ref={emailRef}
                  error={errors.incorrect}
                  name="email"
                  type="email"
                  className={classnames("", { invalid: errors.incorrect })}
                />

                <label htmlFor="email">Email</label>

                <span className="red-text">{errors.incorrect}</span>
              </div>

              <div className="input-field col s12">
                <input
                  ref={passwordRef}
                  error={errors.incorrect}
                  name="password"
                  type="password"
                  className={classnames("", { invalid: errors.incorrect })}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="col s12">
                <span className="red-text">{errors.message}</span>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
