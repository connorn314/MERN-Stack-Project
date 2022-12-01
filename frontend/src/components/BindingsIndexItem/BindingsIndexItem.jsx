import './BindingsIndexItem.css';
import * as userActions from '../../store/users';
import keyboard from './keyboard.png';
import xboxController from './xbox-controller.png';
import XboxControllerTest from '../XboxControllerTesting';
import gamecubeController from './noun-video-game-controller-45094.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBinding, updateBinding } from '../../store/bindings';
import { createLike, deleteLike, getGameLikes } from '../../store/likes';
import Keyboard from '../Keyboard';
import x from '../ProfilePage/green-X.png'
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import FollowButton from '../FollowButton';

// const BindingIndexItem = ({binding, gameId}) => {
//     const history = useHistory()
//     const dispatch = useDispatch();
//     const moveSet = binding.keyBinds;
//     const user = useSelector(state => state.session.user);
//     const [showMain, setShowMain] = useState(true)
//     const [currentKey, setCurrentKey] = useState()
//     const keybind = useSelector(state => state.currentBindings)
//     const likes = useSelector(state => state.likes)



const BindingIndexItem = ({ binding, gameId }) => {

    const user = useSelector(state => state.session.user);
    const likes = useSelector(state => state.likes)
    const dispatch = useDispatch();
    const [currentKey, setCurrentKey] = useState('');
    const [bindingsObject, setBindingsObject] = useState(binding.keyBinds);
    const [showMain, setShowMain] = useState(true);
    
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
    }, [])

    useEffect((e) => {
        dispatch(getGameLikes(gameId))
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
    let bindingLike = Object.values(likes).filter(like => {
        return like.binding == binding._id
    })
    //checking to see find if user has liked that binding
    let userLike = false
    if (user && bindingLike ){
        userLike = Object.values(bindingLike).find(like => {
            return like.user == user._id
        })
    } 

    let liked = userLike ? true : false
    const strokeColor = liked ? "red" : "white"

    const handleLike = e => {
        e.preventDefault();
        console.log(bindingLike)
        if (!liked){
            const selectionTag = document.getElementById(`like-${binding._id}`)
            selectionTag.setAttribute("stroke", "red")
            let newLike = {
                user: user._id,
                binding: binding._id,
                game: gameId
            }
            dispatch(createLike(newLike))
        } else {
            e.target.setAttribute("stroke", "white")
            dispatch(deleteLike(userLike))
        }
    }

    const authorDiv = (user && author && (author._id === user._id)) ? (
        <div id='author-div'>Your Binding</div>
        ) : ((author) ? (
        <div id='author-div'>{author.username} <div id='binding-index-item-follow'><FollowButton userId={author._id} /></div></div>
        ) : (
        <div>loading...</div>
        ))

    const toggleMenu = (user && author && (author._id !== user._id)) ? (
        <div onClick={handleLike} id="like-button-container"><svg id={`like-${binding._id}`} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke={strokeColor} ><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg></div>
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
                            <div id='author-div'>{game.title}</div>
                            <div id='a-spacer' />
                            
                            {authorDiv}
                            </div>
                        </div>    
                        <div id='binding-detail-container'>
                            <div className="binding-set-container">
                                <div className="bindpage-move-title-name">Moves</div>
                                <div className="bindpage-move-title-binding">Bindings</div>
                            </div>
                            {/* {console.log(bindingsObject)} */}

                            {Object.keys(bindingsObject).map(move =>
                                <div className="individual-set-container" key={move}>
                                    <div className='move-name'>{move}</div>
                                    <div className="move-binding">{bindingsObject[move]}</div>
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
                <div className="move-set-container">
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
                <button className='create-button' onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )}
}

export default BindingIndexItem;

    // return (
    //     <>
    //     <div className='main-individual-binding-container'>
    //         <div id="binding-item-container">
    //             <div id="game-mini-thumbnail-container">
    //                 <div id='actual-mini-thumbnail'>
    //                     GAME IMG
    //                 </div>
    //             </div>
    //             <div id='binding-detail-container'>
    //                 <div className="binding-set-container">
    //                     <div className="bindpage-move-title-name">Moves</div>
    //                     <div className="bindpage-move-title-binding">Bindings</div>
    //                 </div>
    //                 {Object.keys(bindingsObject).map(move =>
    //                     <>
    //                         <div className="individual-set-container">
    //                             <div className='move-name'>{move}</div>
    //                             <div className="move-binding">{moveSet[move]}</div>
    //                         </div>
    //                     </>
    //                 )}            
    //             </div>
    //             <div id='controller-mini-thumbnail'>
    //                 <div id='controller-icon-container'>
    //                     <img src={getControllerIcon(binding.controller)} alt="controller-icon" id='controller-icon' />
    //                 </div>
    //             </div>
    //             <div className='toggle-menu'>
    //                 <div onClick={openUpdate}>update</div>
    //                 <div onClick={deleteBind}>delete</div>
    //             </div>
    //         </div>
    //         <div id={binding._id} className='update-binding'>
    //                 <div id="profile-main-container">
    //                     <div className="x-positioning"><img onClick={handleClose} src={x} /></div>
    //                     <h1 className="profile-game-title">{gameTitle(binding)}</h1>
    //                     <Keyboard currentKey={currentKey}/>
    //                     <div className="move-set-container">
    //                         <div className="individual-set-container1">
    //                             <div className="move-set-title-name">Moves</div>
    //                             <div className="move-set-title-binding">Bindings</div>
    //                         </div>
    //                         {Object.keys(moveSet).map((move, i) =>
    //                             <>
    //                                 <div id={`${move}-container`} className="individual-set-container">
    //                                     <div className='move-name' id={move} onClick={handleMove}>{move}</div>
    //                                     <div className="move-binding" id={`${move}-selection`}> </div>
    //                                 </div>
    //                             </>
    //                         )}
    //                     </div>
    //                     <button className='create-button' onClick={handleUpdate}>Update</button>
    //                 </div>            
    //             </div>
    //     </div>
    //     </>
    // )
// create:
// {
//     "user": "6372bce9c6f3636a1efe9dec",
//     "game": "63752873afb6a1247fc7250f",
//     "controller": "pc",
//     "keyBinds": {
//         "ability3": "KeyA"
//     }
// }
// }
// {
//     "_id": "63767ef05a1a77b63aa8b4a9",
//     "user": "6372bce9c6f3636a1efe9dec",
//     "game": "63767ef05a1a77b63aa8b4a9",
//     "controller": "pc",
//     "keyBinds": {
//         "ability1": "KeyA",
//         "ability3": "KeyS",
//         "ability2": "KeyD",
//         "summoner spell 2": "KeyV",
//         "item 3": "KeyX"
//     }
// }
