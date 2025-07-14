import React from "react";

interface BlogDetailPagePropsType {
  children?: React.ReactNode;
}

const BlogDetailPage: React.FC<BlogDetailPagePropsType> 
= (props: BlogDetailPagePropsType) => {
  console.log(props);
  return (
    <div>
      <h1>Blog Detail Page</h1>
    </div>
  )
}

export default BlogDetailPage;

