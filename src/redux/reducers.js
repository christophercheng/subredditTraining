// action

export const selectedSubcategory = (state = {}, action) => {
  switch (action.type) {
    case "NEW_SUBCATEGORY":
    case "ERROR_FETCH":
    case "CHANGE_SUBCATEGORY":
      return action.subcategory;
    default:
      return state;
  }
};

export const fetchingData = (state = false, action) => {
  const boolVal = (action.type === "FETCHING_DATA") ? action.value : state;
  return boolVal;
};


export const data = (state = {}, action) => {
  switch (action.type) {
    case "NEW_SUBCATEGORY":
      return {
        ...state,
        [action.subcategory]: {
          fetchTime: action.fetchTime,
          numPosts: action.numPosts,
        },
      };
    case "ERROR_FETCH":
      return {
        ...state,
        [action.subcategory]: {
          fetchTime: action.fetchTime,
          numPosts: action.errorMsg,
        },
      };
    default:
      return state;
  }
};
