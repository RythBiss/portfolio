import './App.css';
import spaceBlob from './img/Space Blob.gif'
import MajorSegment from './MajorSegment.js'

const spaceBlobElement =
  <div  id='spaceBlob'>
    <div className='splashTextCont'>
      <h1 className='textLight'>Davd Schaarschmidt</h1>
      <div id='line'></div>
      <h1 className='textLight'>Frontend Developer</h1>
    </div>
    <img id='img' src={spaceBlob} alt='spaceBlob' />
  </div>

  //Carrie's constelation idea and transition idea

function App() {
  return (
    <div className="App">
      <MajorSegment body={spaceBlobElement} styling='majorSegDark' />
      <MajorSegment body='Skills here' styling='majorSegLight' />
      <MajorSegment body='Add links to projects' styling='majorSegDark' />
    </div>
  );
}

export default App;