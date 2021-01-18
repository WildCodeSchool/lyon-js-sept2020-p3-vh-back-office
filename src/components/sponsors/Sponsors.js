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
  return <span>{record ? `Sponsors ${record.name} ` : ''}</span>;
};

export const sponsorsList = (props) => {
  return (
    <div>
      <List {...props} title="Sponsors">
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="image" />
        </Datagrid>
      </List>
    </div>
  );
};

export const createSponsor = (props) => {
  return (
    <div>
      <Create {...props} title="Créer un sponsor">
        <SimpleForm>
          <TextInput source="name" />
          <TextInput source="image" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showSponsors = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="image" />
      </SimpleShowLayout>
    </Show>
  );
};
