import constants from "./constants";

export const getUserDetais = (data) => ({
  type: constants.GET_USER,
  data
})

export const getUserDetaisSuccess = (data) => ({
  type: constants.GET_USER_SUCCESS,
  data
})

export const getUserDetaisFail = (data) => ({
  type: constants.GET_USER_FAIL,
  data
})

export const setUserDetails = (data) => ({
  type: constants.SET_USER,
  data
})

export const setLoading = (data) => ({
  type: constants.SET_LOADING,
  data
})

export const sendMessage = (data) => ({
  type: constants.SEND_MESSAGE,
  data
})

export const addChat = (data) => ({
  type: constants.ADD_CHAT,
  data
})
