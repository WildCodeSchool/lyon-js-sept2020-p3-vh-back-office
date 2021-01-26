/* eslint-disable react/jsx-wrap-multilines */
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
  ImageInput,
  ImageField,
  SimpleForm,
  TopToolbar,
  FunctionField,
  ListButton,
  DeleteButton,
  CreateButton,
  ExportButton,
  useListContext,
} from 'react-admin';

const ListActions = () => {
  const { basePath } = useListContext();
  return (
    <TopToolbar>
      <CreateButton basePath={basePath} label="Créer un partenaire" />
      <ExportButton label="Exporter les données" />
    </TopToolbar>
  );
};

// eslint-disable-next-line no-unused-vars
const PostShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Retour à la liste" />
    <DeleteButton basePath={basePath} record={data} label="Supprimer" />
  </TopToolbar>
);

const PostTitle = ({ record }) => {
  return <span>{record ? `Sponsors ${record.name} ` : ''}</span>;
};

export const sponsorsList = (props) => {
  return (
    <div>
      <List {...props} title="Sponsors" actions={<ListActions />}>
        <Datagrid rowClick="show">
          <TextField source="name" label="Nom du partenaire" />
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

export const createSponsor = (props) => {
  return (
    <div>
      <Create {...props} title="Créer un sponsor">
        <SimpleForm>
          <TextInput source="name" label="Nom du partenaire" />
          <ImageInput
            source="image"
            label="Aperçu de l'image"
            accept="image/*"
            placeholder={
              <p>
                Vous pouvez glisser/déposer un fichier ici ou cliquer pour
                parcourir
              </p>
            }
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleForm>
      </Create>
    </div>
  );
};

export const showSponsors = (props) => {
  return (
    <Show title={<PostTitle />} {...props} actions={<PostShowActions />}>
      <SimpleShowLayout>
        <TextField source="name" label="Nom du partenaire" />
        <FunctionField
          label="Aperçu de l'image"
          render={(record) => {
            return (
              typeof record.image === 'string' && (
                <img
                  alt={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
                  src={`${process.env.REACT_APP_API_BASE_URL}/${record.image}`}
                />
              )
            );
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};
