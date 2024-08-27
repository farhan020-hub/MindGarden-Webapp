import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [onchange, setOnchange] = useState(false);
  const [authToken, setAuthToken] = useState(() =>
    sessionStorage.getItem("authToken")
      ? sessionStorage.getItem("authToken")
      : null
  );
  const [currentUser, setCurrentUser] = useState(null);
  const url = "https://mindgarden.onrender.com";

  const navigate = useNavigate();

  // Add user

  function addUser(username, email, role, password) {
    fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        role,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          navigate("/login");

          Swal.fire({
            position: "center",
            icon: "success",
            title: response.success,
            showConfirmButton: false,
            timer: 1500,
          });
          setOnchange(!onchange);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: response.error,
            showConfirmButton: false,
            timer: 1500,
          });
          setOnchange(!onchange);
        }
      });
  }

  // Get Authenticated user

  useEffect(() => {
    if (authToken) {
      fetch(`${url}/authenticated_user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.email || response.username) {
            setCurrentUser(response);
          } else {
            setCurrentUser(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching authenticated user:", error);
          setCurrentUser(null);
        });
    }
  }, [authToken, onchange]);

  // login user
  function login(username, password) {
    fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.access_token) {
          sessionStorage.setItem("authToken", response.access_token);
          setAuthToken(response.access_token);
  
          fetch(`${url}/authenticated_user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.access_token}`,
            },
          })
            .then((res) => res.json())
            .then((userResponse) => {
              if (userResponse.role === "Admin") {
                navigate("/admindashboard");
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Admin Login success",
                  text: `Welcome back, ${userResponse.username}`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                setOnchange(!onchange);
              } else {
                navigate("/");
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Login success",
                  text: `Welcome back, ${userResponse.username}`,
                  showConfirmButton: false,
                  timer: 1500,
                });
  
                setOnchange(!onchange);
              }
            });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: response.error,
            showConfirmButton: false,
            timer: 1500,
          });
          setOnchange(!onchange);
        }
      });
  }

  function logout() {
    sessionStorage.removeItem("authToken");
    setCurrentUser(null);
    navigate("/");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout success",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  console.log("Current User: ", currentUser);

  // context data
  const contextData = {
    addUser,
    authToken,
    currentUser,
    login,
    logout,
    url,
  };

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
}
