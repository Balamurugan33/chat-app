import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Telephone, CameraVideo, PersonPlus } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import Pusher from 'pusher-js';

import { sendMessage, addChat } from '../../store/chat/action';
import user1 from '../../asset/user1.jpg';
import './index.scss';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const user = useSelector(state => state.chat.user);
  const chats = useSelector(state => state.chat.chats);
  const disPatch = useDispatch();
  const { userName } = user;

  useEffect(() => {
    let subscribe = true;
    const pusher = new Pusher('b1a6b104b77c4ab0cd35', {
      cluster: 'ap2',
      encrypted: true
    });
    if (subscribe) {
      const channel = pusher.subscribe('chat');
      channel.bind('message', (data) => {
        disPatch(addChat(data))
      });
    }
    return () => {
      pusher.unsubscribe('chat');
      subscribe = false
    }
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    setMessage('')
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes();
    disPatch(sendMessage({ userName: user.userName, message, time }))
  }

  const getChatCard = (chat, index) => {
    return chat.userName === userName
      ? <div className='right' key={index}>
        <div className='right-msg'>
          <div>
            <span className='fw-bold'>You</span>
            <span className='text-muted ps-2'>{chat.time}</span>
          </div>
          {chat.message}
        </div>
      </div>
      : <div className='left' key={index}>
        <div className='left-msg'>
          <div>
            <span className='fw-bold'>{chat.userName.charAt(0).toUpperCase() + chat.userName.slice(1)}</span>
            <span className='text-muted ps-2'>{chat.time}</span>
          </div>
          {chat.message}
        </div>
      </div>
  }

  return (
    <div className='chat-container'>
      <div className='chat-panel-header'>
        <div className='left-side'>
          <img className='user-icon' src={user1} />
          <h3>Channel one</h3>
        </div>
        <div className='right-side d-none d-sm-inline-block'>
          <Button className='video-btn' variant='light'><CameraVideo size={15} /></Button>
          <Button className='call-btn' variant='light'><Telephone size={15} /></Button>
          <PersonPlus className='ms-3' size={18} />
        </div>
      </div>
      <div className='chat-panel'>
        <Form onSubmit={handleSumbit}>
          <Form.Control className='chat-input' value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type a new message" />
        </Form>
        <div>
          {chats.map((chat, index) => {
            return getChatCard(chat, index)
          })}
        </div>
      </div>
    </div>
  )
}

export default ChatWindow;