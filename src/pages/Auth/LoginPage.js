import React from "react";
import LoginContainer from "../../components/Auth/LoginContainer";
import FooterComponent from "../../components/utils/FooterComponent";

const LoginPage = () => {
  return (
    <div className="page">
      <LoginContainer />
      <FooterComponent />
    </div>
  );
};

export default LoginPage;
