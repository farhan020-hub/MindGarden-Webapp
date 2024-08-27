// CommunityContext.js
import React, { createContext, useContext, useState, useEffect,useMemo } from 'react';
import { UserContext } from './UserContext';

const CommunityContext = createContext();



 const CommunityProvider = ({ children }) => {
  const [forumThreads, setForumThreads] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const { authToken } = useContext(UserContext);

  const url = 'https://mindgarden.onrender.com';

  const requestOptions = useMemo(() => {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };
  }, [authToken]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/forum_threads`, requestOptions);

        if (!response.ok) {
          throw new Error('Failed to fetch forum threads');
        }

        const data = await response.json();
        setForumThreads(data);
      } catch (error) {
        console.error('Error fetching forum threads:', error.message);
      } finally {
        setLoading(false); // Set loading to false when fetching is done
      }
    };
    // Disable linting rule for the next line
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchData();
  }, [authToken, requestOptions]); // Include authToken as a dependency

  console.log('Forum Threads: ', forumThreads);

  // Adding a new forum thread
//   function addForumThread(title, content, user_id) {
//     fetch(`${url}/forum_threads`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: `Bearer ${authToken}`,
//       },
//       body: JSON.stringify({
//         title,
//         content,
//         user_id,
//       }),
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         if (response.message) {
//           console.log(response.message);
//         } else {
//           console.log(response.error);
//         }
//       });
//   }

  // Render children only when loading is false
  return (
    <CommunityContext.Provider value={{ forumThreads, setForumThreads }}>
      {!loading && children}
    </CommunityContext.Provider>
  );
};

const useCommunityContext = () => useContext(CommunityContext);
export {useCommunityContext, CommunityProvider}