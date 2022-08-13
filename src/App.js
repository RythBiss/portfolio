import './App.css';
import MajorSegment from './Components/MajorSegment.js'
import Constellation from './Components/Constellation'
import SpaceBlob from './Components/SpaceBlob'
import Skill from './Components/Skill'

const titleElement = 
<div className='splashTextCont'>
  <SpaceBlob styling='starBlob' />
  <div className='splashText'>
    <h1 className='textLight'>
      Davd Schaarschmidt
    </h1>
    <div id='line'/>
    <h1 className='textLight'>
      Frontend Developer
    </h1>
  </div>
</div>

const segmentOne =
  <>
  {titleElement}
    <div  id='splashDisplay'>
      <div className='constellationGroupings'>
        <Constellation className='constellationContainer TopLeft' pattern='Taurus'/>
        <Constellation className='constellationContainer BottomLeft' pattern='Orion'/>
      </div>
      <div className='constellationGroupings'>
        <Constellation className='constellationContainer TopRight' pattern='Taurus'/>
        <Constellation className='constellationContainer BottomRight' pattern='Orion'/>
      </div>
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
      <MajorSegment body={segmentOne} styling='majorSegDark' />
      <MajorSegment body={skillsElement} styling='majorSegLight' />
      <MajorSegment body='Work' styling='majorSegDark' />
    </div>
  );
}

export default App;