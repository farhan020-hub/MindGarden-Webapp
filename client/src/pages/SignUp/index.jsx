import React, { useContext, useState } from "react";
import { Button, Heading } from "../../components";
import AboutUsHero from "components/HeroSection";
import Footer from "components/Footer";
import { UserContext } from "../../context/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function SignUpPage() {

    const {addUser} = useContext(UserContext)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const role = "Registered"; 


    const handleSubmit = (e) => {
      
      

      // Add user Function
      addUser(username, email, role, password)

      console.log(username, email, role, password)

      // Clear form after submit
      setUsername("")
      setEmail("")
      setPassword("")
    }
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[131px] ">
        <div className="flex flex-col items-center justify-start w-full gap-[131px]">
          <AboutUsHero className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full" aboutustext="Sign Up"/>
          <div className="flex flex-row justify-center w-full max-w-[1691px]">
            <div className="flex flex-row justify-start w-full pl-[177px] pr-14 py-[177px] bg-green-200 rounded-[30px]">
              <div className="flex flex-col items-start justify-start w-[59%] mb-[171px] ml-[188px]">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                    <Heading size="md" as="h2" className="!text-black-900">
                      Username
                    </Heading>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your username"/>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-[37px]">
                  <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                    <Heading size="md" as="h2" className="!text-black-900">
                      Email
                    </Heading>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your email"/>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-[19px]">
                  <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                    <Heading size="md" as="h3" className="!text-black-900">
                      Password
                    </Heading>
                    <div className="relative w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5 pr-12"
                        placeholder="Your password"
                      />
                      <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash size={30}/> : <FaEye size={30} />}
                      </button>
                      </div>
                  </div>
                </div>
                <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[182px] text-[22px] text-center sm:text-lg md:text-xl mt-[19px]"
                      shape="round"
                      color="deep_orange_400"
                      size="sm"
                      variant="fill"
                      onClick={() => handleSubmit()}
                    >
                      Sign Up
                    </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full">
          <Footer className="flex flex-row justify-center w-full" />
        </footer>
      </div>
    </>
  );
}
