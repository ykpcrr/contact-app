import {useState} from 'react';
import "./styles.css";

import List from "./list/index";
import Form from "./form/index";

function Contacts() {
const [contacts, setContacts] = useState([
  {fullname : "Mehmet", phone_number : "1234"},{fullname:"Yusuf", phone_number:123455666}
])

  return (
    <div id="container">
      <h1>Contacts List</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts
