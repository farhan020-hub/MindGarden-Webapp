import React from "react";
import { Heading, Img } from "./..";
import { FaTrashAlt } from "react-icons/fa";

export default function UserCardAdmin(props) {
  return (
    <div className={props.className}>
      <div className="flex flex-col items-center justify-start w-full gap-[26px] p-[30px] bg-gradient rounded-[30px]">
        <Img src={props.imageURL} alt="image" className="h-[200px] w-[200px] rounded-[50%]" />
        <div className="flex flex-row justify-center w-full mb-2.5 max-w-[343px]">
          <div className="flex flex-col items-center justify-start w-full gap-6">
           
            <Heading className="text-center">
              Average Rating: {props.description}
            </Heading>
            <Heading className="text-center">
              Email: {props.phoneNumber}
            </Heading>
            <Heading size="s" as="h1">
              {props.name}
            </Heading>
            <FaTrashAlt className="cursor-pointer" color="red" onClick={() => {  props.deleteUser(props.id); }} size={30}/>


          </div>
        </div>
      </div>
    </div>
  );
}
