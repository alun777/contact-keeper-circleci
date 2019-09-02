import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

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
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <div
        className='ui icon input'
        style={{ marginBottom: '1rem', width: '100%' }}
      >
        <input
          icon='search'
          ref={text}
          type='text'
          placeholder='Filter Contacts...'
          onChange={onChange}
        />
        <i aria-hidden='true' className='search icon'></i>
      </div>
    </form>
  );
};

export default ContactFilter;
