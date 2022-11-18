import './GameBanner.css'
import { Link } from 'react-router-dom';

const GameBanner = ({game, i}) => {

  
  return (
    <>
    {console.log(game._id)}
      <div className={`main-banner-container_${i}`} >
        <img className={`gamebanner_${i}`} />
        <div className='game-information-main-container'>
          <div className='game-information-text-container'>
            <p className={`game-description-text_${i}`}>{game.description}</p>
          </div>
        </div>
        {/* <div className='banner-button-main-container'>
          <Link exact to={`/games/${game._id}`}>
          <div className={`learn-more-${i}`}>learn more</div>
        </Link>
        </div> */}
        <div class={`wrapper-${i}`}>
          <Link className={`link-${i}`} exact to={`/games/${game._id}`}>
            <div className='check-keybinds'>Key Binds</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GameBanner