import { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

  function signupClickHandler() {
    const password = pwdRef.current.value;
    const email = emailRef.current.value;

    alert("Signup Successfully");
    navigate("/signin");
  }

  return (
    <Fragment>
      <input type="text" placeholder="Email" ref={emailRef} />
      <input type="password" placeholder="Password" ref={pwdRef} />
      <button onClick={signupClickHandler}>Sign up</button>
    </Fragment>
  );
}

export default Signup;
