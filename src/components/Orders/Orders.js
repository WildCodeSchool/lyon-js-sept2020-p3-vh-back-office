/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleShowLayout,
  TopToolbar,
  NumberField,
  ListButton,
  DeleteButton,
} from 'react-admin';

// eslint-disable-next-line no-unused-vars
const PostShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ListButton basePath={basePath} />
    <DeleteButton basePath={basePath} record={data} />
  </TopToolbar>
);

const PostTitle = ({ record }) => {
  return <span>{record ? `Commande n°${record.order_id}` : ''}</span>;
};

export const ordersList = (props) => {
  return (
    <div>
      <List {...props} title="Commandes">
        <Datagrid rowClick="show">
          <TextField source="order_id" label="Numéro de commande" />
          <TextField source="firstname" label="Prénom" />
          <TextField source="lastname" label="Nom" />
          <EmailField source="email" />
          <TextField source="title" label="Evènement" />
          <NumberField source="event_quantity" label="Places réservées" />
        </Datagrid>
      </List>
    </div>
  );
};

export const showOrder = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="order_id" label="Numéro de commande" />
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" />
        <TextField source="title" label="Evènement" />
        <NumberField source="event_quantity" label="Places réservées" />
      </SimpleShowLayout>
    </Show>
  );
};
