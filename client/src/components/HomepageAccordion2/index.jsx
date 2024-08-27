import React from "react";

import { Img, Text } from "components";

const HomepageAccordion2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
            size="txtManropeBold28Black900"
          >
            {props?.text}
          </Text>
          <Img
            className="h-12 w-12"
            src="images/img_arrowdown2_black_900.svg"
            alt="arrowdownTwo"
          />
        </div>
      </div>
    </>
  );
};

HomepageAccordion2.defaultProps = {
  text: "How can I benefit from working with a mental health consultant?",
};

export default HomepageAccordion2;
