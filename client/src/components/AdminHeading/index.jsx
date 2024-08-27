import React from "react";

const sizes = {
  "3xl": "text-[50px] font-extrabold",
  "2xl": "text-5xl font-bold",
  xl: "text-[40px] font-extrabold",
  "5xl": "text-[68px] font-extrabold",
  "4xl": "text-[64px] font-extrabold",
  s: "text-[28px] font-bold",
  md: "text-[32px] font-bold",
  "6xl": "text-[140px] font-bold",
  xs: "text-lg font-semibold",
  lg: "text-[35px] font-bold",
};

const AdminHeading = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-manrope ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { AdminHeading };
