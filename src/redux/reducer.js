import {combineReducers} from 'redux';

const initialData = {
  dataNav: '',
};

const NavReducer = (state = initialData, action) => {
  if (action.type === 'SET_DATA_NAV') {
    return {
      ...state,
      ['dataNav']: action.inputValue,
    };
  }
  return state;
};

const initialPage = {
  namePage: 'kosong',
};

const NamePage = (state = initialPage, action) => {
  if (action.type === 'SET_NAME_PAGE') {
    return {
      ...state,
      ['namePage']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  NavReducer,
  NamePage,
});

export default reducer;
