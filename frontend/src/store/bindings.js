import jwtFetch from "./jwt";

const POPULATE_BINDINGS = "bindings/POPULATE_BINDINGS"
const RECEIVE_ONE_BINDING = "bindings/RECEIVE_ONE_BINDING"
const RECEIVE_BINDINGS = "bindings/RECEIVE_BINDINGS"
const REMOVE_BINDING = "bindings/REMOVE_BINDING"


export const receiveBindings = (bindings) => ({
    type: RECEIVE_BINDINGS,
    bindings
})

export const receiveOneBinding = (binding) => ({
    type: RECEIVE_ONE_BINDING,
    binding
})

export const removeBinding = (bindingId) => ({
    type: REMOVE_BINDING,
    bindingId
})

export const populateBindings = () => async (dispatch) => {
    const res = await jwtFetch('/api/bindings')
    const bindings = await res.json();
    if (res.ok){
        dispatch(receiveBindings(bindings))
        return bindings
    } else {
        return res
    }
}

export const getOneBinding = (bindingId) => async (dispatch) => {
    const res = await jwtFetch(`/api/bindings/${bindingId}`)
    const binding = await res.json();
    if (res.ok) {
        dispatch(receiveOneBinding(binding))
        return binding
    } else {
        return res
    }
}

export const createBinding = (binding) => async dispatch => {
    const res = await jwtFetch('/api/bindings/new', {
        method: 'POST',
        body: JSON.stringify(binding)
    });
    const newBinding = await res.json();
    if (newBinding){
        dispatch(receiveOneBinding(newBinding));
    }
}

export const getUserBindings = (userId) => async (dispatch) => {
    const res = await jwtFetch(`/api/users/bindings/${userId}`)
    const bindings = await res.json();
    if (res.ok) {
        dispatch(receiveBindings(bindings))
        return bindings
    } else {
        return res
    }
}

export const getGameBindings = (gameId) => async (dispatch) => {
    const res = await jwtFetch(`/api/games/bindings/${gameId}`)
    const bindings = await res.json();
    if (res.ok) {
        dispatch(receiveBindings(bindings))
        return bindings
    } else {
        return res
    }
}

export const updateBinding = (binding) => async dispatch => {
    const res = await jwtFetch(`/api/bindings/${binding._id}/edit`, {
        method: 'PATCH',
        body: JSON.stringify(binding),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (res.ok) {
        const updatedBinding = await res.json();
        dispatch(receiveOneBinding(updatedBinding))
    }
}

export const deleteBinding = (binding) => async dispatch => {
    const res = await jwtFetch(`/api/bindings/${binding._id}`, {
        method: 'DELETE'
    })

    dispatch(removeBinding(binding._id))
}


const bindingReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = { ...state }
    switch (action.type){
        case RECEIVE_BINDINGS:
            nextState = { ...action.bindings }            
            return nextState;
        case RECEIVE_ONE_BINDING:
            nextState = { ...nextState, ...Object.values(action.binding) }
            return nextState;
        case REMOVE_BINDING:
            delete nextState[action.bindingId];
            return nextState;
        default:
            return state;
    }
}

export default bindingReducer;