/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Datagrid,
  TextField,
  ChipField,
  SimpleShowLayout,
  EmailField,
} from 'react-admin';
import CustomPagination from '../Pagination';
import { OnListToolbar, OnShowToolbar, CustomSlicedField } from '../Toolbars';

const PostTitle = ({ record }) => {
  return (
    <span>
      {record ? `Message de ${record.firstname} ${record.lastname}` : ''}
    </span>
  );
};

export const messageList = (props) => {
  return (
    <div>
      <List
        {...props}
        pagination={<CustomPagination />}
        title="Messages"
        actions={<OnListToolbar create={false} />}
      >
        <Datagrid rowClick="show">
          <TextField source="firstname" label="Prénom" />
          <TextField source="lastname" label="Nom" />
          <EmailField source="email" />
          <ChipField source="purpose" label="Sujet" />
          <CustomSlicedField label="Message" />
        </Datagrid>
      </List>
    </div>
  );
};

export const showMessage = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar />}>
      <SimpleShowLayout>
        <TextField source="firstname" label="Prénom" />
        <TextField source="lastname" label="Nom" />
        <EmailField source="email" />
        <TextField source="purpose" label="Sujet" />
        <TextField source="message" />
      </SimpleShowLayout>
    </Show>
  );
};
