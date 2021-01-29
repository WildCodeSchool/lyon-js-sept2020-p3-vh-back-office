/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const userListDashboard = (props) => {
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
          <TextField source="firstname" label="Prénom" />
          <TextField source="lastname" label="Nom" />
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
        <Datagrid
          rowClick={(id, basepath, record) => {
            return `/reviews/${record.id}/show`;
          }}
        >
          <TextField source="title" label="Événement" />
          <TextField source="rating" label="Note" />
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
        /* ---------------- title = title displayed on the 'dashboard' menu --------------- */
        title="Bienvenue sur le dashboard d'Hypnose & Vins"
        actions={false}
        bulkActionButtons={false}
        pagination={false}
      >
        <Datagrid
          rowClick={(id, basepath, record) => `/contact/${record.id}/show`}
        >
          <TextField source="firstname" label="Prénom" />
          <TextField source="lastname" label="Nom" />
          <TextField source="purpose" label="Sujet" />
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
          <TextField source="title" label="Événement" />
          <DateField source="date" label="Date" />
          <TextField label="Animateur" source="firstname" />
          <TextField label="Ville" source="city" />
          <TextField source="availabilities" label="Places disponibles" />
        </Datagrid>
      </List>
    </div>
  );
};
