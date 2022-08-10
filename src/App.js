import './App.css';
import spaceBlob from './img/Space Blob.gif'
import MajorSegment from './MajorSegment.js'
import Constellation from './img/Components/Constellation';

const spaceBlobElement =
  <div  id='spaceBlob'>
    <div className='splashTextCont'>
      <h1 className='textLight'>Davd Schaarschmidt</h1>
      <div id='line'></div>
      <h1 className='textLight'>Frontend Developer</h1>
    </div>
    <img id='img' src={spaceBlob} alt='spaceBlob' />
  </div>

const Orion = <Constellation />

function App() {
  return (
    <div className="App">
      <MajorSegment body={spaceBlobElement} styling='majorSegDark' />
      <MajorSegment body='Skills' styling='majorSegLight' />
      <MajorSegment body={Orion} styling='majorSegDark' />
    </div>
  );
}

export default App;