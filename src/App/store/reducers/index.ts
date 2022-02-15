import {combineReducers} from 'redux';
import app, {AppTypes} from './appReducers';
import user, {UserTypes} from './userReducer';
import home, {HomeTypes} from '../../modules/Home/store/homeReducer';

export interface StoreInterface {
  app: AppTypes;
  user: UserTypes;
  home: HomeTypes;
}

const appReducer = combineReducers({
  app,
  user,
  home,
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
