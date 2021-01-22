/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

// eslint-disable-next-line
export const wineListDashboard = (props) => {
  return (
    <div>
      <List {...props} title="Wines">
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="vigneron" />
          <TextField source="cepage" />
        </Datagrid>
      </List>
    </div>
  );
};

export const userListDahsboard = (props) => {
  return (
    <div>
      <List {...props} title="user">
        <Datagrid rowClick="show">
          <TextField source="firstname" />
          <TextField source="lastname" />
          <TextField source="email" />
        </Datagrid>
      </List>
    </div>
  );
};
