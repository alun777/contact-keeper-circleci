import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import styled from 'styled-components';

import { Button, Checkbox, Form, Header } from 'semantic-ui-react';

const Span = styled.span`
  margin: 0 0.5rem;
`;

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/home');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <Header as='h1'>Account Login</Header>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Email Address</label>
          <input
            placeholder='Email Address'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Login</Button>
        <Span>or</Span>
        <Button as={Link} to='/register'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Login;
