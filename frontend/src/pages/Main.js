import React from 'react';

export default function Main({ match }) {
  return (
    <p>{match.params.id}</p>
  );
}
