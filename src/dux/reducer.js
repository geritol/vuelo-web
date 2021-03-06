import {
  SIGN_IN,
  SIGN_OUT,
  INITIALIZE,
  OPEN_DRAWER,
  CLOSE_DRAWER
} from 'dux/actions';

const initialState = {
  initialized: false,
  signedIn: false,
  user: null,
  token: null,
  drawerOpen: false // TODO from localstorage
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return Object.assign({}, state, {
        initialized: true
      });
    case SIGN_IN:
      const { user, token } = action;

      localStorage.setItem('token', token);
      return Object.assign({}, state, {
        signedIn: true,
        user,
        token
      });
    case SIGN_OUT:
      localStorage.removeItem('token');
      return Object.assign({}, state, {
        signedIn: false,
        user: null,
        token: null
      });
    case OPEN_DRAWER:
      return {
        ...state,
        drawerOpen: true
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        drawerOpen: false
      };
    default:
      return state;
  }
};
