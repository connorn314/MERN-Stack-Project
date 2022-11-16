import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchGames } from "../../store/games";
import GameBanner from "./GameBanner";

const GameIndex = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => Object.values(state.games))

  useEffect(()=> {
    dispatch(fetchGames())
  },[dispatch])

  if (games === undefined){
    return null
  }
  
  return (
    <>
      <div className="gameindex-main-container">
        
        {games.map((game, i) =>
        (<>
          <GameBanner game={game} i={i}/>
        </>)
        )}
      </div>
    </>
  )
}

export default GameIndex;