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
  required,
} from 'react-admin';
import { OnShowToolbar } from '../services/Helpers';

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
          <TextField source="name" label="Nom" />
          <TextField source="vigneron" />
          <TextField source="cepage" />
          <TextField source="arome" label="Arômes" />
          <NumberField source="price" label="Prix" />
          <TextField source="sommelier" />
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
          <TextInput source="name" validate={[required()]} />
          <TextInput source="vigneron" validate={[required()]} />
          <TextInput source="cepage" validate={[required()]} />
          <TextInput source="arome" label="Arômes" validate={[required()]} />
          <NumberInput source="price" label="Prix" validate={[required()]} />
          <TextInput source="sommelier" validate={[required()]} />
          <ImageInput
            source="image"
            label="Aperçu de l'image"
            accept="image/*"
            validate={[required()]}
          >
            <ImageField source="src" title="title" />
          </ImageInput>
          <TextInput source="website" label="Site du producteur" />
          <TextInput source="specificities" label="Spécificités" />
          <TextInput source="producteur" validate={[required()]} />
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
      <TextInput source="name" validate={[required()]} />
      <TextInput source="vigneron" validate={[required()]} />
      <TextInput source="cepage" validate={[required()]} />
      <TextInput source="arome" label="Arômes" validate={[required()]} />
      <NumberInput source="price" label="Prix" validate={[required()]} />
      <TextInput source="sommelier" validate={[required()]} />
      <FunctionField
        label="Aperçu de l'image actuelle"
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
      <TextInput source="producteur" validate={[required()]} />
    </SimpleForm>
  </Edit>
);
