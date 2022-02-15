export interface HomeTypes {
  modalBoarding: boolean;
}

const initialState = {
  modalBoarding: true,
};

export default function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_SHOW_MODAL':
      return {
        ...state,
        modalBoarding: action.payload,
      };
    default:
      return state;
  }
}
