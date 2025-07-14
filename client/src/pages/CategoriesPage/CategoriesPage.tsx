import React from "react";

interface CategoriesPagePropsType {
  children?: React.ReactNode;
}

const CategoriesPage: React.FC<CategoriesPagePropsType> 
= (props: CategoriesPagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>Categories Page</h1>
    </div>
  )
}

export default CategoriesPage;

