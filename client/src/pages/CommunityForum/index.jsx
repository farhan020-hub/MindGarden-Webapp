import React, { useContext } from "react";
import HeroSection from "components/HeroSection";
import ChatInput from "components/ChatInput";
import { useCommunityContext } from "../../context/CommunityContext";
import { UserContext } from "../../context/UserContext";
import { Text } from "../../components";    

export default function CommunityForum() {
    const { forumThreads, setForumThreads } = useCommunityContext();
    const { currentUser } = useContext(UserContext);
    
    const updateForumThreads = (newThread) => {
      setForumThreads((prevThreads) => [newThread, ...prevThreads]);
      window.location.reload();
    };
  
    return (
      <>
        <div className="flex flex-col items-center justify-start w-full gap-[716px] bg-white-A700">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[143px] mb-[300px]">
              <HeroSection
                className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
                aboutustext="Community Area"
              />
              <div
                className="flex flex-col w-[48%] ml-[264px]  h-[100%] overflow-y-auto justify-center " // Adjust margin-bottom as needed
                id="Main Area"
              >
                {currentUser &&
                  forumThreads.map((thread, index) => (
                    <div
                      key={index}
                      className={`border p-4 mb-4 rounded-lg ${
                        thread.user_id === currentUser.id
                          ? "self-end"
                          : "self-start"
                      }`}
                    >
                      <Text
                        className="max-w-[440px] md:max-w-full text-[30px] text-black-900"
                        size="txtManropeBold35Black900"
                      >
                        {thread.title}
                      </Text>
                      <Text
                        className="max-w-[475px] md:max-w-full text-black-900 text-lg"
                        size="txtPoppinsRegular18Black900"
                      >
                        <span className="text-black-900 font-poppins text-left font-normal">
                          {thread.content}
                        </span>
                      </Text>
                      <span className="text-indigo-A700 font-poppins text-left font-semibold italic self-end">
                        {thread.created_at}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <ChatInput onSend={updateForumThreads} />
      </>
    );
  }
  