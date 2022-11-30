import jwtFetch from './jwt';

const RECEIVE_GAMES = "games/RECEIVE_GAMES";
const RECEIVE_GAME = "games/RECEIVE_GAME";

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
      return {...nextState, [action.game._id]: action.game}
    default:
      return state;
  }
}

export default gameReducer;


