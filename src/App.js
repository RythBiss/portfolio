import './App.css';
import MajorSegment from './Components/MajorSegment.js'
import Constellation from './Components/Constellation'
import SpaceBlob from './Components/SpaceBlob'

const Orion = <Constellation pattern='Orion' />
const Taurus = <Constellation pattern='Taurus' />

const SpaceView = 
<div>
  <SpaceBlob styling='starBlob' />
  <div className='splashTextCont'>
    <h1 className='textLight'>
      Davd Schaarschmidt
    </h1>
    <div id='line'/>
    <h1 className='textLight'>
      Frontend Developer
    </h1>
  </div>
</div>

const spaceBlobElement =
  <>
    <div  id='splashDisplay'>
      {Taurus}
      {SpaceView}
      {Orion}
    </div>
  </>

function App() {
  return (
    <div className="App">
      <MajorSegment body={spaceBlobElement} styling='majorSegDark' />
      <MajorSegment body='Skills' styling='majorSegLight' />
      <MajorSegment body='Work' styling='majorSegDark' />
    </div>
  );
}

export default App;