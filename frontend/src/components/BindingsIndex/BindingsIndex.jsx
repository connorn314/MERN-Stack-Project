import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bindingActions from '../../store/bindings';
import * as gameActions from '../../store/games';
import * as likeActions from '../../store/likes';
import './BindingsIndex.css'
import BindingIndexItem from '../BindingsIndexItem/BindingsIndexItem.jsx';

const BindingIndex = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const bindings = useSelector(state => state.bindings);
    const likes = useSelector(state => state.likes);
    const relevantLikes = (user) ? Object.values(likes).filter(like => like.user == user._id) : null
    const relevantLikeBindingIds = (user) ? relevantLikes.map(like => like.binding) : null
    const complete = (Object.values(bindings).length > 0 && Object.values(bindings).every(binding => {
        return Object.values(binding.keyBinds).length > 0
    })) ? true : false
    useEffect(() => {
        if (user) {
            dispatch(likeActions.getUserLikes(user._id))
        }
        if (props.gameId !== undefined) {
            dispatch(bindingActions.getGameBindings(props.gameId))
        } else {
            dispatch(bindingActions.getUserBindings(props.userId))
            dispatch(gameActions.fetchGames())
        }
    },[])



    const correctConstraint = () => {
        switch (props.constraint) {
            case "game":
                return Object.values(bindings).filter(binding => props.gameId === binding.game)
            case "user":
                return Object.values(bindings).filter(binding => props.userId === binding.user)
            case "likes":
                return Object.values(bindings).filter(binding => relevantLikeBindingIds.includes(binding._id))
            default:
                return bindings
        }
    }

    return (
        <>
            <div id="bindings-index-container">
                <div id="bindings-index-outline">
                    {complete && (
                    correctConstraint().map((binding, i)=> {
                        return (
                            <div key={i} id={`binding-${i}`} ><BindingIndexItem binding={binding} gameId={binding.game} /></div>
                        )
                    })
                    )}
                    {console.log(correctConstraint())}
                </div>
            </div>
        </>
    )
}

export default BindingIndex;