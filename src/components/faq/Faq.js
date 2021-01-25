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
  return <span>{record ? `Titre : ${record.faq_title}` : ''}</span>;
};

export const faqList = (props) => {
  return (
    <div>
      <List {...props} title="FAQ">
        <Datagrid rowClick="show">
          <TextField source="faq_title" />
          <TextField source="faq_content" />
        </Datagrid>
      </List>
    </div>
  );
};

export const createFaq = (props) => {
  return (
    <div>
      <Create {...props} title="Créer une question">
        <SimpleForm>
          <TextInput source="faq_title" />
          <TextInput source="faq_content" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showFaq = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="faq_title" />
        <TextField source="faq_content" />
      </SimpleShowLayout>
    </Show>
  );
};

export const faqEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="faq_title" />
      <TextInput source="faq_content" />
    </SimpleForm>
  </Edit>
);
