export interface UserTypes {
  email: string;
  firstName: string;
  lastName: string;
  urlPicture: string;
  birth: string;
  phone: number;
  travelerType: string;
  gender: string;
  nationality: string;
  countryOfresidence: string;
  publicProfile: boolean;
}

const initialState = {
  email: 'holahola@mail.com',
  firstName: 'Guido',
  lastName: 'Ugarteche',
  urlPicture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amba24.ar%2Fentretenimiento%2F2021%2F12%2F21%2Fguido-sller-internado-de-urgencia-25224.html&psig=AOvVaw1EBeXLrkmq87b-kdFlciDD&ust=1640283742396000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPjQ1KKD-PQCFQAAAAAdAAAAABAD',
  birth: '03/07/1993',
  phone: '1551654988',
  travelerType: 'cultural',
  gender: 'M',
  nationality: 'Argentinian',
  countryOfresidence: 'Spain',
  publicProfile: true,
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        loading: action.payload || true,
      };
    default:
      return state;
  }
}
