import * as React from "react";
import { Admin, Resource } from "react-admin";
/* import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group"; */
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import ContactList from "./contact/Contact";

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource name="contact" list={ContactList} />
  </Admin>
);

export default App;
