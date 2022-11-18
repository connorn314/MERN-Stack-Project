import jwtFetch from './jwt';

const RECEIVE_GAMES = "games/RECEIVE_GAMES";
const RECEIVE_GAME = "games/RECEIVE_GAME";
const ADD_BINDING = "games/ADD_BINDING";
const CLEAR_CURRENT_BINDINGS = "bindings/CLEAR_CURRENT_BINDINGS"

export const addBinding = binding => ({
  type: ADD_BINDING,
  binding
})

export const getBindings = state => {
  return state.games
}

const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
});

export const clearCurrentBindings = () => ({
  type: CLEAR_CURRENT_BINDINGS
});

export const fetchGames = () => async dispatch => {
  const res = await jwtFetch('/api/games');
  const games = await res.json();
  dispatch(receiveGames(games));
}

export const fetchGame = (gameId) => async dispatch => {
  const res = await jwtFetch(`/api/games/${gameId}`)
  const game = await res.json();
  dispatch(receiveGame(game))
}

const initialState = {
  keyBindings: undefined
}

export const gameReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type){
    case RECEIVE_GAMES:
      return {...action.games}
    case RECEIVE_GAME:
      return {...nextState, [action.game._id]: action.game}
    default:
      return state;
  }
}



export const BindingsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch(action.type){
    case ADD_BINDING:
      return {...state, ...action.binding}
    case CLEAR_CURRENT_BINDINGS:
      return {}
    default: 
      return state
  }
}

export default gameReducer;


