import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBinding } from "../../store/bindings";
import { fetchGames } from "../../store/games";
import * as followActions from '../../store/follows';
import Keyboard from "../Keyboard";
import { useHistory } from "react-router-dom";
import XboxControllerTest from "../XboxControllerTesting/index";
import BindingIndex from "../BindingsIndex/BindingsIndex";
import x from './green-X.png'
import './ProfilePage.css'
import LikedPage from "../LikedPage";
import FollowsIndex from "../FollowsIndex/FollowsIndex";
import ImageUpload from "../ImageUpload/index";
import { getCurrentUser } from "../../store/session";


export default function ProfilePage(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [selection, setSelection] = useState('');
    const [currentKey, setCurrentKey] = useState('');
    const [bindingsObject, setBindingsObject] = useState({});
    const games = useSelector(state => Object.values(state.games));
    const [selectedGame, setSelectedGame] = useState('');
    const [moves, setMoves] = useState([]);
    const [controller, setController] = useState('');
    const history = useHistory();
    const following = useSelector(state => Object.values(state.follows))
    const [userFollowers, setUserFollowers] = useState()
    const [userFollowings, setUserFollowings] = useState()

    const [showBindings, toggleShowBindings] = useState(true);
    const [showLikes, toggleShowLikes] = useState(false)
    const [showFollowing, toggleShowFollowing] = useState(false)

    useEffect(() => {
        dispatch(getCurrentUser())
        dispatch(fetchGames())
        .then(dispatch(followActions.getUserFollowerTotal(user._id)).then(res => setUserFollowers(Object.values(res).length)))
        .then(dispatch(followActions.getUserFollowingTotal(user._id)).then(res => setUserFollowings(Object.values(res).length)))
        .then(dispatch(followActions.getUserFollowingInstances(user._id)))
    },[])

    useEffect(() => {
        if (controller === 'pc'){
            document.addEventListener("keypress", handleKeyboardSelection, {once: true})
        } 
    }, [currentKey])
    
    const handleCreate = () => {
        if (Object.values(bindingsObject).length > 0){
            let binding = {
                user: user._id,
                game: selectedGame._id,
                controller: controller,
                keyBinds: bindingsObject
            }
            dispatch(createBinding(binding))  
            setBindingsObject({})
            setCurrentKey("")
            document.getElementById('profile-main-container').style.display = 'none'
            document.getElementById('dropdown-container').style.display = 'block'
            history.push("/profile")
        }
    }

    const handleMove = (e) => {
        if (currentKey !== ''){
            document.getElementById(`${currentKey}-container`).style.backgroundColor = 'transparent'
        }
        setCurrentKey(e.target.id)
        document.getElementById(`${e.target.id}-container`).style.backgroundColor = '#2E294E'
    }
    
    const tags = Array.from(document.getElementsByClassName("individual-set-container"))

    tags.map(tag => {
        tag.addEventListener("mouseover", () => {
            if (tag.id === `${currentKey}-container`){
                tag.style.backgroundColor = '#2E294E'
            }else{
                tag.style.backgroundColor = '#2E294E'
            }

        })
        tag.addEventListener("mouseleave", () => {
            if (tag.id === `${currentKey}-container`) {
                tag.style.backgroundColor = 'red'
            } else {
                tag.style.backgroundColor = 'transparent'
            }
        })

    })

    const handleClick = (i) => e => {
        e.preventDefault();
        const gameObject = games[e.target.id]
        setSelectedGame(gameObject)
        setMoves(gameObject.validMovements)

        if (i === 0){
            setController('xbox-one')
        }else if (i === 1){
            setController('pc')
        } else if (i === 2){
            setController('game-cube')
        }

        document.getElementById('profile-main-container').style.display = 'flex'
        document.getElementById('dropdown-container').style.display = 'none'
    }

    const handleSelection = useCallback((e) => {
        let objCopy = { ...bindingsObject }
        objCopy[currentKey] = e.target.id
        setBindingsObject(bindingsObject => ({
            ...objCopy
        }))
    }, [currentKey])



    const handleKeyboardSelection = (e) => {
        let objCopy = { ...bindingsObject }
        if (e.code === "Space"){
            setSelection("space")
        } else {
            setSelection(e.key)
        }
        objCopy[currentKey] = e.code
        setBindingsObject(bindingsObject => ({
            ...objCopy
        }))

    }



    const controllers = {
        "xbox-one": <XboxControllerTest handleSelection={handleSelection} />,
        "pc": <Keyboard selection={selection} />
    }

    const handleClose = e => {
        e.preventDefault();
        setBindingsObject({})
        setCurrentKey('')
        setSelection('')
        document.getElementById('profile-main-container').style.display = 'none'
        document.getElementById('dropdown-container').style.display = 'block'
    }

    const handleSwitcher = (e) => {
        e.preventDefault();
        if (e.target.id === "likes-option") {
            toggleShowBindings(false)
            toggleShowFollowing(false)
            toggleShowLikes(true)
        } else if (e.target.id === "bindings-option" ){
            toggleShowLikes(false)
            toggleShowFollowing(false)
            toggleShowBindings(true)
        } else if (e.target.id === "followers-option" ){
            toggleShowBindings(false)
            toggleShowLikes(false)
            toggleShowFollowing(true)
        }
    }

    return(
        <div className="background-div-profile">
            <div id="to-level-user-detail-container">
                <div id="personal-info-container">
                {user && (
                    <div id="personal-info-img-and-info-container">
                        <ImageUpload id="working"/>
                        <div id='current-user-info'>
                            <div id="current-username">{user.username}</div>
                            <div id="current-email">{user.email}</div>
                            <div id="follower-container">
                                <p>followers: {userFollowers === undefined ? 0 : `${userFollowers}`}  </p>
                                <p>following: {userFollowings === undefined ? 0 : `${userFollowings}`} </p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <div id="dropdown-container">
                <ul>
                    <li><button className="add-keybind-button">Add Keybindings</button>
                        <ul className="dropdown">
                            {games.slice(0,3).map((game, i)=>
                                <li id={i} onClick={handleClick(i)} key={i}>{game.title}</li>
                                )}
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="profile-main-container">
                    <div className="x-positioning"><img onClick={handleClose} src={x}/></div>
                <h1 className="profile-game-title">{selectedGame.title}</h1>
                {controllers[controller]}
                <div className="move-set-container">
                    <div className="individual-set-container1">
                        <div className="move-set-title-name">Moves</div>
                        <div className="move-set-title-binding">Bindings</div>
                    </div>
                        {moves.map((move, i) =>
                            <>
                                <div id={`${move}-container`} className="individual-set-container">
                                    <div className='move-name' id={move} onClick={handleMove}>{move}</div>
                                    <div className="move-binding" id={`${move}-selection`}>{bindingsObject[move]}</div>
                                </div>
                            </>
                        )}
                </div>
                <button className='create-button' onClick={handleCreate}>Create</button>
            </div>

            <div id="display-switcher-profile-container">
                <div id="display-switcher-headers">
                    <div className="switcher-header" id="bindings-option"  onClick={handleSwitcher}>
                        Bindings
                    </div>
                    <div className="switcher-header" id="likes-option" onClick={handleSwitcher}>
                        Likes
                    </div>
                    <div className="switcher-header" id="followers-option" onClick={handleSwitcher}>
                        Following
                    </div>
                </div>
                {showBindings && (
                    <div className="binding-container-profile">
                        <BindingIndex userId={user._id} constraint="user" />
                    </div>
                )}
                {showLikes && (
                    <div className="liked-binding-container-profile">
                        <LikedPage userId={user._id} />
                    </div>
                )}
                {showFollowing && (
                    <div className="follows-container-profile">
                        <FollowsIndex follows={following} />
                    </div>
                )}
            </div>
        </div>
    )
}