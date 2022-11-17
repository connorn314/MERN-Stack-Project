import jwtFetch from "./jwt";

const POPULATE_BINDINGS = "bindings/POPULATE_BINDINGS"
const RECEIVE_ONE_BINDING = "bindings/RECEIVE_ONE_BINDING"


export const receiveBindings = (bindings) => ({
    type: POPULATE_BINDINGS,
    bindings
})

export const receiveOneBinding = (binding) => ({
    type: RECEIVE_ONE_BINDING,
    binding
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


const bindingReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = { ...state }
    switch (action.type){
        case POPULATE_BINDINGS:
            nextState = { ...action.bindings }
            return nextState;
        case RECEIVE_ONE_BINDING:
            nextState = { ...nextState, ...Object.values(action.binding) }
            return nextState;
        default:
            return state;
    }
}

export default bindingReducer;