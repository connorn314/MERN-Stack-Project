import jwtFetch from "./jwt";

const RECEIVE_FOLLOWS = "follows/RECEIVE_FOLLOWS"
const RECEIVE_ONE_FOLLOW = "follows/RECEIVE_ONE_FOLLOW"
const REMOVE_FOLLOW = "follows/REMOVE_FOLLOW"

export const receiveFollows = (follows) => ({
    type: RECEIVE_FOLLOWS,
    follows
})

export const receiveOneFollow = (follow) => ({
    type: RECEIVE_ONE_FOLLOW,
    follow
})

export const removeFollow = (followId) => ({
    type: REMOVE_FOLLOW,
    followId
})

export const createFollow = (follow) => async (dispatch) => {
    const res = await jwtFetch('/api/follows/new', {
        method: 'POST',
        body: JSON.stringify(follow)
    });
    const newfollow = await res.json();
    if (newfollow){
        dispatch(receiveOneFollow(newfollow));
    }
}


export const getUserFollowerInstances = (userId) => async (dispatch) => {
    const res = await jwtFetch(`/api/users/followers/${userId}`)
    const followerInstances = await res.json();
    if (res.ok) {
        dispatch(receiveFollows(followerInstances))
        return followerInstances
    } else {
        return res
    }
}

export const getUserFollowingInstances = (userId) => async (dispatch) => {
    const res = await jwtFetch(`/api/users/following/${userId}`)
    const followingInstances = await res.json();
    if (res.ok) {
        dispatch(receiveFollows(followingInstances))
        return followingInstances
    } else {
        return res
    }
}

export const deleteFollow = (followId) => async (dispatch) => {
    const res = await jwtFetch(`/api/follows/${followId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(removeFollow(followId))
    }
    return res
}


const followReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let nextState = { ...state }
    switch (action.type){
        case RECEIVE_FOLLOWS:
            nextState = { ...action.follows }
            return nextState;
        case RECEIVE_ONE_FOLLOW:
            let newIndex = parseInt((Object.keys(nextState)[Object.keys(nextState).length - 1])) + 1;
            nextState = { ...nextState, [newIndex]: action.follow }
            return nextState;
        case REMOVE_FOLLOW:
            let correctIndex = Object.keys(nextState).find(index => nextState[index]._id == action.followId)
            delete nextState[correctIndex];
            return { ...nextState };
        default:
            return state;
    }
}           

export default followReducer;