import React, { useContext, useEffect, useState } from "react";
import { Heading } from "../../components";
import AdminHero from "components/AdminHero";
import UserCardAdmin from "components/UserCardAdmin";
import Footer from "components/Footer";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";

export default function AdminUsers() {
  const { authToken, url } = useContext(UserContext);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      redirect: "follow",
    };

    try {
      const response = await fetch(`${url}/admin/dashboard`, requestOptions);
      const result = await response.json();
      setData(result.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Call fetchData directly within useEffect
    // Disable linting rule for the next line
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchData();
  }, [fetchData]);

  // Delete user
  function deleteUser(id) {
    // Check if id is defined
    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid user ID!",
      });
      return; // Exit the function if id is not defined
    }

    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (isConfirmed) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        redirect: "follow",
      };

      fetch(`${url}/admin/deleteuser/${id}`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: result.message,
            showConfirmButton: false,
            timer: 1500,
          });
          // After successful deletion, fetch the updated data
          fetchData();
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error deleting user!",
          });
        });
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[716px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full gap-[143px]">
            <AdminHero
              className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
              aboutustext="Users"
            />
            <div className="flex flex-col w-[48%] ml-[264px]">
              <Heading
                size="lg"
                as="h3"
                className="!text-black-900 items-center w-auto justify-center"
              >
                Users
              </Heading>
              <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {data &&
                  data.map((user, index) => (
                    <UserCardAdmin
                      key={index}
                      name={user.username}
                      phoneNumber={user.email}
                      imageURL="images/img_user_circle.svg"
                      description={user.average_rating}
                      id={user.id}
                      deleteUser={deleteUser}
                    />
                  ))}
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
