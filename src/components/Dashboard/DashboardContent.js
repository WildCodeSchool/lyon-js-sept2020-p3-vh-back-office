/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, Datagrid, TextField, DateField, SimpleList } from 'react-admin';

export const userListDahsboard = (props) => {
  return (
    <div>
      <List
        {...props}
        title=" "
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <Datagrid
          rowClick={(id, basepath, record) => `/users/${record.id}/show`}
        >
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
        title=" "
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <SimpleList
          rowClick={(id, basepath, record) => `/reviews/${record.id}/show`}
        >
          <TextField source="title" />
          <TextField source="rating" />
        </SimpleList>
      </List>
    </div>
  );
};

export const messageListDashboard = (props) => {
  return (
    <div>
      <List
        {...props}
        /* ---------------- title = title displayed on the 'dashboard' menu --------------- */
        title="Bienvenue sur le dashboard d'Hypnose & Vins"
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <Datagrid
          rowClick={(id, basepath, record) => `/contact/${record.id}/show`}
        >
          <TextField source="firstname" />
          <TextField source="lastname" />
          <TextField source="purpose" />
        </Datagrid>
      </List>
    </div>
  );
};

export const EventListDashboard = (props) => {
  return (
    <div>
      <List
        {...props}
        title=" "
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <Datagrid
          rowClick={(id, basepath, record) => `/events/${record.id}/show`}
        >
          <TextField source="title" />
          <DateField source="date" />
          <TextField label="id" source="firstname" />
          <TextField label="rue" source="city" />
          <TextField source="availabilities" />
        </Datagrid>
      </List>
    </div>
  );
};
