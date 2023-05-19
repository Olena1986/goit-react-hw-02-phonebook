import React from 'react';

const ContactListItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li>
      {contact.name}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactListItem;
