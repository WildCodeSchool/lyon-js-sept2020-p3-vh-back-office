/* eslint-disable react/jsx-props-no-spreading */
import {
  Pagination,
  TopToolbar,
  ListButton,
  DeleteButton,
  CreateButton,
  ExportButton,
  useListContext,
  BulkDeleteButton,
  EditButton,
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

export const OnShowToolbar = ({ basePath, data, edit }) => {
  return (
    <TopToolbar>
      {edit && <EditButton basePath={basePath} record={data} />}
      <ListButton basePath={basePath} />
      <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>
  );
};

export const BulkActionButtons = (props) => (
  <>
    <BulkDeleteButton {...props} label="Supprimer" />
  </>
);

export const CustomSlicedField = ({ record }) => {
  if (record && record.message) {
    return (
      <span>
        {record.message.length > 20
          ? `${record.message.slice(0, 20)} ...`
          : record.message}
      </span>
    );
  }
  if (record && record.bio) {
    return record ? (
      <div style={{ width: '200px' }}>
        {record.bio.length > 20 ? `${record.bio.slice(0, 20)} ...` : record.bio}
      </div>
    ) : null;
  }
  if (record && record.description) {
    return record ? (
      <div style={{ width: '100px' }}>
        {record.description.length > 20
          ? `${record.description.slice(0, 20)} ...`
          : record.description}
      </div>
    ) : null;
  }
  if (record && record.comment) {
    return record ? (
      <div style={{ width: '200px' }}>
        {record.comment.length > 20
          ? `${record.comment.slice(0, 20)} ...`
          : record.comment}
      </div>
    ) : null;
  }
  return null;
};

export const CustomPagination = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Pagination rowsPerPageOptions={[]} {...props} />
);
