/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Show,
  List,
  Edit,
  Datagrid,
  TextInput,
  Create,
  SimpleShowLayout,
  TextField,
  SimpleForm,
  FunctionField,
  // UrlField,
  EmailField,
  PasswordInput,
  ImageInput,
  ImageField,
  AutocompleteInput,
} from 'react-admin';
import { CustomSlicedField, OnShowToolbar, CustomPagination } from './Helpers';

const Title = ({ record }) => {
  return (
    <span>
      {record ? `Utilisateur ${record.firstname} ${record.lastname}` : ''}
    </span>
  );
};

export const userList = (props) => {
  return (
    <div>
      <List {...props} title="Utilisateurs" pagination={<CustomPagination />}>
        <Datagrid rowClick="show">
          <TextField source="firstname" label="Prenom" />
          <TextField source="lastname" label="Nom" />
          <EmailField source="email" />
          <TextField source="phone_number" label="Téléphone" />
          <CustomSlicedField label="Bio" />
          <TextField source="role" label="Type utilisateur" />
          <FunctionField
            label="Lien vers la photo"
            render={(record) => {
              return (
                <a
                  href={`${process.env.REACT_APP_API_BASE_URL}/${record.photo_url}`}
                >
                  {record.photo_url}
                </a>
              );
            }}
          />
          {/* <UrlField source="website_url" label="Site web" />
          <UrlField source="facebook_url" label="Facebook" />
          <UrlField source="twitter_url" label="Twitter" />
          <UrlField source="instagram_url" label="Instagram" /> */}
        </Datagrid>
      </List>
    </div>
  );
};

export const createUser = (props) => {
  return (
    <div>
      <Create {...props} title="Créer un user">
        <SimpleForm>
          <TextInput source="firstname" label="Prenom" />
          <TextInput source="lastname" label="Nom" />
          <TextInput source="email" />
          <PasswordInput source="password" label="Mot de passe" />
          <PasswordInput
            source="password_confirmation"
            label="Confirmer le mot de passe"
          />
          <TextInput source="phone_number" label="Téléphone" />
          <TextInput source="bio" />
          <AutocompleteInput
            source="role"
            choices={[
              { id: 'animator', name: 'Animateur' },
              { id: 'customer', name: 'Client' },
            ]}
          />
          <ImageInput
            source="image"
            label="Aperçu de l'image"
            accept="image/*"
            placeholder={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <p>
                Vous pouvez glisser/déposer un fichier ici ou cliquer pour
                parcourir
              </p>
            }
          >
            <ImageField source="src" title="title" />
          </ImageInput>
          <TextInput source="website_url" label="Site web" />
          <TextInput source="facebook_url" label="Facebook" />
          <TextInput source="twitter_url" label="Twitter" />
          <TextInput source="instagram_url" label="Instagram" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showUser = (props) => {
  return (
    <Show title={<Title />} {...props} actions={<OnShowToolbar edit />}>
      <SimpleShowLayout>
        <TextField source="firstname" label="Prenom" />
        <TextField source="lastname" label="Nom" />
        <TextField source="email" />
        <TextField source="phone_number" label="Téléphone" />
        <TextField source="bio" />
        <TextField source="role" label="Type utilisateur" />
        <FunctionField
          label="Aperçu de la photo"
          render={(record) => {
            return (
              <img
                alt={record.lastname}
                src={`${process.env.REACT_APP_API_BASE_URL}/${record.photo_url}`}
              />
            );
          }}
        />
        <TextField source="website_url" label="Site web" />
        <TextField source="facebook_url" label="Facebook" />
        <TextField source="twitter_url" label="Twitter" />
        <TextField source="instagram_url" label="Instagram" />
      </SimpleShowLayout>
    </Show>
  );
};

export const userEdit = (props) => (
  <Edit title={<Title />} {...props}>
    <SimpleForm>
      <TextInput source="firstname" label="Prenom" />
      <TextInput source="lastname" label="Nom" />
      <TextInput source="email" />
      <TextInput source="phone_number" />
      <TextInput source="bio" />
      <TextInput source="role" label="Type utilisateur" />
      <ImageInput
        source="image"
        label="Aperçu de l'image"
        accept="image/*"
        placeholder={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <p>
            Vous pouvez glisser/déposer un fichier ici ou cliquer pour parcourir
          </p>
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="website_url" label="Site web" />
      <TextInput source="facebook_url" label="Facebook" />
      <TextInput source="twitter_url" label="Twitter" />
      <TextInput source="instagram_url" label="Instagram" />
    </SimpleForm>
  </Edit>
);
