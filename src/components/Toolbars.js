/* eslint-disable react/jsx-props-no-spreading */
import {
  TopToolbar,
  ListButton,
  DeleteButton,
  CreateButton,
  ExportButton,
  useListContext,
  BulkDeleteButton,
} from 'react-admin';

export const OnListToolbar = (props) => {
  const { create } = props;
  const { basePath } = useListContext();
  return (
    <TopToolbar>
      {create && <CreateButton basePath={basePath} />}
      <ExportButton label="Exporter les données" />
    </TopToolbar>
  );
};

export const OnShowToolbar = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Retour à la liste" />
    <DeleteButton basePath={basePath} record={data} label="Supprimer" />
  </TopToolbar>
);

export const BulkActionButtons = (props) => (
  <>
    <BulkDeleteButton {...props} label="Supprimer" />
  </>
);
