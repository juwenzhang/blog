import React from "react";

interface HomePagePropsType {
  children?: React.ReactNode;
}

const HomePage: React.FC<HomePagePropsType> 
= (props: HomePagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage;

