import React from 'react';
import Details from './Details';
import DropSelector from './DropSelector';

/*
const Subcategory =
  ({
    selectedSubcategory, subcategoryData, fetchingData, subcategories, handleChangeSubcategory,
  }) => (
    fetchingData ?
      (
        <div><h3>Loading bitch</h3></div>
      ) :
      (
        <div>
          <DropSelector
            subcategories={subcategories}
            handleChangeSubcategory={handleChangeSubcategory}
            selectedSubcategory={selectedSubcategory}
          />
          <Details
            selectedSubcategory={selectedSubcategory}
            subcategoryData={subcategoryData}
          />
        </div>
      )
  );
*/

const Subcategory = (props) => {
  const {
    selectedSubcategory, subcategoryData, fetchingData, subcategories, handleChangeSubcategory,
  } = props;
  console.log('subcategory props: ',props);
  return (
    fetchingData ?
      (
        <div><h3>Loading bitch</h3></div>
      ) :
      (
        <div>
          <DropSelector
            subcategories={subcategories}
            handleChangeSubcategory={handleChangeSubcategory}
            selectedSubcategory={selectedSubcategory}
          />
          <Details
            selectedSubcategory={selectedSubcategory}
            subcategoryData={subcategoryData}
          />
        </div>
      )
  );
};

export default Subcategory;
