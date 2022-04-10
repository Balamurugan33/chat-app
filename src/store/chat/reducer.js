import constants from "./constants";

const initialState = {
  user: null,
  chats: [],
  loading: false,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.data
      }
    case constants.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
        error: null,
        loading: false
      }
    case constants.GET_USER_FAIL:
      return {
        ...state,
        user: null,
        error: action.data,
        loading: false
      }
    case constants.ADD_CHAT:
      return {
        ...state,
        chats: [ ...state.chats ,action.data ],
        loading: false
      }
    default:
      return {
        ...state
      }
  }
}