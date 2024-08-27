import React, { useEffect, useContext, useState } from "react";
import { Img, AdminHeading } from "../../components";
import Footer from "../../components/Footer";
import AdminHero from "../../components/AdminHero";
import { UserContext } from "../../context/UserContext";

export default function AdminDashboardPage() {
  const { authToken, url } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      redirect: "follow",
    };
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/admin/dashboard`, requestOptions);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Disable linting rule for the next line
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchData();
  }, []);
  console.log("Dashboard Data", data);
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[196px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <AdminHero
            className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
            aboutustext="Admin Dashboard"
          />
          <div className="flex flex-col items-center justify-start w-full mt-60 gap-[110px] max-w-[1446px]">
            <div className="flex flex-row w-full gap-[214px]">
              <div className="flex flex-row justify-end w-[43%] p-[29px] bg-gradient2 shadow-xs rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[87%] mt-[37px] mb-5 gap-[21px]">
                  <div className="flex flex-row justify-between items-center w-full">
                    <AdminHeading size="3xl" as="h1">
                      Total Users
                    </AdminHeading>
                    <Img
                      src="images/img_user_circle.svg"
                      alt="total_users_one"
                      className="h-[93px]"
                    />
                  </div>
                  <AdminHeading size="6xl" as="h2" className="ml-[42px]">
                    {!data ? 0 : data.total_users}
                  </AdminHeading>
                </div>
              </div>
              <div className="flex flex-row justify-end w-[43%] p-12 bg-gradient3 shadow-xs rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[88%] mt-[30px] mr-1.5 gap-[22px]">
                  <div className="flex flex-row justify-between items-center w-full">
                    <AdminHeading size="3xl" as="h3">
                      Total Blogs
                    </AdminHeading>
                    <Img
                      src="images/img_book_open.svg"
                      alt="bookopen_one"
                      className="h-20 w-20"
                    />
                  </div>
                  <AdminHeading size="6xl" as="h4" className="ml-[42px]">
                    {!data ? 0 : data.total_articles}
                  </AdminHeading>
                </div>
              </div>
            </div>
            <AdminHeading size="4xl" as="h5">
              Professionals
            </AdminHeading>
            <div className="flex flex-row w-full gap-[214px]">
              <div className="flex flex-row justify-end w-[43%] p-[29px] bg-gradient4 shadow-xs rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[94%] mt-[37px] mb-5 gap-[21px]">
                  <div className="flex flex-row justify-start items-center gap-[13px]">
                    <AdminHeading size="3xl" as="h6">
                      Total Therapists
                    </AdminHeading>
                    <Img
                      src="images/img_user_circle.svg"
                      alt="total"
                      className="h-[93px]"
                    />
                  </div>
                  <AdminHeading size="6xl" as="h1" className="ml-[82px]">
                    {!data ? 0 : data.total_therapists}
                  </AdminHeading>
                </div>
              </div>
              <div className="flex flex-row justify-end w-[43%] p-[49px] bg-gradient5 shadow-xs rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[87%] mt-[27px] mr-[18px]">
                  <div className="flex flex-row justify-start items-center gap-[72px]">
                    <AdminHeading
                      size="xl"
                      as="h1"
                      className="w-[64%] text-center"
                    >
                      Total Support <br />
                      Groups
                    </AdminHeading>
                    <Img
                      src="images/img_angellist.svg"
                      alt="angellist_one"
                      className="h-[90px] w-[90px]"
                    />
                  </div>
                  <AdminHeading size="6xl" as="h1" className="ml-[46px]">
                    {!data ? 0 : data.total_support_groups}
                  </AdminHeading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-[43%] p-[50px] bg-gradient6 shadow-xs rounded-[30px]">
              <div className="flex flex-row justify-between items-start w-[93%] mt-[26px] ml-3.5">
                <div className="flex flex-row justify-center w-[63%]">
                  <div className="flex flex-col items-end justify-start w-full">
                    <AdminHeading size="3xl" as="h1" className="text-center">
                      Total Crisis <br />
                      Centers
                    </AdminHeading>
                    <AdminHeading
                      size="6xl"
                      as="h1"
                      className="mt-[-34px] mr-[49px]"
                    >
                      {!data ? 0 : data.total_crisis_centers}
                    </AdminHeading>
                  </div>
                </div>
                <Img
                  src="images/img_vector.svg"
                  alt="vector_one"
                  className="h-[90px] w-[90px] mt-[23px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full mt-28 p-[50px] bg-gradient6 shadow-xs max-w-[1475px] rounded-[30px]">
            <div className="flex flex-row justify-between items-start w-[84%] mt-[27px] ml-[105px]">
              <div className="flex flex-col items-start justify-start gap-[33px]">
                <AdminHeading size="3xl" as="h2">
                  Total Assessments Taken
                </AdminHeading>
                <AdminHeading size="6xl" as="h3" className="ml-[196px]">
                  {!data ? 0 : data.total_assessments_taken}
                </AdminHeading>
              </div>
              <Img
                src="images/img_heartbeat.svg"
                alt="heartbeat_one"
                className="h-[200px] w-[200px] mt-[33px]"
              />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
