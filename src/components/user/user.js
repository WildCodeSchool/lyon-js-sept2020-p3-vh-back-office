/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Edit,
  EditButton,
  Datagrid,
  TextInput,
  Create,
  SimpleShowLayout,
  TextField,
  SimpleForm,
  TopToolbar,
  ListButton,
  DeleteButton,
  FunctionField,
} from 'react-admin';
import { CustomSlicedField } from '../Toolbars';

// eslint-disable-next-line no-unused-vars
const PostShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ListButton basePath={basePath} />
    <EditButton basePath={basePath} record={data} />
    <DeleteButton basePath={basePath} record={data} />
  </TopToolbar>
);

const PostTitle = ({ record }) => {
  return (
    <span>
      {record ? `Message de ${record.firstname} ${record.lastname}` : ''}
    </span>
  );
};

export const userList = (props) => {
  return (
    <div>
      <List {...props} title="Utilisateurs">
        <Datagrid rowClick="show">
          <TextField source="firstname" label="Prenom" />
          <TextField source="lastname" label="Nom" />
          <TextField source="email" />
          <TextField source="phone_number" label="Téléphone" />
          <CustomSlicedField label="Bio" />
          <TextField source="role" label="Type utilisateur" />
          <FunctionField
            label="Lien vers la photo"
            render={(record) => {
              return (
                <a
                  href={`${process.env.REACT_APP_API_BASE_URL}/${record.photo_url}`}
                >
                  {record.photo_url}
                </a>
              );
            }}
          />
          <TextField source="website_url" label="Site web" />
          <TextField source="facebook_url" label="Facebook" />
          <TextField source="twitter_url" label="Twitter" />
          <TextField source="instagram_url" label="Instagram" />
        </Datagrid>
      </List>
    </div>
  );
};

export const createUser = (props) => {
  return (
    <div>
      <Create {...props} title="Créer un user">
        <SimpleForm>
          <TextInput source="firstname" />
          <TextInput source="lastname" />
          <TextInput source="email" />
          <TextInput source="password" />
          <TextInput source="password_confirmation" />
          <TextInput source="phone_number" />
          <TextInput source="bio" />
          <TextInput source="role" />
          <TextInput source="photo_url" />
          <TextInput source="website_url" />
          <TextInput source="facebook_url" />
          <TextInput source="twitter_url" />
          <TextInput source="instagram_url" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showUser = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="firstname" label="Prenom" />
        <TextField source="lastname" label="Nom" />
        <TextField source="email" />
        <TextField source="phone_number" label="Téléphone" />
        <TextField source="bio" />
        <TextField source="role" label="Type utilisateur" />
        <FunctionField
          label="Aperçu de la photo"
          render={(record) => {
            return (
              <img
                alt={record.lastname}
                src={`${process.env.REACT_APP_API_BASE_URL}/${record.photo_url}`}
              />
            );
          }}
        />
        <TextField source="website_url" label="Site web" />
        <TextField source="facebook_url" label="Facebook" />
        <TextField source="twitter_url" label="Twitter" />
        <TextField source="instagram_url" label="Instagram" />
      </SimpleShowLayout>
    </Show>
  );
};

export const userEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="password_confirmation" />
      <TextInput source="phone_number" />
      <TextInput source="bio" />
      <TextInput source="role" />
      <TextInput source="photo_url" />
      <TextInput source="website_url" />
      <TextInput source="facebook_url" />
      <TextInput source="twitter_url" />
      <TextInput source="instagram_url" />
    </SimpleForm>
  </Edit>
);
