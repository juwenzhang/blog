import React from "react";

interface ErrorPagePropsType {
  children?: React.ReactNode;
}

const ErrorPage: React.FC<ErrorPagePropsType> 
= (props: ErrorPagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>Error Page</h1>
    </div>
  )
}

export default ErrorPage;

