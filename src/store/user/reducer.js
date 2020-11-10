import { SESSION_LOGOUT, SESSION_LOGIN } from './type';
import client from '../../assets/img/client.png'

const initialState = {
  loggedIn: true,
  user: {
    first_name: 'Client',
    last_name: '',
    email: 'demo@devias.io',
    avatar:client ,
    bio: '',
    role: 'USER' // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_LOGIN: {
      return {
        ...initialState
      };
    }

    case SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
