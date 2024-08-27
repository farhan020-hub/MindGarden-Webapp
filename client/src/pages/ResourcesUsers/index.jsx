import React from "react";
import { Heading } from "../../components";
import HeroSection from "components/HeroSection";
import ResourcesUsersRowOne from "components/ResourcesUsersRowOne";
import Footer from "components/Footer";
import { useResources } from "../../context/ResourcesContext";

export default function ResourcesUsersPage() {
  const { resources } = useResources();
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[716px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full gap-[143px]">
            <HeroSection
              className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
              aboutustext="Resources"
            />
            <div className="flex flex-col w-[48%] ml-[264px]">
              <Heading
                size="lg"
                as="h3"
                className="!text-black-900 items-center w-auto justify-center"
              >
                Therapists
              </Heading>
              <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {resources.map(
                  (resource) =>
                    resource.description === "Therapist" && (
                      <ResourcesUsersRowOne
                        key={resource.id}
                        name={resource.name}
                        phoneNumber={resource.contact_info}
                        description={resource.description}
                        availability={resource.availability}
                        imageURL={resource.imageURL}
                      />
                    )
                )}
              </div>
              <Heading
                size="lg"
                as="h3"
                className="!text-black-900 items-center w-auto"
              >
                Support Group
              </Heading>
              <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {resources.map(
                  (resource) =>
                    resource.description === "Support Group" && (
                      <ResourcesUsersRowOne
                        key={resource.id}
                        name={resource.name}
                        phoneNumber={resource.contact_info}
                        description={resource.description}
                        availability={resource.availability}
                        imageURL={resource.imageURL}
                      />
                    )
                )}
              </div>
              <Heading
                size="lg"
                as="h3"
                className="!text-black-900 items-center w-auto"
              >
                Crisis Center
              </Heading>
              <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {resources.map(
                  (resource) =>
                    resource.description === "Crisis Center" && (
                      <ResourcesUsersRowOne
                        key={resource.id}
                        name={resource.name}
                        phoneNumber={resource.contact_info}
                        description={resource.description}
                        availability={resource.availability}
                        imageURL={resource.imageURL}
                      />
                    )
                )}
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
