import React from "react";

import { Img, Text } from "components";

const HomepageRowtestimonials = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-start justify-start md:mt-0 mt-[111px] w-auto sm:w-full">
          <Text
            className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
            size="txtManropeBold22"
          >
            {props?.testimonialstext}
          </Text>
          <Text
            className="max-w-[499px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
            size="txtManropeBold54"
          >
            {props?.healingwordstext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
          <div className="bg-gradient  flex flex-col items-center justify-end p-[37px] sm:px-5 rounded-[30px] w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start mt-[27px] w-auto">
              <div className="flex flex-col h-[150px] items-center justify-start w-[150px]">
                <Img
                  className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                  src="images/img_yingchouhanij.png"
                  alt="yingchouhanij"
                />
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-auto">
                <Text
                  className="max-w-[343px] md:max-w-full text-center text-lg text-white-A700"
                  size="txtPoppinsRegular18WhiteA700"
                >
                  {props?.descriptiontext}
                </Text>
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeBold22WhiteA700"
                >
                  {props?.georgejeraldtext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomepageRowtestimonials.defaultProps = {
  testimonialstext: "Testimonials",
  healingwordstext:
    "Healing Words Testimonials from a Mental Health Consultant",
};

export default HomepageRowtestimonials;
