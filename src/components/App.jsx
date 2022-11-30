import React, { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {ContactForm} from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

const CONTACTS_LOCAL_STORAGE = 'contactList';

export const App = () => {
  const contactLocalStorage = JSON.parse(
    localStorage.getItem(CONTACTS_LOCAL_STORAGE)
  );
  const [contacts, setContacts] = useState(contactLocalStorage ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contactLocalStorage ) {
   } else return;
  }, [contactLocalStorage]);

  useEffect(() => {
    console.log('didUpdate', contacts);
    localStorage.setItem(CONTACTS_LOCAL_STORAGE, JSON.stringify(contacts));
  }, [contacts]);
  // componentDidUpdate(_, prevState) {
  //   const { contacts } = this.state;
  //   if (prevState.contacts !== contacts) {
  //   localStorage.setItem(CONTACTS_LOCAL_STORAGE, JSON.stringify(contacts));}
  // }
  const handleAddContact = ({ name, number }) => {
    const isExist = contacts.find(user => user.name === name);
    if (!isExist) {
      setContacts([...contacts, { id: nanoid(), name: name, number: number }]);
    } else alert(`${name} is already in contact`);
  };
  // handleAddContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   // або contacts або name они лежать на різних вкладеностях!!!
  //   const isExist = contacts.find(user => user.name === name);
  //   if (!isExist) {
  //     this.setState(prevState => {
  //       return {
  //         contacts: [
  //           ...prevState.contacts,
  //           { id: nanoid(), name: name, number: number },
  //         ],
  //       };
  //     });
  //   } else alert(`${name} is already in contact`);
  // };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  // handleChange = e => {
  //   const { name } = e.target;
  //   // console.log(name);
  //   this.setState({ [name]: e.target.value });
  // };

  const handleRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // handleRemoveContact = id => {
  //   // console.log(id);
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(contact => contact.id !== id),
  //     };
  //   });
  // };

  // name!!!===================
  let filteredArr = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onInput={handleChange} filter={filter} />
      <ContactList contacts={filteredArr} onBtnClick={handleRemoveContact} />
    </div>
  );
};
