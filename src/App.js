import './App.css';
import MajorSegment from './Components/MajorSegment.js'
import Constellation from './Components/Constellation'
import SpaceBlob from './Components/SpaceBlob'
import Skill from './Components/Skill'

const Orion = <Constellation pattern='Orion' />
const Taurus = <Constellation pattern='Taurus' />

const titleElement = 
<>
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
</>

const spaceBlobElement =
  <>
    <div  id='splashDisplay'>
      {Taurus}
      {titleElement}
      {Orion}
    </div>
  </>


const skillsElement = 
<>
  <Skill skillName='HTML' />
  <Skill skillName='CSS' />
  <Skill skillName='JavaScript' />
  <Skill skillName='React' />
</>

function App() {
  return (
    <div className="App">
      <MajorSegment body={spaceBlobElement} styling='majorSegDark' />
      <MajorSegment body={skillsElement} styling='majorSegLight' />
      <MajorSegment body='Work' styling='majorSegDark' />
    </div>
  );
}

export default App;