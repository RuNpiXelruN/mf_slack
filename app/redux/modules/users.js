import auth from 'helpers/auth'

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const FETCHING_USER_ERROR = 'FETCHING_USER_ERROR'

function authUser (uid) {
  return {
    type: AUTH_USER,
    uid,
  }
}

function unauthUser () {
  return {
    type: UNAUTH_USER,
  }
}

function fetchingUser () {
  return {
    type: FETCHING_USER,
  }
}

function fetchingUserSuccess (uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

function fetchingUserError (error) {
  return {
   type: FETCHING_USER_ERROR,
   error: 'Error fetching user'
  }
}

// -------------------------------- REDUCERS

export function fetchAndHandleAuthedUser () {
  return function (dispatch) {
    dispatch(fetchingUser())
    return auth()
      .then((user) => dispatch(fetchingUserSuccess(user.uid, user, Date.now())))
      .then((user) => dispatch(authUser(user.uid)))
      .catch((error) => dispatch(fetchingUserError(error)))
  }
}


const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    avatar: '',
    email: '',
    uid: '',
  }
}

function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
  }
}


const initialState = {
  isAuthed: false,
  isFetching: false,
  error: '',
  authedId: '',
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_SUCCESS :
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '', }
        : {
          ...state,
          isFetching: false,
          [action.uid]: user(state[action.uid], action)
        }
    case FETCHING_USER_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default :
      return state
  }
}
