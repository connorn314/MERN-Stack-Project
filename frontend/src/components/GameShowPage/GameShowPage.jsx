import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "../../store/games";
import { useParams } from "react-router-dom";
import './GameShowPage.css'
import BindingIndex from "../BindingsIndex/BindingsIndex";
import { getGameBindings } from "../../store/bindings";
import RocketLeague from './RocketLeague.png';
import League from './LeagueOfLegends.png';
import Smash from './SmashBrosUltimate.png';

const GameShowPage = () => {
    const { gameId } = useParams();
    const dispatch = useDispatch();
    const games = useSelector(state => state.games)
    let game = (Object.keys(games).length === 0) ? null : Object.values(games).find(game => game._id == gameId)
    useEffect(() => {
        dispatch(fetchGame(gameId))
        // dispatch(getGameBindings(gameId))
    }, [])

    const correctImage = (title) => {
        switch (title){
            case "Rocket League":
                return RocketLeague;
            case "League of Legends":
                return League;
            case "Super Smash Bros. Ultimate":
                return Smash;
            default:
                return null;
        }
    }

    return (
        <div id="game-show-page-container">
            <div id="game-details-container">
                {game && (
                    <>
                        <div id="details-title-container">{game.title}</div>
                        <div id="details-content-container">
                            <div id="details-left">
                                <div id="game-img-container">
                                    <img src={correctImage(game.title)} alt="game-img" id="game-img" />
                                </div>
                                <div id="description-cont">
                                    {game.description}
                                </div>
                            </div>
                            <div id="details-right">

                                    <div id="right-side-title">
                                        {game.title}
                                    </div>
                                    <div id="right-side-dev">
                                        <div id="dev-title">
                                            Developer
                                        </div>
                                        <div>
                                            {game.developer}
                                        </div>
                                    </div>
                                    <div id="compatability-container">
                                        {game.compatibility}
                                    </div>

                            </div>
                        </div>
                    </>
                )}
            </div>
            <BindingIndex gameId={gameId} constraint="game"/>
        </div>
    )
}

export default GameShowPage;