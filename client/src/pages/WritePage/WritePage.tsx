import React from "react";

interface WritePagePropsType {
  children?: React.ReactNode;
}

const WritePage: React.FC<WritePagePropsType> 
= (props: WritePagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>Write Page</h1>
    </div>
  )
}

export default WritePage;

