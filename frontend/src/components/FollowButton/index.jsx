import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as followActions from '../../store/follows';
import './FollowButton.css'

const FollowButton = ({userId}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const following = useSelector(state => state.follows)
    // const follows = useSelector(state => state.follows)

    useEffect(() => {
        if (currentUser){
            dispatch(followActions.getUserFollowingInstances(currentUser._id))
        }
    }, [])
    
    const checkFollowExists = (userId) => {
        if (Object.keys(following).length === 0) {
            return false
        } else {
            return Object.values(following).some((follow) => {
                return follow.userFollowed == userId
            })
        }
    }

    const buttonDisplay = (currentUser !== null) ? ((checkFollowExists(userId)) ? (true) : (false)) : (false)

    const showButton = (buttonDisplay) ? (
        <div id='unfollow-text'>
            Unfollow
        </div>
    ) : (
        <div id="follow-text">
            Follow
        </div>
    )

    const handleFollow = () => {
        if (!buttonDisplay) {
            let newFollow = {
                userFollowed: userId,
                userFollowing: currentUser._id
            }
            dispatch(followActions.createFollow(newFollow))
        } else {
            let followId
            Object.values(following).forEach(follow => {
                if (follow.userFollowed == userId && follow.userFollowing == currentUser._id) {
                    followId = follow._id
                }
            })
            dispatch(followActions.deleteFollow(followId));
        }
    }
    
    return (
        <div id="follow-button-container" onClick={handleFollow}>
            {showButton}
        </div>
    )
}

export default FollowButton;