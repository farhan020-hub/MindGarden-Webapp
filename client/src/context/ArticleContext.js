import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { UserContext } from "./UserContext";

const ArticleContext = createContext();

const ArticleProvider = ({children}) => {
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);

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

      // Fetch articles
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`${url}/articles`, requestOptions);
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error('Error fetching Articles:', error);
            }
        };

        // Disable linting rule for the next line
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchArticle();
    }, [requestOptions]);

    console.log("Articles: ", articles)

    function addArticle(title, imageURL, content, author_id, status){
        fetch(`${url}/admin/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                title,
                imageURL,
                content,
                author_id,
                status
            }),
        })
        .then((res) => res.json())
        .then((response) => {
            if(response.message){
                navigate("/blog");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: response.error,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
    }

    return (
        <ArticleContext.Provider value={{articles, addArticle}}>
            {children}
        </ArticleContext.Provider>
    );
};

const useArticles = () => useContext(ArticleContext);
export { ArticleProvider, useArticles }