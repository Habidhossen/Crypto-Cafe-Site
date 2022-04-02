import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      style={{
        color: match ? "#7E22CE" : "",
        backgroundColor: match ? "#CCCCFF" : "",
        padding: match ? "6px 12px" : "",
        borderRadius: match ? "5px" : "",
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
