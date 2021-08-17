import React from 'react';

function CompHeader({ title }) {
  return (
    <h2
      className='p-2 text-white fw-bolder mb-5'
      style={{
        borderRadius: '0.8rem',

        boxShadow:
          ' 2px 2px 8px rgba(55, 94, 148, 0.3),  -3px -2px 5px rgba(255, 255, 255, 0.8)',
      }}
    >
      {title}
    </h2>
  );
}

export default CompHeader;
