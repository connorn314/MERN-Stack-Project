import jwtFetch from './jwt';

const RECEIVE_GAMES = "games/RECEIVE_GAMES";
const RECEIVE_GAME = "games/RECEIVE_GAME";
const ADD_BINDING = "games/ADD_BINDINGS"


export const addBinding = binding => ({
  type: ADD_BINDING,
  binding
})


const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});



const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
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

export const gameReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type){
    case RECEIVE_GAMES:
      return {...action.games}
    case RECEIVE_GAME:
      return {...nextState, [action.game.id]: action.game}
    case ADD_BINDING:
      return {...nextState, binding: action.binding}
    default:
      return state;
  }
}

export default gameReducer;


