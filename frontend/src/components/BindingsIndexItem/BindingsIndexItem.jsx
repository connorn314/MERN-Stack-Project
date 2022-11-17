import './BindingsIndexItem.css';
import keyboard from './keyboard.png';
import xboxController from './xbox-controller.png';
import gamecubeController from './noun-video-game-controller-45094.png';

const BindingIndexItem = ({binding}) => {
    const moveSet = binding.keyBinds;

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

    return (
        <>
        <div className='main-individual-binding-container'>
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
                    Hello
            
                </div>
            </div>

        </div>
        </>
    )
}

export default BindingIndexItem;