import {combineReducers} from 'redux';
import app, {AppTypes} from './appReducers';
import user, {UserTypes} from './userReducer';

export interface StoreInterface {
  app: AppTypes;
  user: UserTypes;
}

const appReducer = combineReducers({
  app,
  user,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_ALL') {
    state = {
      user: state.user,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
