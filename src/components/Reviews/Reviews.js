/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Datagrid,
  TextField,
  SimpleShowLayout,
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
  return (
    <span>{record ? `Ratings: ${record.firstname} ${record.rating}` : ''}</span>
  );
};

export const reviewsList = (props) => {
  return (
    <div>
      <List {...props} title="Reviews">
        <Datagrid rowClick="show">
          <TextField source="firstname" />
          <TextField source="lastname" />
          <TextField source="rating" />
          <TextField source="comment" />
          <TextField source="title" />
        </Datagrid>
      </List>
    </div>
  );
};

export const showReview = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="rating" />
        <TextField source="comment" />
        <TextField source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
