import React from "react";
import { Heading, Img } from "./..";

export default function ResourcesUsersRowOne(props) {
  return (
    <div className={props.className}>
      <div className="flex flex-col items-center justify-start w-full gap-[26px] p-[19px] bg-gradient rounded-[30px]">
        <Img src={props.imageURL} alt="image" className="h-[200px] w-[200px] rounded-[50%]" />
        <div className="flex flex-row justify-center w-full mb-2.5 max-w-[343px]">
          <div className="flex flex-col items-center justify-start w-full gap-6">
            <Heading className="text-center" size="s">
              Availability: {props.availability}
            </Heading>
            <Heading className="text-center">
              Description: {props.description}
            </Heading>
            <Heading className="text-center">
              Phone Number : {props.phoneNumber}
            </Heading>
            <Heading size="s" as="h1">
              {props.name}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
