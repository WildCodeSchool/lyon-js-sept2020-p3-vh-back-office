import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import { messageList, createMessage, showMessage } from './contact/Contact';
import { userList, showUser, createUser, userEdit } from './user/user';

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
    <Resource
      options={{ label: 'Users' }}
      name="users"
      list={userList}
      create={createUser}
      show={showUser}
      edit={userEdit}
      icon={PersonIcon}
    />
  </Admin>
);

export default App;
