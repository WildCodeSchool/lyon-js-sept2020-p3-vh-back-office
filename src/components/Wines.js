/* eslint-disable react/jsx-wrap-multilines */
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
  NumberField,
  UrlField,
  FunctionField,
  ImageInput,
  ImageField,
  NumberInput,
} from 'react-admin';
import { CustomPagination, OnShowToolbar } from './Helpers';

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
      <List {...props} title="Wines" pagination={<CustomPagination />}>
        <Datagrid rowClick="show">
          <TextField source="name" label="Nom" />
          <TextField source="vigneron" />
          <TextField source="cepage" />
          <TextField source="arome" label="Arômes" />
          <NumberField source="price" label="Prix" />
          <TextField source="sommelier" />
          <FunctionField
            label="Lien vers l'image"
            render={(record) => {
              return (
                typeof record.image === 'string' && (
                  <a
                    href={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
                  >
                    {record.image}
                  </a>
                )
              );
            }}
          />
          <UrlField source="website" label="Site du producteur" />
          <TextField source="specificities" label="Spécificités" />
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
          <ImageInput source="image" label="Aperçu de l'image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
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
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar edit />}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="vigneron" />
        <TextField source="cepage" />
        <TextField source="arome" label="Arômes" />
        <NumberField source="price" label="Prix" />
        <TextField source="sommelier" />
        <FunctionField
          label="Aperçu de l'image"
          render={(record) => {
            return (
              <img
                alt={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
                src={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
              />
            );
          }}
        />
        <TextField source="website" label="Site du producteur" />
        <TextField source="specificities" label="Spécificités" />
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
      <TextInput source="arome" label="Arômes" />
      <NumberInput source="price" label="Prix" />
      <TextInput source="sommelier" />
      <FunctionField
        label="Aperçu de l'image actuelle'"
        render={(record) => {
          return (
            <img
              alt={record.name}
              src={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
            />
          );
        }}
      />
      <ImageInput source="image" label="Changer d'image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="website" label="Site du producteur" />
      <TextInput source="specificities" label="Spécificités" />
      <TextInput source="producteur" />
    </SimpleForm>
  </Edit>
);
