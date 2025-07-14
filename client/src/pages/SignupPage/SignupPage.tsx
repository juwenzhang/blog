import React from "react";

interface SignupPagePropsType {
  children?: React.ReactNode;
}

const SignupPage: React.FC<SignupPagePropsType> 
= (props: SignupPagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>Signup Page</h1>
    </div>
  )
}

export default SignupPage;

