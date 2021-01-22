/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Show,
  List,
  Edit,
  EditButton,
  Datagrid,
  TextInput,
  Create,
  SimpleShowLayout,
  SelectInput,
  DateField,
  TextField,
  UrlField,
  SimpleForm,
  TopToolbar,
  ListButton,
  DeleteButton,
} from 'react-admin';
import API from '../../services/API';

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

export const EventList = (props) => {
  return (
    <div>
      <List {...props}>
        <Datagrid rowClick="show">
          <DateField source="date" />
          <TextField source="title" />
          <TextField source="price" />
          <TextField source="description" />
          <TextField label="id" source="firstname" />
          <TextField source="duration_seconds" />
          <UrlField source="main_picture_url" />
          <TextField label="rue" source="street" />
          <TextField source="availabilities" />
          <TextField label="vin" source="name" />
        </Datagrid>
      </List>
    </div>
  );
};

export const CreateEvent = (props) => {
  const [users, setUsers] = useState([]);
  const [adress, setAdress] = useState([]);
  const [wine, setWine] = useState([]);

  useEffect(() => {
    API.get('/users/animators').then((res) => setUsers(res.data));
  }, []);
  useEffect(() => {
    API.get('/adress').then((res) => setAdress(res.data));
  }, []);
  useEffect(() => {
    API.get('/products').then((res) => setWine(res.data));
  }, []);

  return (
    <div>
      <Create {...props} title="Créer un event">
        <SimpleForm>
          <TextInput source="date" />
          <TextInput source="title" />
          <TextInput source="price" />
          <TextInput source="description" />
          <SelectInput
            source="moderator_id"
            choices={users}
            optionText="role"
          />
          <TextInput source="duration_seconds" />
          <TextInput source="main_picture_url" />
          <SelectInput source="address_id" choices={adress} optionText="city" />
          <TextInput source="availabilities" />
          <SelectInput source="wine_id" choices={wine} optionText="name" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const ShowEvent = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="date" />
        <TextField source="title" />
        <TextField source="price" />
        <TextField source="description" />
        <TextField source="moderator_id" />
        <TextField source="duration_seconds" />
        <TextField source="main_picture_url" />
        <TextField source="address_id" />
        <TextField source="availabilities" />
        <TextField source="wine_id" />
      </SimpleShowLayout>
    </Show>
  );
};

export const EventEdit = (props) => {
  const [users, setUsers] = useState([]);
  const [adress, setAdress] = useState([]);
  const [wine, setWine] = useState([]);

  useEffect(() => {
    API.get('/users').then((res) => setUsers(res.data));
  }, []);
  useEffect(() => {
    API.get('/adress').then((res) => setAdress(res.data));
  }, []);
  useEffect(() => {
    API.get('/products').then((res) => setWine(res.data));
  }, []);

  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput source="date" />
        <TextInput source="title" />
        <TextInput source="price" />
        <TextInput source="description" />
        <SelectInput source="moderator_id" choices={users} optionText="email" />
        <TextInput source="duration_seconds" />
        <TextInput source="main_picture_url" />
        <SelectInput source="address_id" choices={adress} optionText="city" />
        <TextInput source="availabilities" />
        <SelectInput source="wine_id" choices={wine} optionText="name" />
      </SimpleForm>
    </Edit>
  );
};
