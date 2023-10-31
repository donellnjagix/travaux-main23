import React from 'react';

function PropertyListing({ longDescription }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: longDescription }} />
  );
}

export default PropertyListing;
