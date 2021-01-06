/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import API from '../../services/API';

const ContactList = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [contact, setContact] = useState();

  useEffect(() => {
    API.get('/contact').then((res) => setContact(res.data));
  }, []);

  return (
    <div>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="firstname" />
        </Datagrid>
      </List>
    </div>
  );
};

export default ContactList;
