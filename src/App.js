import './App.css';
import spaceBlob from './img/Space Blob.gif'
import MajorSegment from './MajorSegment.js'

const spaceBlobElement =
  <div  id='spaceBlob'>
    <div className='splashTextCont'>
      <h1 className='textLight'>Davd Schaarachmidt</h1>
      <div id='line'></div>
      <h1 className='textLight'>Frontend Developer</h1>
    </div>
    <img id='img' src={spaceBlob} alt='spaceBlob' />
  </div>

  const hexBackgroundElement = <div className='hexagon'/>;

function App() {
  return (
    <div className="App">
      <MajorSegment body={spaceBlobElement} styling='majorSegLight' />
      <MajorSegment body={hexBackgroundElement} styling='majorSegDark' />
      <MajorSegment body='Add links to projects' styling='majorSegLight' />
    </div>
  );
}

export default App;