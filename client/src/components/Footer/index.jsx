import React from "react";
import { FooterText, Button, Img, AdminHeading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full px-14 py-[82px] bg-gradient">
        <div className="flex flex-col items-center justify-center w-full mt-0.5 gap-[58px] mx-[79px] max-w-[1596px]">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col items-start justify-start w-1/5 gap-[30px]">
              <div className="flex flex-row justify-start items-center gap-[15px]">
                <Img src="images/img_path28.svg" alt="g8_one" className="h-20 w-20" />
                <AdminHeading as="h3" className="!text-white-A700">
                  MindGarden
                </AdminHeading>
              </div>
              <FooterText as="p" className="text-center">
                Cultivating Wellness, Nurturing Minds – Your Path to Mental Well-being Starts Here at Mind Garden.
              </FooterText>
            </div>
            <div className="flex flex-col items-center justify-start w-[10%] gap-7">
              <AdminHeading as="h3" className="!text-white-A700">
                Resources
              </AdminHeading>
              <div className="flex flex-col items-start justify-start w-[99%] gap-[13px]">
                <FooterText as="p">Therapists</FooterText>
                <FooterText as="p">Support Groups </FooterText>
                <FooterText as="p" className="mb-10">
                  Crisis Centers
                </FooterText>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[21%] gap-7">
              <AdminHeading as="h3" className="!text-white-A700">
                Contact
              </AdminHeading>
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full gap-5">
                  <div className="flex flex-row justify-start items-center gap-5">
                    <Img src="images/img_call.svg" alt="call_one" className="h-8 w-8" />
                    <FooterText as="p" className="text-center">
                      +254 5464 8272
                    </FooterText>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-5">
                    <Img src="images/img_message.svg" alt="message_one" className="h-8 w-8" />
                    <FooterText as="p" className="text-center">
                      info@mindgarden.com
                    </FooterText>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-5">
                    <Img src="images/img_location.svg" alt="location_one" className="h-8 w-8" />
                    <FooterText as="p" className="text-center">
                      Ivory Tower 192, Nairobi, Kenya{" "}
                    </FooterText>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[8%] gap-7">
              <AdminHeading as="h3" className="!text-white-A700">
                Links
              </AdminHeading>
              <div className="flex flex-col items-start justify-center w-full gap-3">
                <FooterText as="p" className="mt-px">
                  Privacy Policy
                </FooterText>
                <FooterText as="p">Term Of Use</FooterText>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start h-[189px] w-[189px] pt-[3px] gap-[25px]">
              <AdminHeading as="h3" className="!text-white-A700">
                Maps
              </AdminHeading>
              <Img src="images/img_rectangle_69.png" alt="image_one" className="w-full object-cover" />
            </div>
          </div>
          <div className="h-[3px] w-full bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[28%] gap-8">
            <div className="flex flex-row justify-start w-[44%] gap-2.5">
              <div className="h-[30px] w-4/5 bg-gradient rounded-[75px]" />
              <Button className="w-[30px]">
                <Img src="images/img_mdi_linkedin.png" />
              </Button>
            </div>
            <FooterText as="p">copyright 2024 @mindgarden all rights reserved</FooterText>
          </div>
        </div>
      </div>
    </footer>
  );
}
