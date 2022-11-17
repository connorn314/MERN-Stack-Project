import './BindingsIndexItem.css';

const BindingIndexItem = ({binding}) => {
    
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
                <div>
                    Diagram of {binding.controller} Controller
                </div>
            </div>
        </div>
    )
}

export default BindingIndexItem;