import React, {useState} from "react";
import { AdminHeading,  Button } from "../../components";
import Footer from "../../components/Footer";
import { useResources } from "../../context/ResourcesContext";
import AdminHero from "../../components/AdminHero";

export default function ResourcesAdminPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [availability, setAvailability] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [location, setLocation] = useState("")

  const { addResources } = useResources();

  function handleSubmit() {
    addResources(name, description, contactInfo, availability, imageURL, location);

    setName("");
    setDescription("");
    setContactInfo("");
    setAvailability("");
    setImageURL("");
    setLocation("");
  }
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[169px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <AdminHero
            className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
            aboutustext="Add A Resource"
          />
          <div className="flex flex-col items-start justify-center w-full mt-[139px] pl-[72px] pr-14 gap-[15px] py-[72px] bg-green-200 max-w-[1691px] rounded-[30px]">
            <AdminHeading
              size="2xl"
              as="h1"
              className="mt-[23px] ml-[106px] !font-extrabold"
            >
              Add a Resource (Therapist, Support Group , Crisis Center)
            </AdminHeading>
            <div className="flex flex-col items-start justify-start w-[56%] ml-[292px]">
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <AdminHeading size="lg" as="h2">
                    Name
                  </AdminHeading>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your name"/>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-[37px]">
                <div className="flex flex-col items-start justify-start w-full pt-1 gap-[25px]">
                  <AdminHeading size="lg" as="h3">
                    Image Url
                  </AdminHeading>
                  <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your image url"/>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-[19px]">
                <div className="flex flex-col items-start justify-start w-full gap-[25px] py-1">
                  <AdminHeading size="lg" as="h4">
                    Description
                  </AdminHeading>
                  <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your description"/>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-[19px]">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <AdminHeading size="lg" as="h5">
                    Contact Info
                  </AdminHeading>
                  <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your contact info"/>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-7">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <AdminHeading size="lg" as="h6">
                    Availability
                  </AdminHeading>
                  <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your availability"/>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-7">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <AdminHeading size="lg" as="h6">
                    Location
                  </AdminHeading>
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your location"/>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[182px] text-[22px] text-center sm:text-lg md:text-xl mt-[19px]"
                shape="round"
                color="deep_orange_400"
                size="sm"
                variant="fill"
                onClick={()=>handleSubmit()}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
