import React from "react";

const sizes = {
  s: "text-[28px] font-bold",
  md: "text-[35px] font-bold",
  xs: "text-lg font-semibold",
  lg: "text-[68px] font-extrabold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
