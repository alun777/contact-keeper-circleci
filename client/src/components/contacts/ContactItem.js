import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

import { Button, Card, Label } from 'semantic-ui-react';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header></Card.Header>
            <Label color='blue' image size='large'>
              {name}
              <Label.Detail>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Label.Detail>
            </Label>

            <Card.Description>
              <ul className='list' style={{ margin: '1rem 0 0 0.3rem' }}>
                {email && (
                  <li>
                    <i className='fas fa-envelope-open' /> {email}
                  </li>
                )}
                {phone && (
                  <li>
                    <i className='fas fa-phone' /> {phone}
                  </li>
                )}
              </ul>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons mini'>
              <Button basic color='green' onClick={() => setCurrent(contact)}>
                Edit
              </Button>
              <Button basic color='red' onClick={onDelete}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
