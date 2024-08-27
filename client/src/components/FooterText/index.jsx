import React from "react";

const sizes = {
  xs: "text-lg font-normal",
  s: "text-2xl font-normal",
};

const FooterText = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { FooterText };
