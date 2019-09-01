import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

import { Input } from 'semantic-ui-react';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef(null);

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (e.target.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <Input
        fluid
        icon='search'
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
        style={{ marginBottom: '1rem' }}
      />
    </form>
  );
};

export default ContactFilter;
