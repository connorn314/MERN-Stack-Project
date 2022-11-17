import './BindingsIndexItem.css';
import keyboard from './keyboard.png';
import xboxController from './xbox-controller.png';
import gamecubeController from './noun-video-game-controller-45094.png';

const BindingIndexItem = ({binding}) => {
    
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
        <div id="binding-item-container">
            <div id="game-mini-thumbnail-container">
                <div id='actual-mini-thumbnail'>
                    GAME IMG
                </div>
            </div>
            <div id='binding-detail-container'>
                Binding Name
            </div>
            <div id='controller-mini-thumbnail'>
                <div id='controller-icon-container'>
                    <img src={getControllerIcon(binding.controller)} alt="controller-icon" id='controller-icon' />
                </div>
            </div>
        </div>
    )
}

export default BindingIndexItem;