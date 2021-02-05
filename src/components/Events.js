/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Show,
  List,
  Edit,
  Datagrid,
  TextInput,
  Create,
  SimpleShowLayout,
  SelectInput,
  DateField,
  ImageInput,
  ImageField,
  TextField,
  SimpleForm,
  NumberField,
  FunctionField,
  DateInput,
  NumberInput,
  RichTextField,
  required,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { OnShowToolbar, CustomSlicedField } from '../services/Helpers';
import API from '../services/API';

const PostTitle = ({ record }) => {
  return <span>{record ? `Détail de l'évènement ${record.title} ` : ''}</span>;
};

export const EventList = (props) => {
  return (
    <div>
      <List {...props} title="Evénements">
        <Datagrid rowClick="show">
          <DateField source="date" />
          <TextField source="title" label="Evénement" />
          <NumberField source="price" label="Prix" min={0} />
          <CustomSlicedField label="Description" />
          <FunctionField
            label="Animateur"
            render={(record) => {
              return (
                <p style={{ width: '100px' }}>
                  {`${record.firstname} ${record.lastname}`}
                </p>
              );
            }}
          />
          <TextField source="duration_seconds" label="Durée (min)" />
          <FunctionField
            label="Adresse"
            render={(record) => {
              return (
                <p style={{ width: '200px' }}>
                  {`${record.street} ${record.city} ${record.zipcode}`}
                </p>
              );
            }}
          />
          <TextField source="availabilities" label="Dispos" />
          <TextField label="Vin" source="name" />
        </Datagrid>
      </List>
    </div>
  );
};

export const CreateEvent = (props) => {
  const [users, setUsers] = useState([]);
  const [adress, setAdress] = useState([]);
  const [wine, setWine] = useState([]);

  useEffect(() => {
    API.get('/users/animators').then((res) => setUsers(res.data));
  }, []);
  useEffect(() => {
    API.get('/adress').then((res) => setAdress(res.data));
  }, []);
  useEffect(() => {
    API.get('/products').then((res) => setWine(res.data));
  }, []);

  return (
    <div>
      <Create {...props} title="Créer un event">
        <SimpleForm>
          <DateInput source="date" validate={[required()]} />
          <TextInput source="title" label="Evénement" validate={[required()]} />
          <TextInput source="price" label="Prix" validate={[required()]} />
          <RichTextInput source="description" validate={[required()]} />
          <SelectInput
            validate={[required()]}
            label="Sélectionnez un animateur"
            source="moderator_id"
            choices={users}
            optionText={(record) => `${record.firstname} ${record.lastname}`}
          />
          <NumberInput
            source="duration_seconds"
            label="Durée (min)"
            min={0}
            validate={[required()]}
          />
          <ImageInput
            validate={[required()]}
            source="image"
            label="Aperçu de l'image"
            accept="image/*"
          >
            <ImageField source="src" title="title" />
          </ImageInput>
          <SelectInput
            validate={[required()]}
            source="address_id"
            label="Adresse"
            choices={adress}
            optionText={(record) =>
              `${record.street} ${record.zipcode} ${record.city}`
            }
          />
          <NumberInput
            validate={[required()]}
            source="availabilities"
            label="Places disponibles"
            min={0}
          />
          <SelectInput
            validate={[required()]}
            source="wine_id"
            choices={wine}
            optionText="name"
            label="Vin"
          />
        </SimpleForm>
      </Create>
    </div>
  );
};

export const ShowEvent = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<OnShowToolbar edit />}>
      <SimpleShowLayout>
        <DateField source="date" />
        <TextField source="title" label="Evénement" />
        <TextField source="price" label="Prix" />
        <RichTextField source="description" />
        <FunctionField
          label="Animateur"
          render={(record) => {
            return (
              <p>
                {record.firstname} {record.lastname}
              </p>
            );
          }}
        />
        <TextField source="duration_seconds" label="Durée (min)" />
        <FunctionField
          label="Aperçu de la photo"
          render={(record) => {
            return (
              <img
                style={{ width: '350px' }}
                alt={record.title}
                src={`${process.env.REACT_APP_API_BASE_URL}/${record.main_picture_url}`}
              />
            );
          }}
        />
        <FunctionField
          label="Adresse"
          render={(record) => {
            return (
              <p>
                {record.street} {record.zipcode} {record.city}
              </p>
            );
          }}
        />
        <TextField source="availabilities" label="Disponibilités" />
        <TextField source="name" label="Vin" />
      </SimpleShowLayout>
    </Show>
  );
};

export const EventEdit = (props) => {
  const [users, setUsers] = useState([]);
  const [adress, setAdress] = useState([]);
  const [wine, setWine] = useState([]);

  useEffect(() => {
    API.get('/users/animators').then((res) => setUsers(res.data));
  }, []);
  useEffect(() => {
    API.get('/adress').then((res) => setAdress(res.data));
  }, []);
  useEffect(() => {
    API.get('/products').then((res) => setWine(res.data));
  }, []);

  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <DateInput source="date" validate={[required()]} />
        <TextInput source="title" label="Evénement" validate={[required()]} />
        <NumberInput
          source="price"
          label="Prix"
          min={0}
          validate={[required()]}
        />
        <RichTextInput source="description" validate={[required()]} />
        <SelectInput
          validate={[required()]}
          label="Sélectionnez un animateur"
          source="moderator_id"
          choices={users}
          optionText={(record) => `${record.firstname} ${record.lastname}`}
        />
        <NumberInput
          source="duration_seconds"
          label="Durée (min)"
          validate={[required()]}
        />
        <FunctionField
          label="Aperçu de la photo actuelle"
          render={(record) => {
            return (
              <img
                style={{ width: '350px' }}
                alt={record.title}
                src={`${process.env.REACT_APP_API_BASE_URL}/${record.main_picture_url}`}
              />
            );
          }}
        />
        <ImageInput source="image" label="Modifier la photo" accept="image/*">
          <ImageField source="src" title="title" validate={[required()]} />
        </ImageInput>
        <SelectInput
          validate={[required()]}
          source="address_id"
          label="Adresse"
          choices={adress}
          optionText={(record) =>
            `${record.street} ${record.zipcode} ${record.city}`
          }
        />
        <NumberInput
          source="availabilities"
          label="Disponibilités"
          min={0}
          validate={[required()]}
        />
        <SelectInput
          validate={[required()]}
          source="wine_id"
          choices={wine}
          optionText="name"
          label="Vin"
        />
      </SimpleForm>
    </Edit>
  );
};
