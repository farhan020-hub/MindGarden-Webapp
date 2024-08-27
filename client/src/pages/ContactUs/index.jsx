import React from "react";

import { Button, Img, Input, Text } from "components";
import HeroSection from "components/HeroSection";
import Footer from "components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <HeroSection
          className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
          settingsimage="images/img_settings_white_a700_80x80.svg"
          mindfulcaretext="MindGarden"
        />
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1596px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-auto md:w-full">
            <Text
              className="max-w-[616px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
              size="txtManropeBold54"
            >
              Contact Us Today for Personalized Support and Assistance
            </Text>
            <Text
              className="max-w-[528px] md:max-w-full text-black-900 text-lg"
              size="txtPoppinsRegular18Black900"
            >
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris.{" "}
            </Text>
            <div className="flex flex-col font-manrope gap-[30px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_call_gray_900.svg"
                  alt="call"
                />
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                  size="txtManropeBold28"
                >
                  +14 5464 8272
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_checkmark_gray_900.svg"
                  alt="checkmark"
                />
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                  size="txtManropeBold28"
                >
                  rona@domain.com
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-auto sm:w-full">
                <Img
                  className="h-12 w-12"
                  src="images/img_location_gray_900.svg"
                  alt="location"
                />
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                  size="txtManropeBold28"
                >
                  Lazyy Tower 192,Burn Swiss{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[50px] items-start justify-start max-w-[860px] w-full">
            <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-auto"
                  size="txtManropeBold35Black900"
                >
                  First Name
                </Text>
                <Text
                  className="border border-black-900 border-solid pl-[25px] pr-[35px] sm:px-5 py-[18px] rounded-[30px] text-black-900 text-lg w-full"
                  size="txtPoppinsRegular18Black900"
                >
                  Your first name
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-auto"
                  size="txtManropeBold35Black900"
                >
                  Last Name
                </Text>
                <Text
                  className="border border-black-900 border-solid pl-[25px] pr-[35px] sm:px-5 py-[18px] rounded-[30px] text-black-900 text-lg w-full"
                  size="txtPoppinsRegular18Black900"
                >
                  Your last name
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-auto"
                  size="txtManropeBold35Black900"
                >
                  Email
                </Text>
                <Input
                  name="email_Two"
                  placeholder="email@domain.com"
                  className="font-poppins leading-[normal] p-0 placeholder:text-black-900 text-left text-lg w-full"
                  wrapClassName="w-full"
                  type="email"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-auto"
                  size="txtManropeBold35Black900"
                >
                  Phone
                </Text>
                <Input
                  name="frame168_Two"
                  placeholder="+21 228xxxx"
                  className="font-poppins leading-[normal] p-0 placeholder:text-black-900 text-left text-lg w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 w-auto"
                size="txtManropeBold35Black900"
              >
                Email
              </Text>
              <div className="border border-black-900 border-solid flex flex-col font-poppins h-[250px] md:h-auto items-start justify-start sm:px-5 px-[25px] py-[19px] rounded-[30px] w-full">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtPoppinsRegular18Black900"
                >
                  Your message
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[256px] text-[22px] text-center sm:text-lg md:text-xl"
              shape="round"
              color="deep_orange_400"
              size="sm"
              variant="fill"
            >
              Send message
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[122px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactUsPage;
