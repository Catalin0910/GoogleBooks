import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const history = useHistory();
  const handleLoginData = (event) => {
    history.push("/main");
  };

  return (
    <div>
      <GoogleLogin
        clientId="118361486356-m3aqa2v3ovfebk5fep84kbuo60dfatut.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleLoginData}
        onFailure={responseGoogle}
        href="http://localhost:3000/main"
      />
    </div>
  );
};

export default Login;
