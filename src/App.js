import './App.css';
import logo from './img/Space Blob.gif'

function App() {
  return (
    <div className="App">
      <div className='majorSegDark'>
        <div id='header'>
          <h2 className='textLight'>
            Header
          </h2>
        </div>
        <h1 className='textLight'>
          Portfolio Intro
        </h1>
        <img id='spaceBlob' src={logo} alt="space blob" />
      </div>
      <div className='majorSegLight'>
        <h1 className='textLight'>
          Skills
        </h1>
      </div>
      <div className='majorSegDark'>
        <h1 className='textLight'>
          Project Links
        </h1>
      </div>
    </div>
  );
}

export default App;
