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
        clientId="669939593405-eaev1uf1mr1at9ep30e85iijf6oich4b.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleLoginData}
        onFailure={responseGoogle}
        href="/main"
      />
    </div>
  );
};

export default Login;
