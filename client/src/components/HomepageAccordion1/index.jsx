import React from "react";

import { Img, Text } from "components";

const HomepageAccordion1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
            size="txtManropeBold28Black900"
          >
            {props?.whatservicesdo}
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

HomepageAccordion1.defaultProps = {
  whatservicesdo: "What services do you offer as a mental health consultant?",
};

export default HomepageAccordion1;
