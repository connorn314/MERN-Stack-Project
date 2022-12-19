import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as userActions from '../../store/users'
import BindingIndex from '../BindingsIndex/BindingsIndex';
import './UserShow.css'
import FollowButton from '../FollowButton';
import { useState } from 'react';
import * as followActions from '../../store/follows'


const UserShow = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const follows = useSelector(state => state.follows)
    const showUser = useSelector(state => state.users[userId])
    const [userFollowers, setUserFollowers] = useState()
    const [userFollowings, setUserFollowings] = useState()
    
    useEffect(() => {
        dispatch(userActions.getOneUser(userId))
    }, [])

    useEffect(() => {
        dispatch(followActions.getUserFollowerTotal(userId)).then(res => setUserFollowers(Object.values(res).length))
        dispatch(followActions.getUserFollowingTotal(userId)).then(res => setUserFollowings(Object.values(res).length))
    }, [follows])
    

    return (
        <div id="show-main-container">
        {showUser && (
            <div id='user-info'>
                { showUser.photo ? (
                    <div id='user-actual-prof-pic'>
                        <img src={showUser.photo} alt="profile photo" id='prof-pic-user-show'/>
                    </div>
                ) : (
                    <div id='user-actual-prof-pic'>
                        <div id="prof-pic-user-show">
                            User has no prof pic

                        </div>
                    </div>
                )}
                <div id="show-username">{showUser.username}</div>
                <div id="follower-container">
                    <p>followers: {userFollowers === undefined ? 0 : `${userFollowers}`}  </p>
                    <p>following: {userFollowings === undefined ? 0 : `${userFollowings}`} </p>
                </div>
                <div id='follow-button-user-show'><FollowButton userId={userId} /></div>
            </div>
            

                
        )}

        {showUser && (
            <div id="show-bindings-container">
            <h1 id="user-show-bindings-banner">{`${showUser.username} 's Bindings`}</h1>
                <BindingIndex userId={userId} constraint="user"/>
            </div>
        )}
        </div>
   
        )}

        

export default UserShow;