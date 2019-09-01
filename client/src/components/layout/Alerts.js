import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

import { Message, Icon } from 'semantic-ui-react';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id}>
        <Message error header='Something wrong...'>
          <Icon name='warning circle' />
          {alert.message}
        </Message>
      </div>
    ))
  );
};

export default Alerts;
