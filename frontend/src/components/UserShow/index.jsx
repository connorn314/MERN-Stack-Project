import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as userActions from '../../store/users'
import BindingIndex from '../BindingsIndex/BindingsIndex';
import './UserShow.css'
import FollowButton from '../FollowButton';
import { useState } from 'react';
import * as followActions from '../../store/follows'
const FormData = require('form-data');

const UserShow = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState("")
    const showUser = useSelector(state => state.users[userId])
    const [userFollowers, setUserFollowers] = useState()
    const [userFollowings, setUserFollowings] = useState()
    
    useEffect(() => {
        dispatch(userActions.getOneUser(userId))
        let followers = dispatch(followActions.getUserFollowerInstances(userId))
        let followings = dispatch(followActions.getUserFollowingInstances(userId))
        setUserFollowers(followers)
        setUserFollowings(followings)
    }, [])

    const handleFile = (e) => {
        e.preventDefault();
        let file = e.target.files[0]
        if (file) {
            const fileReader = new FileReader();

            fileReader.readAsArrayBuffer(file)
            fileReader.onload = () => {
                console.log(file)
              setPhoto(file);
            };
          }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(photo){
            console.log(photo)
            const form = new FormData();
            form.append("userId", userId)
            form.append("title",photo.name)
            form.append("photo",photo)
            console.log(form)
            dispatch(userActions.uploadPhoto(userId,photo))
        }

    }

    return (
        <>
        <div id="show-main-container">
      
        {showUser && (
          
            <div id='user-info'>
                {/* <div id="show-photo-container">
                <div id="submit-form">
                <form onSubmit={handleSubmit} id="photo-form">
                        <label>Upload from your device
                        <input type="file" id="file-input" onChange={handleFile} />
                        </label>
                    </form>
                    <button onClick={handleSubmit}>Upload Photo</button>
                </div>
                </div> */}
                <div id="show-username">{showUser.username}</div>
                <div id="follower-container">
                    <p>followers: {userFollowers === undefined ? 0 : `${userFollowers.length}`}  </p>
                    <p>following: {userFollowings === undefined ? 0 : `${userFollowings.length}`} </p>
                </div>
                <div><FollowButton userId={userId}></FollowButton>,</div>
            </div>
            

                
        )}

        {showUser && (
                        <div id="show-bindings-container">
                        <h1 id="user-show-bindings-banner">{`${showUser.username} 's Bindings`}</h1>
                <BindingIndex userId={userId} constraint="user"/>
                </div>
              
        )}
            </div>
    </>
   
        )}

        

export default UserShow;