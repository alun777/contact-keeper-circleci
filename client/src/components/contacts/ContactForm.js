import React, { useState, useContext, useEffect, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';

import { Form } from 'semantic-ui-react';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <Form onSubmit={onSubmit}>
        <h3>{current ? 'Edit Contact' : 'Add Contact'}</h3>
        <Form.Field>
          <label>Name</label>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            type='text'
            placeholder='Phone'
            name='phone'
            value={phone}
            onChange={onChange}
          />
        </Form.Field>

        <div class='inline '>
          <label>Contact Type &nbsp;</label>
          <input
            type='radio'
            name='type'
            value='personal'
            checked={type === 'personal'}
            onChange={onChange}
          />
          &nbsp; Personal &nbsp;
          <input
            type='radio'
            name='type'
            value='professional'
            checked={type === 'professional'}
            onChange={onChange}
          />
          &nbsp; Professional
        </div>
        <button
          className='ui fluid button blue basic'
          type='submit'
          style={{ margin: '20px auto 20px' }}
        >
          {current ? 'Update Contact' : 'Add Contact'}
        </button>
        {current && (
          <div>
            <button className='ui fluid button red basic' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </Form>
    </Fragment>
  );
};

export default ContactForm;
