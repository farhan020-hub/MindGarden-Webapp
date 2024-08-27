import React from "react";

import { Button, Img, Line, Text, Heading } from "components";
import { useNavigate } from "react-router-dom";


const AboutUsHero = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[55px] items-start justify-start w-[96%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1596px] w-full">
          <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
          <Img src="images/img_path28.svg" alt="pathtwentyeight" className="h-[50px] w-[50px]" />
              <Heading as="h1">MindGarden</Heading>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[50px] items-start justify-start w-auto sm:w-full ">
              <Text
                className="text-lg text-white-A700 w-auto cursor-pointer"
                size="txtPoppinsSemiBold18WhiteA700"
                onClick={() => navigate("/")}
              >
                {props?.hometext}
              </Text>
              <Text
                className="text-lg text-white-A700 w-auto cursor-pointer"
                size="txtPoppinsRegular18WhiteA700"
                onClick={() => navigate("/aboutus")}
              >
                {props?.abouttext}
              </Text>
              <Text
                className="text-lg text-white-A700 w-auto cursor-pointer"
                size="txtPoppinsRegular18WhiteA700"
                onClick={() => navigate("/blog")}
              >
                {props?.blogtext}
              </Text>
              <Text
                className="text-lg text-white-A700 w-auto cursor-pointer"
                size="txtPoppinsRegular18WhiteA700"
                onClick={() => navigate("/userresources")}
              >
                {props?.resourcestext}
              </Text>
              <Text
                className="text-lg text-white-A700 w-auto cursor-pointer"
                size="txtPoppinsRegular18WhiteA700"
                onClick={() => navigate("/communityforum")}
              >
                {props?.communitytext}
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold font-manrope leading-[normal] min-w-[221px] text-[22px] text-center sm:text-lg md:text-xl cursor-pointer"
              shape="round"
              color="deep_orange_400"
              size="sm"
              variant="fill"
              onClick={() => navigate("/contactus")}
            >
              {props?.contactusbutton}
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Line className="bg-white-A700 h-[328px] md:h-[5px] mb-[146px] md:mt-0 mt-[30px] w-[5px] md:w-full" />
            <div className="h-[504px] relative w-[95%] md:w-full">
              <Img
                className="absolute h-[504px] inset-y-[0] my-auto object-cover right-[0]"
                src="images/img_vector2.png"
                alt="vectorTwo"
              />
              <div className="absolute flex flex-col items-start justify-start left-[0] top-[16%] w-auto">
                <Text
                  className="md:text-5xl text-[68px] text-white-A700 w-auto"
                  size="txtManropeExtraBold68WhiteA700"
                >
                  {props?.aboutustext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsHero.defaultProps = {
  hometext: "Home",
  abouttext: "About",
  blogtext: "Blogs",
  resourcestext: "Resources",
  communitytext: "Community Forum",
  contactusbutton: "Contact Us",
  aboutustext: "Contact Us",
};

export default AboutUsHero;
