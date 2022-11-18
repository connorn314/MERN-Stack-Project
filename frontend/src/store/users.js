import jwtFetch from "./jwt";

const POPULATE_USERS = "users/POPULATE_USERS"
const RECEIVE_USER = "users/RECEIVE_USER"
const RECEIVE_USERS = "users/RECEIVE_USERS"

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const getOneUser = (userId) => async (dispatch) => {
    const res = await jwtFetch(`/api/users/${userId}`)
    const user = await res.json();
    if (res.ok) {
        dispatch(receiveUser(user))
        return user
    } else {
        return res
    }
}

export const getAllUsers = () => async (dispatch) => {
    const res = await jwtFetch('/api/users')
    const users = await res.json();
    if (res.ok) {
        dispatch(receiveUsers(users))
        return users
    } else {
        return res
    }
}


const userReducer = ( state = {}, action) => {
    Object.freeze(state);
    let nextState = { ...state }
    switch (action.type){
        case RECEIVE_USER:
            nextState[action.user._id] = action.user
            return nextState;
        case RECEIVE_USERS:
            nextState = { ...nextState, ...action.users}
            return nextState;
        default:
            return state;
    }
}

export default userReducer