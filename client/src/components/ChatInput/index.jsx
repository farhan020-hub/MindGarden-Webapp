// ChatInput.js
import React, { useState, useContext } from 'react';
import { Button } from '../../components';
import { UserContext } from '../../context/UserContext';

const ChatInput = ({onSend}) => {
  const { currentUser, url, authToken } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSend = () => {
    if (currentUser) {
      const newThread = {
        title,
        content,
        user_id: currentUser.id,
      };

      // Include your POST request logic here
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${authToken}`); 

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newThread),
        redirect: 'follow',
      };

      fetch(`${url}/forum_threads`, requestOptions)
        .then((response) => response.json()) // Assuming the response is in JSON format
        .then((result) => {
          console.log('Forum thread added successfully:', result);

          // Call the onSend prop to update the UI
          onSend(result);
          // Clear input fields
          setTitle('');
          setContent('');
        })
        .catch((error) => console.error('Error adding forum thread:', error));
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient2 p-4 flex flex-row gap-0">
      <div className='flex flex-col w-[85%]'>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[90%] border border-black-900 border-solid text-black-900 rounded-[30px] p-5 pr-4 m-4 self-start"
        />

        <input
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-[90%] border border-black-900 border-solid text-black-900 rounded-[30px] p-5 pr-4 m-4 self-start"
        />
      </div>
      <div className='flex flex-col w-[15%] place-content-center'>
        <Button
          onClick={handleSend}
          className="cursor-pointer font-bold leading-[normal] min-w-[182px] text-[22px] text-center sm:text-lg md:text-xl mt-[19px]"
          shape="round"
          color='deep_orange_400'
          variant="fill"
          size="sm"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
