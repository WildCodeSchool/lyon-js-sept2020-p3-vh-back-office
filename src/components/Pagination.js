import { Pagination } from 'react-admin';

const CustomPagination = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Pagination rowsPerPageOptions={[]} {...props} />
);

export default CustomPagination;
