export interface AppTypes {
  loading: boolean;
  cancel_optionSelected: string;
  cancel_details: string;
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
