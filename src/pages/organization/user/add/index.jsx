import React, { useRef, useState } from "react";
import "./style.css";

const AddUserPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [error, setError] = useState(false);
  let textValue = "";

  function usernameChangeHandler(e) {
    const value = e.target.value;
    if (value.includes(" ")) {
      setError(true);
    }
  }

  return (
    <>
      <input
        type="text"
        onChange={usernameChangeHandler}
        placeholder="Enter Username"
      />
      {error && <p className="error">Username cannot have space</p>}
      <input type="email" placeholder="Enter User email" />
    </>
  );
};

export default AddUserPage;
