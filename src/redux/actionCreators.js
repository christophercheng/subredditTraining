export const actionFetchingData = starting => ({
  type: "FETCHING_DATA",
  value: starting,
});

export const actionChangeSubcategory = selectedSubcategory => ({
  type: "CHANGE_SUBCATEGORY",
  subcategory: selectedSubcategory,
});

export const actionNewSubcategory = (selectedSubcategory, data) => ({
  type: "NEW_SUBCATEGORY",
  subcategory: selectedSubcategory,
  numPosts: data,
  fetchTime: new Date().toString(),
});

export const actionError = (selectedSubcategory, errorMsg) => ({
  type: "ERROR_FETCH",
  subcategory: selectedSubcategory,
  fetchTime: new Date().toString(),
  errorMsg,
});
