import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bindingActions from '../../store/bindings';
import './BindingsIndex.css'
import BindingIndexItem from '../BindingsIndexItem/BindingsIndexItem.jsx';

const BindingIndex = (props) => {
    const dispatch = useDispatch();
    const bindings = useSelector(state => state.bindings)
    const complete = (Object.values(bindings).every(binding => {
        return Object.values(binding.keyBinds).length > 0
    })) ? true : false
    useEffect(() => {
        if (props.gameId !== undefined) {
            dispatch(bindingActions.getGameBindings(props.gameId))
        } else {
            dispatch(bindingActions.getUserBindings(props.userId))
        }
    },[])
    return (
        <>
            <div id="bindings-index-container">
                {/* {bindings && (
                    <div id="bindings-index-outline">
                        {bindings.map(binding => {
                            return (
                                <div key={binding._id}><BindingIndexItem binding={binding} gameId={gameId}/></div>
                            )
                        })
                        }
                    </div>
                )} */}
                <div id="bindings-index-outline">
                    {complete &&
                    Object.values(bindings).map((binding, i)=> {
                        return (
                            <div key={i}><BindingIndexItem binding={binding} gameId={props.gameId} /></div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default BindingIndex;