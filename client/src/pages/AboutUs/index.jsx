import React from "react";

import { Img, Text } from "components";
import HeroSection from "components/HeroSection";
import Footer from "components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <HeroSection
          className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
          aboutustext="About Us"
        />
        <div className="flex flex-col items-start mt-[200px] md:px-10 sm:px-5 px-[184px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1475px] mx-auto w-full">
            <Img
              className="h-[659px] mb-5"
              src="images/img_frame80.svg"
              alt="frameEighty"
            />
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start md:mt-0 mt-[59px] w-auto md:w-full">
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
                className="text-black-900 text-lg"
                size="txtPoppinsRegular18Black900"
              >
                <>
                  Embark on a journey of discovery as you delve into the
                  intricate tapestry of Mind Garden&#39;s mental health
                  consultancy. Behind the scenes, a team of passionate and
                  seasoned professionals stands united, each bringing a unique
                  set of skills and a wealth of experience to the forefront of
                  our commitment to your well-being.
                  <br />
                  <br />
                  From licensed therapists to expert counselors, our diverse
                  lineup of individuals shares a common dedication: to nurture
                  and guide you on the path to mental wellness. Learn more about
                  the faces, stories, and unwavering commitment that
                  collectively shape the compassionate foundation of Mind
                  Garden&#39;s approach to mental health care.
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1596px] mt-[111px] mx-auto md:px-5 w-full">
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
                        In healthcare, a holistic approach considers not only
                        the physical symptoms but also the mental, emotional,
                        and social aspects of an individual&#39;s well-being.
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
                        includes psychiatrists, psychologists, social workers,
                        and nurses collaborating to deliver comprehensive care
                        through therapy, counseling, medication, and support
                        services.
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
                      In Mind Garden mental health institution, accessibility
                      means easy access to services without barriers, including
                      user-friendly interfaces and inclusive support for diverse
                      needs.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] items-end justify-start max-w-[1562px] mt-[269px] mx-auto md:px-5 py-[30px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[29%] md:w-full">
            <Img
              className="h-[618px] md:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
              src="images/img_jefferyerhunse.png"
              alt="jefferyerhunse"
            />
          </div>
          <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
              <Text
                className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-auto"
                size="txtManropeBold22"
              >
                Welcome Message
              </Text>
              <Text
                className="max-w-[885px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
                size="txtManropeBold54"
              >
                Start Your Mental Health Journey Here A Warm Welcome to Our
                Consultancy
              </Text>
            </div>
            <div className="flex flex-col font-poppins gap-5 items-start justify-start w-auto md:w-full">
              <Text
                className="text-black-900 text-center text-lg"
                size="txtPoppinsRegular18Black900"
              >
                <>
                  Dear Friends and Visitors,
                  <br />
                  Welcome to Mind Garden, a sanctuary crafted for mental
                  well-being and personal growth. As the founder, my commitment
                  is to provide a supportive environment for those navigating
                  the intricate landscape of their mental health.
                  <br />
                  Mind Garden is more than a platform—it&#39;s a haven where
                  resilience is nurtured, self-discovery is celebrated, and
                  emotional balance is a shared goal. Our dedicated team,
                  comprised of passionate professionals, is ready to support you
                  through your unique journey to mental wellness. We offer a
                  diverse range of resources and services tailored to empower
                  you with the tools and insights necessary to cultivate a
                  flourishing and resilient mental landscape.
                  <br />
                  Explore the richness of Mind Garden—immerse yourself in
                  articles, engage with our compassionate professionals, and
                  discover a community that values your well-being. Thank you
                  for entrusting us with the privilege of being part of your
                  personal journey.
                  <br />
                  With warm regards,
                </>
              </Text>
              <Text
                className="text-black-900 text-lg w-auto"
                size="txtPoppinsSemiBold18Black900"
              >
                Alexander G - Founder of MindGarden
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[87px] w-full">
          <div className="h-[519px] md:h-[533px] md:px-5 relative w-full">
            <Img
              className="h-[519px] m-auto object-cover w-full"
              src="images/img_azizacharkikf.png"
              alt="azizacharkikf"
            />
            <div className="absolute bg-gradient1  flex flex-col gap-3.5 h-full inset-[0] justify-center m-auto p-[42px] md:px-10 sm:px-5 w-full">
              <Img
                className="h-[81px] md:ml-[0] ml-[222px] mr-[1522px] mt-[37px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
              <Text
                className="md:ml-[0] ml-[255px] mr-[201px] sm:text-[40px] md:text-[46px] text-[54px] text-center text-white-A700 w-[76%] sm:w-full"
                size="txtManropeBold54WhiteA700"
              >
                <>
                  Self-care is not a luxury. It&#39;s a necessity. Without it,
                  we cannot be our best selves, mentally, emotionally, or
                  physically.
                </>
              </Text>
              <Img
                className="h-[81px] md:ml-[0] ml-[1558px] mr-[186px]"
                src="images/img_settings.svg"
                alt="settings"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1614px] mt-[183px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start md:mt-0 mt-[58px] w-auto md:w-full">
              <div className="flex flex-col font-manrope gap-5 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                  size="txtManropeBold22"
                >
                  Team
                </Text>
                <Text
                  className="max-w-[663px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
                  size="txtManropeBold54"
                >
                  Caring for Your Mental Health Get to Know Our Team of Experts
                </Text>
              </div>
              <Text
                className="max-w-[500px] md:max-w-full text-black-900 text-center text-lg"
                size="txtPoppinsRegular18Black900"
              >
                At Mind Garden, our mental health consultancy is driven by a
                dedicated team of compassionate professionals. Meet the faces
                behind the expertise, each committed to fostering a supportive
                environment for your well-being. Learn about our diverse
                backgrounds, qualifications, and shared mission to guide you on
                your journey to mental wellness.{" "}
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <Img
                  className="md:flex-1 h-[658px] sm:h-auto object-cover w-[64%] md:w-full"
                  src="images/img_jefferyerhunse_658x493.png"
                  alt="jefferyerhunse_One"
                />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[37%] md:w-full">
                  <Img
                    className="h-[374px] md:h-auto object-cover w-full"
                    src="images/img_dorrelltibbsg.png"
                    alt="dorrelltibbsg"
                  />
                  <Img
                    className="h-[284px] md:h-auto object-cover w-full"
                    src="images/img_princeakachi4.png"
                    alt="princeakachiFour"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[132px] items-center justify-start max-w-[1602px] mt-[213px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
              <Text
                className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                size="txtManropeBold22"
              >
                Succes Story
              </Text>
              <Text
                className="max-w-[687px] md:max-w-full sm:text-[40px] md:text-[46px] text-[54px] text-black-900"
                size="txtManropeBold54"
              >
                <>
                  Joshua&#39;s Journey to Mindful Living: A Tale of Personal
                  Transformation
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-poppins gap-5 items-center justify-start w-auto sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_arrowleft2.svg"
                alt="arrowleftTwo"
              />
              <Text
                className="max-w-[500px] md:max-w-full text-black-900 text-lg"
                size="txtPoppinsRegular18Black900"
              >
                <>
                  Mindful Mindset: Joshua embraced Mind Garden&#39;s resources,
                  experiencing a significant shift in his mindset. Through
                  guided meditations and expert articles, he gained valuable
                  insights into mindfulness, fostering a positive and resilient
                  mental state.
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-poppins gap-5 items-center justify-start w-auto sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_arrowleft2.svg"
                alt="arrowleftTwo_One"
              />
              <Text
                className="max-w-[500px] md:max-w-full text-black-900 text-lg"
                size="txtPoppinsRegular18Black900"
              >
                <>
                  Guided Support: Mind Garden&#39;s professional team provided
                  Joshua with effective guidance. Virtual counseling sessions
                  and personalized advice empowered him to overcome challenges,
                  manage stress, and develop practical coping mechanisms.
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-poppins gap-5 items-center justify-start w-auto sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_arrowleft2.svg"
                alt="arrowleftTwo_Two"
              />
              <Text
                className="max-w-[500px] md:max-w-full text-black-900 text-lg"
                size="txtPoppinsRegular18Black900"
              >
                <>
                  Community Connection: Joshua actively engaged in Mind
                  Garden&#39;s supportive community. Participation in forums and
                  events allowed him to connect with others, sharing experiences
                  and receiving encouragement, creating a sense of camaraderie
                  on his mental health journey.
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-poppins gap-5 items-center justify-start w-auto sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_arrowleft2.svg"
                alt="arrowleftTwo_Three"
              />
              <Text
                className="max-w-[500px] md:max-w-full text-black-900 text-lg"
                size="txtPoppinsRegular18Black900"
              >
                <>
                  Seamless Integration: The accessibility and convenience of
                  Mind Garden were pivotal for Joshua. The user-friendly
                  interface and diverse content allowed him to seamlessly
                  integrate mental well-being practices into his daily life,
                  making the journey both accessible and impactful.
                </>
              </Text>
            </div>
          </div>
          <Img
            className="h-[904px]"
            src="images/img_group1.svg"
            alt="groupOne"
          />
        </div>
        <Footer className="flex items-center justify-center mt-[92px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
