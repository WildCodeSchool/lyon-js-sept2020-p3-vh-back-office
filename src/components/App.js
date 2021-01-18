import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import EmailIcon from '@material-ui/icons/Email';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import { messageList, createMessage, showMessage } from './contact/Contact';
import { sponsorsList, createSponsor } from './sponsors/Sponsors';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource
      options={{ label: 'Messages' }}
      name="contact"
      list={messageList}
      create={createMessage}
      show={showMessage}
      icon={EmailIcon}
    />
    <Resource name="sponsors" list={sponsorsList} create={createSponsor} />
  </Admin>
);

export default App;
