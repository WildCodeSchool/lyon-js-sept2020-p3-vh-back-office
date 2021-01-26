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
  RichTextField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { OnShowToolbar, CustomPagination } from './Helpers';

const PostTitle = ({ record }) => {
  return <span>{record ? record.faq_title : ''}</span>;
};

export const faqList = (props) => {
  return (
    <div>
      <List {...props} title="FAQ" pagination={<CustomPagination />}>
        <Datagrid rowClick="show">
          <TextField source="faq_title" label="Question" />
          <RichTextField source="faq_content" label="Réponse" />
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
          <TextInput source="faq_title" label="Question" />
          <RichTextInput source="faq_content" label="Réponse" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showFaq = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar edit />}>
      <SimpleShowLayout>
        <TextField source="faq_title" label="Question" />
        <RichTextField source="faq_content" label="Réponse" />
      </SimpleShowLayout>
    </Show>
  );
};

export const faqEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="faq_title" label="Question" />
      <RichTextInput source="faq_content" label="Réponse" />
    </SimpleForm>
  </Edit>
);
