/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Datagrid,
  TextField,
  SimpleShowLayout,
  ChipField,
  EmailField,
} from 'react-admin';
import { OnShowToolbar, CustomSlicedField, CustomPagination } from './Helpers';

const PostTitle = ({ record }) => {
  return (
    <span>
      {record ? `Avis de ${record.firstname} ${record.lastname}` : ''}
    </span>
  );
};

export const reviewsList = (props) => {
  return (
    <div>
      <List {...props} title="Avis clients" pagination={<CustomPagination />}>
        <Datagrid rowClick="show">
          <TextField source="firstname" label="Prénom" />
          <TextField source="lastname" label="Nom" />
          <EmailField source="email" />
          <ChipField source="rating" label="Note" />
          <CustomSlicedField label="Commentaire" />
          <TextField source="title" label="Evénement" />
        </Datagrid>
      </List>
    </div>
  );
};

export const showReview = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar />}>
      <SimpleShowLayout>
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" />
        <TextField source="rating" label="Note" />
        <TextField source="comment" label="Commentaire" />
        <TextField source="title" label="Evénement" />
      </SimpleShowLayout>
    </Show>
  );
};
