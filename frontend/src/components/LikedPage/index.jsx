import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/users';
import * as likeActions from '../../store/likes';
import * as bindingActions from '../../store/bindings';
import './LikedPage.css'
import BindingIndexItem from '../BindingsIndexItem/BindingsIndexItem';
import BindingIndex from '../BindingsIndex/BindingsIndex';


const LikedPage = ({userId}) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.users[userId])
    const likes = useSelector(state => state.likes)
    const relevantLikes = Object.values(likes).filter(like => like.user == userId)
    const relevantLikeBindingIds = relevantLikes.map(like => like.binding)
    const bindings = useSelector(state => state.bindings)
    const relevantBindings = Object.values(bindings).filter(binding => relevantLikeBindingIds.includes(binding._id))

    useEffect(() => {
        if (!user) {
            dispatch(userActions.getOneUser(userId))
        }
        dispatch(likeActions.getUserLikes(userId))
    }, [])

    useEffect(() => {
        if (relevantLikeBindingIds){
            relevantLikeBindingIds.forEach(id => {
                dispatch(bindingActions.getOneBinding(id))
                console.log(id)
            })
            console.log(relevantLikes)
            console.log(relevantLikeBindingIds)
        }
    }, [likes])

    console.log(relevantBindings, "made it")

    return (
        <div id='liked-page-container'>
            <BindingIndex userId={userId} constraint="likes" />
        </div>
    )
}

export default LikedPage;