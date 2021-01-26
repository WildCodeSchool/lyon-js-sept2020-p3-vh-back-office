/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const userListDahsboard = (props) => {
  return (
    <div>
      <List
        {...props}
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <Datagrid rowClick="show">
          <TextField source="firstname" />
          <TextField source="lastname" />
        </Datagrid>
      </List>
    </div>
  );
};

export const reviewsListDashboard = (props) => {
  return (
    <div>
      <List
        {...props}
        title="Reviews"
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <Datagrid rowClick="show">
          <TextField source="title" />
          <TextField source="rating" />
        </Datagrid>
      </List>
    </div>
  );
};

export const messageListDashboard = (props) => {
  return (
    <div>
      <List
        {...props}
        title="Messages"
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <Datagrid rowClick="show">
          <TextField source="firstname" />
          <TextField source="lastname" />
          <TextField source="purpose" />
        </Datagrid>
      </List>
    </div>
  );
};
