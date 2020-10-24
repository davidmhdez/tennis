import React from 'react';
import { Helmet } from 'react-helmet';

function Helmets() {
  return (
    <Helmet>
      <title>Tennis</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
    </Helmet>
  );
}

export default Helmets;