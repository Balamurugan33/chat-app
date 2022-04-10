import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

import { getUserDetais } from '../../store/chat/action'

import './index.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const error = useSelector(state => state.chat.error);
  const user = useSelector(state => state.chat.user);

  useEffect(() => {
    if (user) {
      navigate('home')
    }
  }, [user])

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName && password) {
      dispatch(getUserDetais({ userName, password }))
    }
  }

  return (
    <div className='login-container'>
      <Form className='login-form' onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" onChange={(e) => setUserName(e.target.value)} placeholder="User Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          {error &&  
            <Form.Text className="text-danger">
              { error }
            </Form.Text>
          }
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login;