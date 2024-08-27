import React from "react";
import { Img } from "../Img";
import { Text } from "../Text";


function BlogCard(props) {
  return (
    <>
      <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Img
            className="h-[462px] md:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
            src={props?.blogImage}
            alt="danmeyershluo"
          />
        </div>
        <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
          <Text
            className="max-w-[440px] md:max-w-full sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
            size="txtManropeBold35Black900"
          >
            {props?.blogTitle}
          </Text>
          <Text
            className="max-w-[475px] md:max-w-full text-black-900 text-lg"
            size="txtPoppinsRegular18Black900"
          >
            <span className="text-black-900 font-poppins text-left font-normal">
              {props.blogContent}{" "}
            </span>
            <span className="text-indigo-A700 font-poppins text-left font-semibold italic">
              See more
            </span>
          </Text>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
