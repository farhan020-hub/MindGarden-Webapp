import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import HomepageAccordion from "components/HomepageAccordion";
import HomepageAccordion1 from "components/HomepageAccordion1";
import HomepageAccordion2 from "components/HomepageAccordion2";
import HomepageAccordion3 from "components/HomepageAccordion3";
import HomepageMentor from "components/HomepageMentor";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const HomepagePage = () => {
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const { logout } = useContext(UserContext);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-manrope items-center justify-end mx-auto pt-20 w-full">
      <div className="flex flex-col md:gap-10 gap-[189px] items-center justify-start w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1596px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1596px] w-full">
            <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
              <Img
                className="h-[50px] md:h-auto object-cover w-[50px]"
                src="images/img_path28.png"
                alt="pathTwentyEight"
              />
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-auto"
                  size="txtManropeBold28"
                >
                  MindGarden
                </Text>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row font-poppins gap-[50px] items-start justify-center w-auto sm:w-full">
                <Link to="/">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtPoppinsSemiBold18"
                  >
                    Home
                  </Text>
                </Link>
                <Text
                  className="common-pointer text-gray-900 text-lg w-auto"
                  size="txtPoppinsRegular18"
                  onClick={() => navigate("/aboutus")}
                >
                  About
                </Text>
                <Text
                  className="common-pointer text-gray-900 text-lg w-auto"
                  size="txtPoppinsRegular18"
                  onClick={() => navigate("/blog")}
                >
                  Blogs
                </Text>
                <Text
                  className="text-gray-900 text-lg w-auto cursor-pointer"
                  size="txtPoppinsRegular18"
                  onClick={() => navigate("/userresources")}
                >
                  Resources
                </Text>
                <Text
                  className="text-gray-900 text-lg w-auto cursor-pointer"
                  size="txtPoppinsRegular18"
                  onClick={() => navigate("/communityforum")}
                >
                  Community Forum
                </Text>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[221px] text-[22px] text-center sm:text-lg md:text-xl"
                onClick={() => navigate("/contactus")}
                shape="round"
                color="deep_orange_400"
                size="sm"
                variant="fill"
              >
                Contact Us
              </Button>
              {currentUser && currentUser.username && (
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[221px] text-[22px] text-center sm:text-lg md:text-xl"
                  onClick={() => logout()}
                  shape="round"
                  color="deep_orange_400"
                  size="sm"
                  variant="fill"
                >
                  Log Out
                </Button>
              )}
            </div>
            <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start mb-5 w-auto md:w-full">
                <div className="flex flex-col md:gap-10 gap-[114px] items-center justify-center w-auto md:w-full">
                  <Text
                    className="max-w-[771px] md:max-w-full md:text-5xl text-[68px] text-center text-gray-900"
                    size="txtManropeExtraBold68"
                  >
                    <span className="text-gray-900 font-manrope font-extrabold">
                      Healthy Minds, Happy Lives{" "}
                    </span>
                    <span className="text-deep_orange-400 font-manrope font-extrabold">
                      Mental Health{" "}
                    </span>
                    <span className="text-gray-900 font-manrope font-extrabold">
                      Consultancy
                    </span>
                  </Text>
                  <Text
                    className="max-w-[689px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Welcome to Mind Garden: Cultivating Mental Well-being.
                    Immerse yourself in our sanctuary for self-discovery through
                    expertly curated content. Nourish your mind with holistic
                    care, accessible anytime, anywhere. Begin your journey to a
                    healthier, balanced life today.
                  </Text>
                  {!currentUser && (
                    <div className="flex sm:flex-col flex-row font-manrope sm:gap-10 gap-[142px] items-center justify-center w-[549px] sm:w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[182px] text-[22px] text-center sm:text-lg md:text-xl"
                        shape="round"
                        color="deep_orange_400"
                        size="sm"
                        variant="fill"
                        onClick={() => navigate("/signup")}
                      >
                        Sign Up
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[159px] text-[22px] text-center sm:text-lg md:text-xl"
                        shape="round"
                        color="deep_orange_400"
                        size="sm"
                        variant="fill"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Button>
                    </div>
                  )}
                  {currentUser && currentUser.username && (
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[159px] text-[22px] text-center sm:text-lg md:text-xl"
                      shape="round"
                      color="deep_orange_400"
                      size="sm"
                      variant="fill"
                      onClick={() => navigate("/assessment")}
                    >

                      Take an Assessment
                    </Button>
                  )}
                </div>
              </div>
              <Img
                className="h-[625px] md:mt-0 mt-[70px]"
                src="images/img_5cardiologist.svg"
                alt="5cardiologist"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="sm:h-[1394px] h-[1789px] md:h-[1887px] md:px-5 relative w-[93%] md:w-full">
              <Img
                className="absolute h-[1394px] left-[0] object-cover top-[0]"
                src="images/img_group7.png"
                alt="groupSeven"
              />
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-end justify-between right-[6%] w-[84%]">
                <Img
                  className="h-[659px]"
                  src="images/img_frame80.svg"
                  alt="frameEighty"
                />
                <div className="flex flex-col gap-[50px] items-start justify-start mb-[5px] md:mt-0 mt-[59px] w-auto md:w-full">
                  <div className="flex flex-col font-manrope gap-5 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                      size="txtManropeBold22"
                    >
                      About Us
                    </Text>
                    <Text
                      className="max-w-[659px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
                      size="txtManropeBold54"
                    >
                      Discover the Faces Behind Our Mental Health Consultancy
                    </Text>
                  </div>
                  <Text
                    className="max-w-[689px] md:max-w-full text-black-900 text-lg"
                    size="txtPoppinsRegular18Black900"
                  >
                    At Mind Garden, our mental health consultancy is driven by a
                    dedicated team of compassionate professionals. Meet the
                    faces behind the expertise, each committed to fostering a
                    supportive environment for your well-being. Learn about our
                    diverse backgrounds, qualifications, and shared mission to
                    guide you on your journey to mental wellness. Click the
                    button below to discover the faces behind our mental health
                    consultancy
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-bold font-manrope leading-[normal] min-w-[207px] text-[22px] text-center sm:text-lg md:text-xl"
                    onClick={() => navigate("/aboutus")}
                    shape="round"
                    color="deep_orange_400"
                    size="sm"
                    variant="fill"
                  >
                    See detail
                  </Button>
                </div>
              </div>
              <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[91%]">
                <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                    <Text
                      className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                      size="txtManropeBold22"
                    >
                      Why?
                    </Text>
                    <Text
                      className="max-w-[1119px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900 text-center"
                      size="txtManropeBold54"
                    >
                      Why Our Mental Health Consultants are the Best Choice
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-black-900 p-[50px] md:px-10 sm:px-5 rounded-bl-[30px] rounded-tl-[30px] w-[32%] md:w-full">
                      <div className="flex flex-col gap-[50px] items-center justify-start mb-1.5 w-auto">
                        <Img
                          className="h-[130px] w-[130px]"
                          src="images/img_007psychologist.svg"
                          alt="007psychologist"
                        />
                        <div className="flex flex-col gap-5 items-center justify-start w-auto">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                            size="txtManropeBold28"
                          >
                            Holistic approach
                          </Text>
                          <Text
                            className="max-w-[365px] md:max-w-full text-black-900 text-center text-lg"
                            size="txtPoppinsRegular18Black900"
                          >
                            <>
                              In healthcare, a holistic approach considers not
                              only the physical symptoms but also the mental,
                              emotional, and social aspects of an
                              individual&#39;s well-being.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-end p-[71px] md:px-10 sm:px-5 rounded-[30px] w-[38%] md:w-full">
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[53px] w-auto sm:w-full">
                        <Img
                          className="h-[200px] w-[200px]"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <div className="flex flex-col gap-5 items-center justify-start w-auto sm:w-full">
                          <Text
                            className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 w-auto"
                            size="txtManropeBold35"
                          >
                            Expertise Team
                          </Text>
                          <Text
                            className="max-w-[421px] md:max-w-full text-center text-lg text-white-A700"
                            size="txtPoppinsRegular18WhiteA700"
                          >
                            <>
                              Our mental health institution&#39;s expertise team
                              includes psychiatrists, psychologists, social
                              workers, and nurses collaborating to deliver
                              comprehensive care through therapy, counseling,
                              medication, and support services.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-end outline outline-[1px] outline-black-900 p-[26px] sm:px-5 rounded-br-[30px] rounded-tr-[30px] w-[32%] md:w-full">
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[54px] w-auto">
                        <Img
                          className="h-[130px] w-[130px]"
                          src="images/img_014pendulum.svg"
                          alt="014pendulum"
                        />
                        <div className="flex flex-col gap-5 items-center justify-start w-auto">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                            size="txtManropeBold28"
                          >
                            Accessibility
                          </Text>
                          <Text
                            className="max-w-[365px] md:max-w-full text-black-900 text-center text-lg"
                            size="txtPoppinsRegular18Black900"
                          >
                            In Mind Garden mental health institution,
                            accessibility means easy access to services without
                            barriers, including user-friendly interfaces and
                            inclusive support for diverse needs.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[3501px] mt-[446px] md:px-5 relative w-full">
              <div className="flex flex-col items-center justify-start mb-[-293px] mx-auto w-full z-[1]">
                <HomepageMentor className="md:h-[1277px] h-[952px] relative w-full" />
              </div>
              <div className="md:h-[2489px] h-[2842px] sm:h-[3332px] mt-auto mx-auto w-full">
                <div className="absolute flex flex-col md:gap-10 gap-20 h-full inset-y-[0] items-start justify-end left-[0] my-auto md:pl-10 sm:pl-5 pl-[162px] pt-[162px] w-[92%]">
                  <div className="flex flex-col items-start justify-center mt-[1208px] w-auto md:w-full">
                    <div className="flex flex-col items-center justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-auto">
                        <Text
                          className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                          size="txtManropeBold22"
                        >
                          Gallery
                        </Text>
                        <Text
                          className="max-w-[676px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
                          size="txtManropeBold54"
                        >
                          A Gallery of Mental Health Themes Through Art
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[1194px] sm:h-[1683px] md:h-[880px] relative w-full">
                    <div className="h-[1194px] sm:h-[1683px] md:h-[880px] m-auto w-full">
                      <div className="absolute h-[1194px] sm:h-[1683px] md:h-[880px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="absolute h-[312px] object-cover right-[23%] top-[0] w-[49%]"
                          src="images/img_pexelsbelleco1000445.png"
                          alt="pexelsbellecoTen"
                        />
                        <div className="absolute bg-gradient1  flex flex-col items-center justify-start p-[95px] md:px-10 sm:px-5 right-[26%] top-[0] w-[43%]">
                          <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                            <Text
                              className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700 w-auto"
                              size="txtManropeBold35"
                            >
                              Relaxation
                            </Text>
                            <Text
                              className="max-w-[362px] md:max-w-full text-center text-lg text-white-A700"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              You need to relax and understand your mental
                              health
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col justify-start right-[0] w-[70%]">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
                            <Img
                              className="sm:flex-1 h-[576px] md:h-auto object-cover w-[44%] sm:w-full"
                              src="images/img_whatsappimage20240216.png"
                              alt="whatsappimageTwenty"
                            />
                            <Img
                              className="sm:flex-1 h-[382px] md:h-auto object-cover w-[28%] sm:w-full"
                              src="images/img_whatsappimage20240216_382x300.png"
                              alt="whatsappimageTwenty_One"
                            />
                            <Img
                              className="sm:flex-1 h-[381px] md:h-auto object-cover w-[30%] sm:w-full"
                              src="images/img_whatsappimage20240216_381x324.png"
                              alt="whatsappimageTwenty_Two"
                            />
                          </div>
                          <Img
                            className="h-[304px] md:h-auto md:ml-[0] ml-[220px] object-cover w-[24%]"
                            src="images/img_whatsappimage20240216_304x259.png"
                            alt="whatsappimageTwenty_Three"
                          />
                        </div>
                        <Img
                          className="absolute h-[314px] object-cover right-[0] top-[0] w-[27%]"
                          src="images/img_whatsappimage20240216_314x421.png"
                          alt="whatsappimageTwenty_Four"
                        />
                        <Img
                          className="absolute bottom-[0] h-[616px] left-[0] object-cover w-[31%]"
                          src="images/img_whatsappimage20240216_616x493.png"
                          alt="whatsappimageTwenty_Five"
                        />
                        <Img
                          className="absolute h-[578px] left-[0] object-cover top-[0] w-[31%]"
                          src="images/img_whatsappimage20240216_578x493.png"
                          alt="whatsappimageTwenty_Six"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[304px] left-[31%] object-cover w-[14%]"
                        src="images/img_whatsappimage20240216_304x221.png"
                        alt="whatsappimageTwenty_Seven"
                      />
                      <Img
                        className="absolute bottom-[0] h-[498px] object-cover right-[0] w-[21%]"
                        src="images/img_whatsappimage20240216_498x326.png"
                        alt="whatsappimageTwenty_Eight"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[498px] object-cover right-[19%] w-1/5"
                      src="images/img_whatsappimage20240216_498x318.png"
                      alt="whatsappimageTwenty_Nine"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start max-w-[1378px] mt-60 mx-auto pb-0.5 pl-0.5 md:px-5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                  size="txtManropeBold22"
                >
                  Faq
                </Text>
                <Text
                  className="max-w-[1376px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900 text-center"
                  size="txtManropeBold54"
                >
                  Navigating Mental Health Consultation Commonly Asked Questions
                </Text>
              </div>
              <List
                className="flex flex-col gap-[25px] items-start mb-[195px] w-auto"
                orientation="vertical"
              >
                <HomepageAccordion className="flex flex-col items-start justify-start max-w-[1285px] w-full" />
                <HomepageAccordion1 className="flex flex-col items-start justify-start max-w-[1281px] w-full" />
                <HomepageAccordion2 className="flex flex-col items-center justify-start max-w-[1285px] w-full" />
                <HomepageAccordion3 className="flex flex-col items-center justify-start max-w-[1281px] w-full" />
              </List>
            </div>
            
            <Footer className="flex items-center justify-center mt-[180px]  w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
