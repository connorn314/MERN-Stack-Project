import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as bindingActions from '../../store/bindings';
import './BindingsIndex.css'
import BindingIndexItem from '../BindingsIndexItem/BindingsIndexItem.jsx';

const BindingIndex = () => {
    const dispatch = useDispatch();
    const bindings = useSelector(state => Object.values(state.bindings))
    console.log(bindings)
    useEffect(() => {
        dispatch(bindingActions.populateBindings())
    },[])
    return (
        <>
            <div id="bindings-index-container">
                {bindings && (
                    <div id="bindings-index-outline">
                        {bindings.map(binding => {
                            return (
                                <div><BindingIndexItem binding={binding} /></div>
                            )
                        })
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default BindingIndex;