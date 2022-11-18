import backgroundVideo from './neon-background.mp4'
import './MainPage.css'

function MainPage() {
  return (
    <>
      <div className="main-mainpage-container">
        <video className='background-video' autoPlay loop muted id='video' src={backgroundVideo} />
          <div className='text-box-container'>
            <h1 className='splash-text-title'>Welcome to</h1>
          <p className='splash-text'>KEYWI</p>
          </div>
      </div>
    </>
  );
}

export default MainPage;