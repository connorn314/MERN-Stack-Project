import jwtFetch from "./jwt";

const RECEIVE_ONE_LIKE = "likes/RECEIVE_ONE_LIKE"
const RECEIVE_LIKES = "likes/RECEIVE_LIKES"
const REMOVE_LIKE = "likes/REMOVE_LIKE"
const REMOVE_ALL_LIKES = "likes/REMOVE_ALL_LIKES"

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes
})

export const receiveOneLike = (like) => ({
  type: RECEIVE_ONE_LIKE,
  like
})

export const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId
})


export const removeAllLikes = () => ({
  type: REMOVE_ALL_LIKES
})

export const getOneLike = (likeId) => async (dispatch) => {
  const res = await jwtFetch(`/api/likes/${likeId}`)
  const like = await res.json();
  if (res.ok) {
    dispatch(receiveOneLike(like))
    return like
  } else {
    return res
  }
}

export const createLike = (like) => async dispatch => {
  const res = await jwtFetch('/api/likes/new', {
    method: 'POST',
    body: JSON.stringify(like)
  });
  const newLike = await res.json();
  if (newLike) {
    dispatch(receiveOneLike(newLike));
  }
}

export const getUserLikes = (userId) => async (dispatch) => {
  const res = await jwtFetch(`/api/users/likes/${userId}`)
  const likes = await res.json();
  if (res.ok) {
    dispatch(receiveLikes(likes))
    return likes
  } else {
    return res
  }
}

export const getGameLikes = (gameId) => async (dispatch) => {
  const res = await jwtFetch(`/api/games/likes/${gameId}`)
  const likes = await res.json();
  if (res.ok) {
    dispatch(receiveLikes(likes))
    return likes
  } else {
    return res
  }
}

export const getBindingLikeTotal = (bindingId) => async (dispatch) => {
  const res = await jwtFetch(`/api/likes/bindings/${bindingId}`)
  const likes = await res.json();
  if (res.ok){
    return likes
  } else {
    return res
  }
}

export const deleteLike = (like) => async dispatch => {
  const res = await jwtFetch(`/api/likes/${like._id}`, {
    method: 'DELETE'
  })

  dispatch(removeLike(like._id))
}


const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = { ...state }
  switch (action.type) {
    case RECEIVE_LIKES:
      nextState = { ...action.likes }
      return nextState;
    case RECEIVE_ONE_LIKE:
      let newIndex = parseInt((Object.keys(nextState)[Object.keys(nextState).length - 1])) + 1;
        Object.keys(nextState).forEach(likeIndex => {
            if (nextState[likeIndex]._id == action.like._id) {
                newIndex = likeIndex
            }
        })
      nextState = { ...nextState, [newIndex]: action.like }
      return nextState;
    case REMOVE_LIKE:
      let correctIndex = Object.keys(nextState).find(index => nextState[index]._id == action.likeId)
      delete nextState[correctIndex];
      return nextState;
    case REMOVE_ALL_LIKES:
      nextState = {}
      return nextState;
    default:
      return state;
  }
}

export default likeReducer;