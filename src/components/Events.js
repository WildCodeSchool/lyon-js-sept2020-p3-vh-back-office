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
  ImageInput,
  ImageField,
  TextField,
  UrlField,
  SimpleForm,
  TopToolbar,
  ListButton,
  DeleteButton,
  NumberField,
  FunctionField,
} from 'react-admin';
import API from '../services/API';
import {
  // OnListToolbar,
  // OnShowToolbar,
  CustomSlicedField,
  CustomPagination,
} from './Helpers';

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
      <List {...props} pagination={<CustomPagination />}>
        <Datagrid rowClick="show">
          <DateField source="date" />
          <TextField source="title" label="Evénement" />
          <NumberField source="price" label="Prix" />
          <CustomSlicedField label="Description" />
          <FunctionField
            label="Animateur"
            render={(record) => {
              return (
                <p style={{ width: '100px' }}>
                  {`${record.firstname} ${record.lastname}`}
                </p>
              );
            }}
          />
          <TextField source="duration_seconds" label="Durée (min)" />
          <UrlField source="main_picture_url" />
          <FunctionField
            label="Adresse"
            render={(record) => {
              return (
                <p style={{ width: '200px' }}>
                  {`${record.street} ${record.city} ${record.zipcode}`}
                </p>
              );
            }}
          />
          <TextField source="availabilities" label="Dispos" />
          <TextField label="Vin" source="name" />
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
          <ImageInput
            source="image"
            label="Aperçu de l'image"
            accept="image/*"
            placeholder={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <p>
                Vous pouvez glisser/déposer un fichier ici ou cliquer pour
                parcourir
              </p>
            }
          >
            <ImageField source="src" title="title" />
          </ImageInput>
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
        <DateField source="date" />
        <TextField source="title" label="Evénement" />
        <TextField source="price" label="Prix" />
        <TextField source="description" />
        <TextField source="moderator_id" />
        <TextField source="duration_seconds" label="Durée (min)" />
        <TextField source="main_picture_url" label="Photo de l'éveénement" />
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
        <ImageInput
          source="image"
          label="Aperçu de l'image"
          accept="image/*"
          placeholder={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Vous pouvez glisser/déposer un fichier ici ou cliquer pour
              parcourir
            </p>
          }
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <SelectInput source="address_id" choices={adress} optionText="city" />
        <TextInput source="availabilities" />
        <SelectInput source="wine_id" choices={wine} optionText="name" />
      </SimpleForm>
    </Edit>
  );
};
