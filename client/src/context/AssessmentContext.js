import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";


import { UserContext } from "./UserContext";

const AssessmentContext = createContext();

const AssessmentProvider = ({children}) => {

    const [questions, setQuestions] = useState([]);

    const { authToken } = useContext(UserContext);

    const url = 'https://mindgarden.onrender.com'

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

      // Fetch questions
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`${url}/assessment_questions`, requestOptions);
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching Questions:', error);
            }
        };
        fetchQuestions();
    }, [requestOptions]);

    console.log("Questions: ", questions)

    // Self assessment post
    function takeAssessment(assessmentAnswer) {

        fetch(`${url}/self_assessments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: assessmentAnswer
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.average_rating) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: response.message,
                        html : `<h2>Rating</h2>${response.average_rating}<br><br> <h2>Mood</h2>${response.mood}`,
                     
                        showConfirmButton: false,
                        timer: 7500,
                      });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: response.error,
                        showConfirmButton: false,
                        timer: 5500,
                      });
                }
                console.log(response)
            })
    }

    return (
        <AssessmentContext.Provider value={{questions, takeAssessment}}>
            {children}
        </AssessmentContext.Provider>
    );
};

const useQuestions = () => useContext(AssessmentContext);
export { AssessmentProvider, useQuestions }