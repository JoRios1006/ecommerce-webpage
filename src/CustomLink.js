import React from "react";

const CustomLink = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default CustomLink;
