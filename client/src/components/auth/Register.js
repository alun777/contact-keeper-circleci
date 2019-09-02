import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import styled from 'styled-components';

import { Button, Form, Header } from 'semantic-ui-react';

const Div = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 0 2rem;
`;

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <Div>
      <Header as='h1' textAlign='center'>
        Account Register
      </Header>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder='Name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <input
            placeholder='Email Address'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
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
            required
            minLength='6'
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            placeholder='Confirm Password'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </Form.Field>
        <Button type='submit'>Register</Button>
      </Form>
    </Div>
  );
};

export default Register;
