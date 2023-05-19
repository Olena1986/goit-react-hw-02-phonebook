import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;
