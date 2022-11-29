import './BindingsIndexItem.css';
import * as userActions from '../../store/users';
import * as gameActions from '../../store/games';
import keyboard from './keyboard.png';
import xboxController from './xbox-controller.png';
import gamecubeController from './noun-video-game-controller-45094.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBinding, updateBinding } from '../../store/bindings';
import { createLike, getGameLikes } from '../../store/likes';
import Keyboard from '../Keyboard';
import x from '../ProfilePage/green-X.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import XboxController from '../XboxController';

const BindingIndexItem = ({binding, gameId}) => {
    const history = useHistory()
    const moveSet = binding.keyBinds;
    const user = useSelector(state => state.session.user);
    const [showMain, setShowMain] = useState(true)
    const [currentKey, setCurrentKey] = useState()
    const dispatch = useDispatch();
    const keybind = useSelector(state => state.currentBindings)
    const likes = useSelector(state => state.likes)

    useEffect(()=>{
        dispatch(getGameLikes(gameId))
    },[dispatch])

    const gameTitle = (binding) =>{
        if (binding.controller === 'xbox-one'){
            return 'Rocket League'
        } else if (binding.controller === 'pc'){
            return 'League of Legends'
        } else{
            return 'Super Smash Bros Ultimate'
        }
    }
    const handleClose = e => {
        e.preventDefault();
        // document.getElementById('profile-main-container').style.display = 'none'
        // document.getElementById('dropdown-container').style.display = 'block'
        // dispatch(clearCurrentBindings())
        window.location.reload(false)
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
        dispatch(gameActions.fetchGame(binding.game))
        dispatch(userActions.getOneUser(binding.user))
        if(moveSet){
            setCurrentKey(Object.keys(moveSet)[0])
        }
 
    }, [])



    const openUpdate = e => {
        if (user._id === binding.user) {
            setShowMain(false)
            // document.getElementById(binding._id).style.display = 'block'
        }    
    }

    const handleMove = (e) => {
        if (currentKey !== '') {
            document.getElementById(`${currentKey}-container`).style.backgroundColor = 'transparent'
        }
        setCurrentKey(e.target.id)
        document.getElementById(`${e.target.id}-container`).style.backgroundColor = '#2E294E'
    }

    // const controller = {
    //     'pc': <Keyboard currentKey={currentKey} />,


    // }

    const deleteBind = e => {
        if (user._id === binding.user){
            dispatch(deleteBinding(binding))
            history.push("/profile")
            window.location.reload()
        }
    }

    const handleUpdate = e => {

        e.preventDefault()
        let updatedBinding = {
            _id: binding._id,
            user: user._id,
            game: binding.game,
            controller: binding.controller,
            keyBinds: keybind
        }
        console.log(updatedBinding)
        dispatch(updateBinding(updatedBinding))

        history.push("/profile")
        window.location.reload()
    }

    let userLike = Object.values(likes).find(like => {
        return like.user == user._id
    })

    let liked = userLike ? true : false
    const handleLike = e => {
        e.preventDefault();

        if (!liked){
            e.target.setAttribute("stroke", "red")
            let newLike = {
                user: user._id,
                binding: binding._id,
                game: gameId
            }
            dispatch(createLike(newLike))
        }
    }

    const controllers = {
        "pc":    <Keyboard currentKey={currentKey} currentBind={moveSet}/>,
        "xbox-one": <XboxController currentKey={currentKey} currentBind={moveSet} />
    }

    if(game){
    return showMain ? (
        <>
            <div className='main-individual-binding-container'>
                <div id="binding-item-container">
                    <div id="game-mini-thumbnail-container">
                        <div id='actual-mini-thumbnail'>
                            <div id='author-div'>Game: {game.title}</div>
                            {author && (
                                <div id='author-div'>User: {author.username}</div>
                                )}
                            </div>
                        </div>    
                        <div id='binding-detail-container'>
                            <div className="binding-set-container">
                                <div className="bindpage-move-title-name">Moves</div>
                                <div className="bindpage-move-title-binding">Bindings</div>
                            </div>
                            {Object.keys(moveSet).map(move =>
                                <>
                                    <div className="individual-set-container">
                                        <div className='move-name'>{move}</div>
                                        <div className="move-binding">{moveSet[move]}</div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div id='controller-mini-thumbnail'>
                            <div id='controller-icon-container'>
                                <img src={getControllerIcon(binding.controller)} alt="controller-icon" id='controller-icon' />
                            </div>
                        </div>
                        <div className='toggle-menu'>
                            <div onClick={openUpdate} id="edit-option-button-1">update</div>
                            <div onClick={deleteBind}  id="edit-option-button-1">delete</div>
                        <div onClick={handleLike}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke="white" ><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg></div>
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
                        <>
                            <div id={`${move}-container`} className="individual-set-container">
                                <div className='move-name' id={move} onClick={handleMove}>{move}</div>
                                <div className="move-binding" id={`${move}-selection`}>{moveSet[move]}</div>
                            </div>
                        </>
                    )}
                </div>
                <button className='create-button' onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )}

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
    //                 {Object.keys(moveSet).map(move =>
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
}

export default BindingIndexItem;
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