/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Edit,
  Datagrid,
  TextField,
  Create,
  SimpleShowLayout,
  TextInput,
  SimpleForm,
  TopToolbar,
  ListButton,
  EditButton,
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
      {record ? `Fiche détail du ${record.cepage} ${record.name}` : ''}
    </span>
  );
};

export const wineList = (props) => {
  return (
    <div>
      <List {...props} title="Wines">
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="vigneron" />
          <TextField source="cepage" />
          <TextField source="arome" />
          <TextField source="price" />
          <TextField source="sommelier" />
          <TextField source="image" />
          <TextField source="website" />
          <TextField source="specificities" />
          <TextField source="producteur" />
        </Datagrid>
      </List>
    </div>
  );
};

export const createWine = (props) => {
  return (
    <div>
      <Create {...props} title="Ajouter un vin">
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="vigneron" />
          <TextInput source="cepage" />
          <TextInput source="arome" />
          <TextInput source="price" />
          <TextInput source="sommelier" />
          <TextInput source="image" />
          <TextInput source="website" />
          <TextInput source="specificities" />
          <TextInput source="producteur" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showWine = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="vigneron" />
        <TextField source="cepage" />
        <TextField source="arome" />
        <TextField source="price" />
        <TextField source="sommelier" />
        <TextField source="image" />
        <TextField source="website" />
        <TextField source="specificities" />
        <TextField source="producteur" />
      </SimpleShowLayout>
    </Show>
  );
};

export const wineEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="vigneron" />
      <TextInput source="cepage" />
      <TextInput source="arome" />
      <TextInput source="price" />
      <TextInput source="sommelier" />
      <TextInput source="image" />
      <TextInput source="website" />
      <TextInput source="specificities" />
      <TextInput source="producteur" />
    </SimpleForm>
  </Edit>
);
