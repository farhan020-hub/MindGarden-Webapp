import React from "react";

const sizeClasses = {
  txtManropeBold28WhiteA700: "font-bold font-manrope",
  txtManropeExtraBold68: "font-extrabold font-manrope",
  txtManropeBold28Black900: "font-bold font-manrope",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular18Black900: "font-normal font-poppins",
  txtPoppinsSemiBold18WhiteA700: "font-poppins font-semibold",
  txtManropeBold28: "font-bold font-manrope",
  txtManropeBold35: "font-bold font-manrope",
  txtManropeBold22: "font-bold font-manrope",
  txtManropeExtraBold68WhiteA700: "font-extrabold font-manrope",
  txtManropeBold54: "font-bold font-manrope",
  txtPoppinsSemiBold18Black900: "font-poppins font-semibold",
  txtManropeBold54WhiteA700: "font-bold font-manrope",
  txtManropeBold22WhiteA700: "font-bold font-manrope",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtManropeBold22Gray900: "font-bold font-manrope",
  txtManropeBold35Black900: "font-bold font-manrope",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
