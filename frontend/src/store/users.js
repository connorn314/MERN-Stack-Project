import jwtFetch from "./jwt";
import {getCurrentUser, receiveCurrentUser } from './session'

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

export const newProfilePic = (userId, file) => async (dispatch) => {
    try {
        const img = new FormData();
        img.append("image", file);
        console.log(img)
        const res = await jwtFetch(`/api/users/${userId}/images-z`, {
            method: "POST",
            body: img
        });
        const updatedUser = await res.json();
        console.log(updatedUser)
        if (res.ok) {
            // console.log(res)
            dispatch(receiveCurrentUser(updatedUser))
        }
        // return updatedUser
    } catch (err) {
        console.log(err)
        return err.json()
    }
}

const updateUser = user => async dispatch => {
    console.log(user)
    const res = await jwtFetch( `/api/users/${user._id}`,{
        method: "PATCH",
        body: JSON.stringify(user),
        
    })
    const data = await res.json()
    if(data){
        dispatch(getCurrentUser())
        return data
    }else{
        return null
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