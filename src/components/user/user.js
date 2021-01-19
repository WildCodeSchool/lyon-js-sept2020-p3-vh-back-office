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
} from 'react-admin';

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
      <List {...props} title="user">
        <Datagrid rowClick="show">
          <TextField source="firstname" />
          <TextField source="lastname" />
          <TextField source="email" />
          <TextField source="password" />
          <TextField source="password_confirmation" />
          <TextField source="phone_number" />
          <TextField source="bio" />
          <TextField source="role" />
          <TextField source="photo_url" />
          <TextField source="website_url" />
          <TextField source="facebook_url" />
          <TextField source="twitter_url" />
          <TextField source="instagram_url" />
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
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="email" />
        <TextField source="password" />
        <TextField source="password_confirmation" />
        <TextField source="phone_number" />
        <TextField source="bio" />
        <TextField source="role" />
        <TextField source="photo_url" />
        <TextField source="website_url" />
        <TextField source="facebook_url" />
        <TextField source="twitter_url" />
        <TextField source="instagram_url" />
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
