import React from "react";

import { Img, Text } from "components";

const HomepageAccordion = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-1 items-center justify-start w-full">
          <Text
            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
            size="txtManropeBold28Black900"
          >
            {props?.text}
          </Text>
          <Img
            className="h-12 w-12"
            src="images/img_arrowdown2.svg"
            alt="arrowdownTwo"
          />
        </div>
      </div>
    </>
  );
};

HomepageAccordion.defaultProps = {
  text: "What is a mental health consultant?",
};

export default HomepageAccordion;
