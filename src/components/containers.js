import { connect } from 'react-redux';
import Subcategory from './Subcategory';
import InputSelector from './InputSelector';
import { actionChangeSubcategory, actionNewSubcategory, actionFetchingData, actionError } from './../redux/actionCreators';

export const SubcategoryContainer = connect(
  state => ({
    fetchingData: state.fetchingData,
    selectedSubcategory: state.selectedSubcategory,
    subcategories: Object.keys(state.data),
    subcategoryData: state.data[state.selectedSubcategory],
  }),
  dispatch => ({
    handleChangeSubcategory(newSubCategory) {
      dispatch(actionChangeSubcategory(newSubCategory));
    },
  }),
)(Subcategory);

export const InputSelectorContainer = connect(
  state => ({ subcategories: Object.keys(state.data) }),
  dispatch => ({
    handleChangeSubcategory(newSubCategory) {
      dispatch(actionChangeSubcategory(newSubCategory));
    },
    handleNewSubcategory(newSubcategory, data) {
      dispatch(actionNewSubcategory(newSubcategory, data));
    },
    notifyFetchingData(boolStatus) {
      dispatch(actionFetchingData(boolStatus));
    },
    handleFetchingError(newSubcategory, message) {
      dispatch(actionError(newSubcategory, message));
    },
  }),
)(InputSelector);
