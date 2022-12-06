import './BindingsIndexItem.css';
import * as userActions from '../../store/users';
import keyboard from './keyboard.png';
import xboxController from './xbox-controller.png';
import XboxControllerTest from '../XboxControllerTesting';
import gamecubeController from './noun-video-game-controller-45094.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBinding, updateBinding } from '../../store/bindings';
import { createLike, deleteLike, getGameLikes, getUserLikes } from '../../store/likes';
import Keyboard from '../Keyboard';
import x from '../ProfilePage/green-X.png'
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const BindingIndexItem = ({ binding, gameId }) => {

    const user = useSelector(state => state.session.user);
    const likes = useSelector(state => state.likes)
    const dispatch = useDispatch();
    const [currentKey, setCurrentKey] = useState('');
    const [bindingsObject, setBindingsObject] = useState({});
    const [showMain, setShowMain] = useState(true);
    const history = useHistory();
    const gameTitle = (binding) =>{
        if (binding.controller === 'xbox-one'){
            return 'Rocket League'
        } else if (binding.controller === 'pc'){
            return 'League of Legends'
        } else {
            return 'Super Smash Bros Ultimate'
        }
    }

    const handleClose = e => {
        e.preventDefault();
        setShowMain(true)
        document.getElementById('profile-main-container').style.display = 'none'
        document.getElementById('dropdown-container').style.display = 'block'
    }

    const author = useSelector(state => state.users[binding.user])
    const games = useSelector(state => state.games)
    const game = (Object.keys(games).length === 0) ? null : Object.values(games).find(game => game._id == binding.game)
    
    const getControllerIcon = (controllerString) => {
        if (controllerString === "xbox-one") {
            return xboxController
        } else if (controllerString === "pc") {
            return keyboard
        } else if (controllerString === "game-cube") {
            return gamecubeController
        } else {
            return null
        }
    }

    useEffect(() => {        
        dispatch(userActions.getOneUser(binding.user))
        setBindingsObject(binding.keyBinds)
    }, [])

    useEffect((e) => {
        // dispatch(getGameLikes(gameId))
        if (binding.controller === 'pc'){
            document.addEventListener("keypress", handleKeyboardSelection, {once: true})
        } 
    }, [currentKey])

    const openUpdate = () => {
        if (user._id === binding.user) {
            setShowMain(false)
        }    
    }

    const handleMove = (e) => {
        if (currentKey !== '') {
            document.getElementById(`${currentKey}-container`).style.backgroundColor = 'transparent'
        }
        setCurrentKey(e.target.id)
        document.getElementById(`${e.target.id}-container`).style.backgroundColor = '#2E294E'
    }

    const handleSelection = useCallback((e) => {
        let objCopy = { ...bindingsObject }
        objCopy[currentKey] = e.target.id
        setBindingsObject(bindingsObject => ({
            ...objCopy
        }))
    }, [currentKey])

    const handleKeyboardSelection = (e) => {
        if (currentKey !== ''){
            let objCopy = { ...bindingsObject }
            objCopy[currentKey] = e.code
            setBindingsObject(bindingsObject => ({
                ...objCopy
            }))
        }
    }

    const deleteBind = e => {
        if (user._id === binding.user){
            return dispatch(deleteBinding(binding))
        }
    }

    const handleUpdate = e => {
        e.preventDefault()

        let updatedBinding = {
            _id: binding._id,
            user: user._id,
            game: binding.game,
            controller: binding.controller,
            keyBinds: bindingsObject
        }
        dispatch(updateBinding(updatedBinding))
        setShowMain(true)
    }

    

    //check find all the likes of single binding

    // let bindingLike = Object.values(likes).filter(like => {
    //     return like.binding == binding._id
    // })

    //checking to see find if user has liked that binding
    let userLike = false
    if (user && likes ){
        userLike = Object.values(likes).find(like => {
            return ((like.binding == binding._id) && (like.user == user._id))
        })
    } 

    let liked = userLike ? true : false
    // const strokeColor = liked ? "red" : "white"

    const handleLike = e => {
        e.preventDefault();
        // console.log(bindingLike)
        if (!liked){
            // const selectionTag = document.getElementById(`like-${binding._id}`)
            // selectionTag.setAttribute("stroke", "red")
            let newLike = {
                user: user._id,
                binding: binding._id,
                game: gameId
            }
            dispatch(createLike(newLike))
        } else {
            // e.target.setAttribute("stroke", "white")
            dispatch(deleteLike(userLike))
        }
    }

    const buttonDisplay = ( liked ) ? (
        <div id='liked'><span class="material-symbols-outlined" >favorite</span></div>
    ) : (
        <div id='not-liked'><span class="material-symbols-outlined" >favorite</span></div>

    )

    const authorDiv = (author) ? ((user && (author._id === user._id)) ? (
        <div id='author-div'>Your Binding</div>
    ) : (
        <div id='author-div' onClick={() => history.push(`/users/${author._id}`)}>{author.username}</div>
    )) : (
        <div>loading...</div>
    )

    
    const toggleMenu = (user && author && (author._id !== user._id)) ? (
        <div onClick={handleLike} id="like-button-container">{buttonDisplay}</div>
    ) : (
        <div id='update-delete-container'>
            <div onClick={openUpdate} id="edit-option-button-1">update</div>
            <div onClick={deleteBind}  id="edit-option-button-1">delete</div>            
        </div>
    )


    const controllers = {
        "pc": <Keyboard currentKey={currentKey} />,
        "xbox-one": <XboxControllerTest  handleSelection={handleSelection}/>
    }

    if(game){
    return showMain ? (
        <>
            <div className='main-individual-binding-container'>
                <div id="binding-item-container">
                    <div id="game-mini-thumbnail-container">
                        <div id='actual-mini-thumbnail'>
                            <div id='author-div' onClick={() => history.push(`/games/${gameId}`)}>{game.title}</div>
                            <div id='a-spacer' />
                            {authorDiv}
                        </div>
                    </div>    
                    <div id='binding-detail-container'>
                        <div className="binding-set-container">
                            <div className="bindpage-move-title-name">Moves</div>
                            <div className="bindpage-move-title-binding">Bindings</div>
                        </div>
                        {Object.keys(binding.keyBinds).map(move =>
                            <div className="individual-set-container" key={move}>
                                <div className='move-name'>{move}</div>
                                <div className="move-binding">{binding.keyBinds[move]}</div>
                            </div>
                        )}
                        
                    </div>
                    <div id='controller-mini-thumbnail'>
                        <div id='controller-icon-container'>
                            <img src={getControllerIcon(binding.controller)} alt="controller-icon" id='controller-icon' />
                        </div>
                    </div>
                    <div className='toggle-menu'>
                        {user && (toggleMenu)}
                    </div>
                </div>
            </div>
        </>
    ) : (
        
        <div id={binding._id} className='update-binding'>
            <div id="update-binding2">
                <div className="x-positioning"><img onClick={handleClose} src={x} /></div>
                <h1 className="profile-game-title">{gameTitle(binding)}</h1>
                    {controllers[binding.controller]}
                {bindingsObject && (
                <div className="move-set-container">
                    {console.log(bindingsObject)}
                    <div className="individual-set-container1">
                        <div className="move-set-title-name">Moves</div>
                        <div className="move-set-title-binding">Bindings</div>
                    </div>
                    {game.validMovements.map((move, i) =>
                            <div id={`${move}-container`} className="individual-set-container" key={i}>
                                <div className='move-name' id={move} onClick={handleMove}>{move}</div>
                                <div className="move-binding" id={`${move}-selection`}>{bindingsObject[move]}</div>
                            </div>
                    )}
                </div>
                )}
                <button className='create-button' onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )}
}

export default BindingIndexItem;
