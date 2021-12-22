// import * as types from '../../constants/reducers/App';
interface results {
  queue: number | null;
  delay: number | null;
  active_doctors: number | null;
}

export interface AppTypes {
  loading: boolean;
  cancel_optionSelected: string;
  cancel_details: string;
  results_doctorDelay: results;
}

const initialState = {
  loading: false,
};

export default function appReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload || true,
      };
    default:
      return state;
  }
}
