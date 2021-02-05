/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  SimpleShowLayout,
  TextInput,
  SimpleForm,
  required,
} from 'react-admin';
import { OnShowToolbar } from '../services/Helpers';

const PostTitle = ({ record }) => {
  return (
    <span>
      {record
        ? `Fiche de l'adresse :  ${record.street} ${record.zipcode} ${record.city}`
        : ''}
    </span>
  );
};

export const addressList = (props) => {
  return (
    <div>
      <List {...props} title="Avis clients">
        <Datagrid rowClick="show">
          <TextField source="street" label="Rue" />
          <TextField source="zipcode" label="Code postal" />
          <TextField source="city" label="Ville" />
        </Datagrid>
      </List>
    </div>
  );
};

export const addressShow = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar edit />}>
      <SimpleShowLayout>
        <TextField source="street" label="Rue" />
        <TextField source="zipcode" label="Code postal" />
        <TextField source="city" label="Ville" />
      </SimpleShowLayout>
    </Show>
  );
};

export const addressCreate = (props) => {
  return (
    <Create title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput source="street" label="Rue" validate={[required()]} />
        <TextInput
          source="zipcode"
          label="Code postal"
          validate={[required()]}
        />
        <TextInput source="city" label="Ville" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export const addressEdit = (props) => {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput source="street" label="Rue" validate={[required()]} />
        <TextInput
          source="zipcode"
          label="Code postal"
          validate={[required()]}
        />
        <TextInput source="city" label="Ville" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
