import React from "react";

interface LoginPagePropsType {
  children?: React.ReactNode;
}

const LoginPage: React.FC<LoginPagePropsType> 
= (props: LoginPagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  )
}

export default LoginPage;

