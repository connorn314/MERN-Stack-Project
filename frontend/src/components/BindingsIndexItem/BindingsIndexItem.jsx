import './BindingsIndexItem.css';
import keyboard from './keyboard.png';
import xboxController from './xbox-controller.png';
import gamecubeController from './noun-video-game-controller-45094.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBinding } from '../../store/bindings';
import Keyboard from '../Keyboard';
import x from '../ProfilePage/green-X.png'
import { useState } from 'react';

const BindingIndexItem = ({ binding, currentKey, setCurrentKey}) => {
    const moveSet = binding.keyBinds;
    const user = useSelector(state => state.session.user);
    const [showMain, setShowMain] = useState(true)
    const dispatch = useDispatch();

    
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
        }
    }

    const handleUpdate = e => {
        e.preventDefault();
    }

    return showMain ? (
        <>
    `        <div className='main-individual-binding-container'>
                <div id="binding-item-container">
                    <div id="game-mini-thumbnail-container">
                        <div id='actual-mini-thumbnail'>
                            GAME IMG
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
                        <div onClick={openUpdate}>update</div>
                        <div onClick={deleteBind}>delete</div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <div id={binding._id} className='update-binding'>
            <div id="update-binding2">
                <div className="x-positioning"><img onClick={handleClose} src={x} /></div>
                <h1 className="profile-game-title">{gameTitle(binding)}</h1>
                <Keyboard currentKey={currentKey} />
                <div className="move-set-container">
                    <div className="individual-set-container1">
                        <div className="move-set-title-name">Moves</div>
                        <div className="move-set-title-binding">Bindings</div>
                    </div>
                    {Object.keys(moveSet).map((move, i) =>
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
    )

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