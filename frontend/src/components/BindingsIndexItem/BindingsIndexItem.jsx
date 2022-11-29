import './BindingsIndexItem.css';
import * as userActions from '../../store/users';
import * as gameActions from '../../store/games';
import keyboard from './keyboard.png';
import xboxController from './xbox-controller.png';
import XboxControllerTest from '../XboxControllerTesting';
import gamecubeController from './noun-video-game-controller-45094.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBinding, updateBinding } from '../../store/bindings';
import Keyboard from '../Keyboard';
import x from '../ProfilePage/green-X.png'
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import XboxController from '../XboxController';

const BindingIndexItem = ({binding}) => {

    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [currentKey, setCurrentKey] = useState('');
    const [bindingsObject, setBindingsObject] = useState(binding.keyBinds);
    const [showMain, setShowMain] = useState(true);
    // const keybind = useSelector(state => state.currentBindings)
    
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



    const openUpdate = e => {
        if (user._id === binding.user) {
            setShowMain(false)
        }    
    }

    const handleMove = (e) => {
        if (currentKey !== '') {
            // console.log(currentKey)
            document.getElementById(`${currentKey}-container`).style.backgroundColor = 'transparent'
        }
        setCurrentKey(e.target.id)
        // console.log(currentKey)
        document.getElementById(`${e.target.id}-container`).style.backgroundColor = '#2E294E'
    }

    const handleSelection = useCallback((e) => {
        let objCopy = { ...bindingsObject }
        objCopy[currentKey] = e.target.id
        setBindingsObject(bindingsObject => ({
            ...objCopy
        }))
    }, [currentKey])

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
        console.log(updatedBinding)
        dispatch(updateBinding(updatedBinding))
        setShowMain(true)
        // window.location.reload()
    }

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
                            <div onClick={openUpdate} id="edit-option-button-1">update</div>
                            <div onClick={deleteBind}  id="edit-option-button-1">delete</div>
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