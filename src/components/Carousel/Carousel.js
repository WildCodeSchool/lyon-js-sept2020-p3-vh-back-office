/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Datagrid,
  TextField,
  Create,
  SimpleShowLayout,
  TextInput,
  SimpleForm,
  TopToolbar,
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
  return <span>{record ? `Fiche détail de la photo ${record.name}` : ''}</span>;
};

export const carouselList = (props) => {
  return (
    <div>
      <List {...props} title="Carousel">
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="description" />
          <TextField source="image" />
        </Datagrid>
      </List>
    </div>
  );
};

export const createCarousel = (props) => {
  return (
    <div>
      <Create {...props} title="Ajouter une image">
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="description" />
          <TextInput source="image" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showCarousel = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="image" />
      </SimpleShowLayout>
    </Show>
  );
};
