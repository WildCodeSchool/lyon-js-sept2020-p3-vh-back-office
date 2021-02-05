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
  FunctionField,
  ImageInput,
  ImageField,
  required,
} from 'react-admin';
import {
  OnShowToolbar,
  CustomSlicedField,
  CustomPagination,
} from '../services/Helpers';

const PostTitle = ({ record }) => {
  return <span>{record ? `Fiche de la slide ${record.name}` : ''}</span>;
};

export const carouselList = (props) => {
  return (
    <div>
      <List {...props} title="Carousel" pagination={<CustomPagination />}>
        <Datagrid rowClick="show">
          <TextField source="name" label="Nom de la slide" />
          <CustomSlicedField label="Description (apparait sur la slide)" />
          <FunctionField
            label="Lien vers l'image"
            render={(record) => {
              return (
                <a
                  href={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
                >
                  {record.image}
                </a>
              );
            }}
          />
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
          <TextInput
            source="name"
            label="Nom de la slide"
            validate={[required()]}
          />
          <TextInput
            validate={[required()]}
            multiline
            source="description"
            label="Description (apparait sur la slide)"
          />
          <ImageInput
            source="image"
            label="Ajouter une image"
            accept="image/*"
            validate={[required()]}
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showCarousel = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar />}>
      <SimpleShowLayout>
        <TextField source="name" label="Nom de la slide" />
        <TextField
          source="description"
          label="Description (apparait sur la slide)"
        />
        <FunctionField
          label="Aperçu de l'image"
          render={(record) => {
            return (
              <img
                style={{ width: '500px' }}
                alt={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
                src={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
              />
            );
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};
