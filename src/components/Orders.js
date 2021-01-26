/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleShowLayout,
  NumberField,
} from 'react-admin';
import { OnShowToolbar, CustomPagination } from '../services/Helpers';

const PostTitle = ({ record }) => {
  return <span>{record ? `Commande n°${record.order_id}` : ''}</span>;
};

export const ordersList = (props) => {
  return (
    <div>
      <List {...props} title="Commandes" pagination={<CustomPagination />}>
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
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar />}>
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
