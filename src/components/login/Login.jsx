import React, { useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";


const Login = ({ setislogedin }) => {
  const navigate = useNavigate();

  const [login, setlogin] = useState({
    email: "",
    pass: "",
  });
  const [err, seterr] = useState(false);
  const [userArr, setuserarr] = useState([]);

  function handleLogin(e) {
    e.preventDefault();
    // if (login.email === "" || login.pass == "") {
    //   seterr(true);
    // } else {
    //   seterr(false);
    //   setuserarr([...userArr, { email: login.email, pass: login.pass }]);
    //   console.log(userArr);
    //   localStorage.setItem("user", JSON.stringify(userArr));
    //   setislogedin(true);
    // }
    navigate('/search')
  }


  return (
    <div className='login'>
      <form className='signup' onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Enter Email'
          onChange={(e) => {
            setlogin({ ...login, email: e.target.value });
          }}
        />
        <input
          type='password'
          placeholder='Enter Password'
          onChange={(e) => {
            setlogin({ ...login, pass: e.target.value });
          }}
        />
        {err ? (
          <div style={{ color: "white" }}>Please fill both the fields</div>
        ) : null}
        <input type='submit' value={"Sign Up"} />
      </form>
    </div>
  );
};

export default Login;
