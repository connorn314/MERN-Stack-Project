import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bindingActions from '../../store/bindings';
import './BindingsIndex.css'
import BindingIndexItem from '../BindingsIndexItem/BindingsIndexItem.jsx';

const BindingIndex = (props) => {
    const dispatch = useDispatch();
    const bindings = useSelector(state => state.bindings)
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
                <div id="bindings-index-outline">
                    {Object.values(bindings).map((binding, i)=> {
                        return (
                            <div key={i}><BindingIndexItem binding={binding}/></div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default BindingIndex;