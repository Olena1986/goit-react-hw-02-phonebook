import React from 'react';
import ContactListItem from 'components/List/ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = id => {
    onDelete(id);
  };

  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
