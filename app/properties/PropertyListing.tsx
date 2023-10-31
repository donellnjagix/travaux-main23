// components/PropertyListing.tsx
import React from 'react';

interface PropertyListingProps {
  longDescription: string; // Specify the type of longDescription
}

function PropertyListing({ longDescription }: PropertyListingProps) {
  return (
    <div dangerouslySetInnerHTML={{ __html: longDescription }} />
  );
}

export default PropertyListing;
