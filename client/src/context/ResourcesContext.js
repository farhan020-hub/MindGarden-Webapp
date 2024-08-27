import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

import { UserContext } from "./UserContext";

const ResourcesContext = createContext();

// ... (imports remain the same)

const ResourceProvider = ({ children }) => {
    const navigate = useNavigate();
    const [resources, setResource] = useState([]);
    const { authToken } = useContext(UserContext);
    const url = 'https://mindgarden.onrender.com';

    const requestOptions = useMemo(() => {
        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        };
    }, [authToken]);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await fetch(`${url}/resources`, requestOptions);
                const data = await response.json();
                setResource(data);
            } catch (error) {
                console.error('Error fetching Resources:', error);
            }
        };

        // Disable linting rule for the next line
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchResources();
    }, [requestOptions]);

    console.log("Resources: ", resources);

    function addResources(name, description, contact_info, availability, imageURL, location) {
        fetch(`${url}/resources`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                name,
                description,
                contact_info,
                availability,
                imageURL,
                location
            }),
        })
        .then((res) => res.json())
        .then((response) => {
            if (response.message) {
                navigate("/adminresources");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    }

    return (
        <ResourcesContext.Provider value={{ resources, addResources }}>
            {children}
        </ResourcesContext.Provider>
    );
};

const useResources = () => useContext(ResourcesContext);
export { ResourceProvider, useResources };
