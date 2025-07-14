import React from "react";

interface NotFoundPagePropsType {
  children?: React.ReactNode;
}

const NotFoundPage: React.FC<NotFoundPagePropsType> 
= (props: NotFoundPagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>NotFound Page</h1>
    </div>
  )
}

export default NotFoundPage;

