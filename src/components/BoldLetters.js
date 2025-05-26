import React from 'react';

export function BoldLettersOnly({ text }) {
  // Split by comma and trim spaces
  const items = text.split(',').map(item => item.trim());

  return (
    <>
      {items.map((item, index) => {
        // Split item into text and number parts
        const parts = item.match(/[A-Za-z]+|[0-9.\-]+/g) || [];

        return (
          <span key={index}>
            {parts.map((part, i) =>
              isNaN(Number(part[0])) ? (
                <strong key={i}>{part} </strong>
              ) : (
                <span key={i}>{part} </span>
              )
            )}
            {index < items.length - 1 && ', '}
          </span>
        );
      })}
    </>
  );
}
