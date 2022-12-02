import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bindingActions from '../../store/bindings';
import * as gameActions from '../../store/games';
import './BindingsIndex.css'
import BindingIndexItem from '../BindingsIndexItem/BindingsIndexItem.jsx';

const BindingIndex = (props) => {
    const dispatch = useDispatch();
    const bindings = useSelector(state => state.bindings)
    const complete = (Object.values(bindings).length > 0 && Object.values(bindings).every(binding => {
        return Object.values(binding.keyBinds).length > 0
    })) ? true : false
    useEffect(() => {
        if (props.gameId !== undefined) {
            dispatch(bindingActions.getGameBindings(props.gameId))
        } else {
            dispatch(bindingActions.getUserBindings(props.userId))
            dispatch(gameActions.fetchGames())
        }
    },[])

    console.log(complete)
    console.log(Object.values(bindings))
    return (
        <>
            <div id="bindings-index-container">
                <div id="bindings-index-outline">
                    {complete && (
                    Object.values(bindings).map((binding, i)=> {
                        return (
                            <div key={i} id={`binding-${i}`} ><BindingIndexItem binding={binding} gameId={binding.game} /></div>
                        )
                    })
                    )}
                </div>
            </div>
        </>
    )
}

export default BindingIndex;