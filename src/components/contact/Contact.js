import React, {useState, useEffect} from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import API from '../../services/API';


const ContactList = (props) => {
    const [contact, setContact] = useState();
  
    useEffect(() => {
      API.get('/contact').then((res) => setContact(res.data));
    }, [contact]);

    return (
      <div>
        <List {...props}>
          <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="firstname"/>
          </Datagrid>
        </List>
      </div>
    );
  };
  
  export default ContactList;