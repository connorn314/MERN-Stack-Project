import jwtFetch from "./jwt";

const POPULATE_BINDINGS = "bindings/POPULATE_BINDINGS"

export const receiveBindings = (bindings) => ({
    type: POPULATE_BINDINGS,
    bindings
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


const bindingReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = { ...state }
    switch (action.type){
        case POPULATE_BINDINGS:
            nextState = { ...action.bindings }
            return nextState;
        default:
            return state;
    }
}

export default bindingReducer;