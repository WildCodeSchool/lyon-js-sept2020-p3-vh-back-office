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
      <ExportButton />
    </TopToolbar>
  );
};

export const OnShowToolbar = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} />
    <DeleteButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const BulkActionButtons = (props) => (
  <>
    <BulkDeleteButton {...props} label="Supprimer" />
  </>
);

export const CustomSlicedField = ({ record }) => {
  if (record.message) {
    return record ? (
      <span>
        {record.message.length > 20
          ? `${record.message.slice(0, 20)} ...`
          : record.message}
      </span>
    ) : null;
  }
  if (record.bio) {
    return record ? (
      <span style={{ width: '200px' }}>
        {record.bio.length > 20 ? `${record.bio.slice(0, 20)} ...` : record.bio}
      </span>
    ) : null;
  }
  return null;
};
