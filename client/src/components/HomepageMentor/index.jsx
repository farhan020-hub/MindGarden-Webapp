import React from "react";

import { Img, List, Text } from "components";

const HomepageMentor = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gradient  bottom-[0] flex md:flex-col flex-row md:gap-[59px] inset-x-[0] items-start justify-between mx-auto w-full">
          <Img
            className="h-[509px] md:h-auto md:mt-0 mt-[234px] object-cover"
            src="images/img_vector3.png"
            alt="vectorThree"
          />
          <div className="h-[702px] md:h-[709px] sm:h-[898px] mb-[41px] relative w-[47%] md:w-full">
            <Img
              className="absolute h-[668px] object-cover right-[0] top-[0]"
              src="images/img_group9.png"
              alt="groupNine"
            />
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-20 items-start justify-start left-[0] w-auto">
              <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeBold22WhiteA700"
                >
                  {props?.mentor}
                </Text>
                <Text
                  className="max-w-[647px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
                  size="txtManropeBold54WhiteA700"
                >
                  {props?.introducingexpeOne}
                </Text>
              </div>
              <List
                className="flex flex-col gap-[50px] items-start w-auto"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-10 items-center justify-start my-0 w-auto sm:w-full">
                  <Img
                    className="h-[84px] w-[84px]"
                    src="images/img_settings_white_a700.svg"
                    alt="settings"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                      size="txtManropeBold28WhiteA700"
                    >
                      {props?.professionalgroOne}
                    </Text>
                    <Text
                      className="max-w-[398px] md:max-w-full text-lg text-white-A700"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      {props?.loremipsumdolor}
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-10 items-center justify-start my-0 w-auto sm:w-full">
                  <Img
                    className="h-[84px] w-[84px]"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto"
                      size="txtManropeBold28WhiteA700"
                    >
                      {props?.reducedburnout}
                    </Text>
                    <Text
                      className="max-w-[398px] md:max-w-full text-lg text-white-A700"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      {props?.language}
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[952px] inset-y-[0] left-[10%] my-auto object-cover w-[39%]"
          src="images/img_denizaltindas.png"
          alt="denizaltindas"
        />
      </div>
    </>
  );
};

HomepageMentor.defaultProps = {
  mentor: "Mentor",
  introducingexpeOne: "Introducing Experienced Consulting",
  professionalgroOne: "Professional Growth",
  loremipsumdolor:
    "In Mind Garden you will experience professional growth from our wide range of qualified personnel.",
  reducedburnout: "Reduced Burnout",
  language:
    "Our mental health programs are diverse which reduces burnout while participating in them. ",
};

export default HomepageMentor;
