import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export default function ContactList({ contacts, onBtnClick }) {
  return contacts.map(contact =>(
      <ContactItem key={contact.id} contact={contact} onBtnClick={onBtnClick}/>
  ));
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onBtnClick: PropTypes.func.isRequired,
};
