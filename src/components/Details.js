import React from 'react';

const Details = ({ selectedSubcategory, subcategoryData }) => (
  <div className="details">
    <div className="details-subcategory">
      <span>Subcategory:</span>
      <span>{selectedSubcategory}</span>
    </div>
    <div className="details-fetchTime">
      <span>Fetched On:</span>
      <span>{subcategoryData.fetchTime}</span>
    </div>
    <div className="details-numPosts">
      <span>Number of Posts:</span>
      <span>{subcategoryData.numPosts}</span>
    </div>
  </div>
);

export default Details;
