import './App.css';
import MajorSegment from './Components/MajorSegment.js'
import Constellation from './Components/Constellation'
import SpaceBlob from './Components/SpaceBlob'
import Skill from './Components/Skill'

const titleElement = 
<div className='splash-text-container'>
  <SpaceBlob styling='starBlob' />
</div>

const segmentOne =
  <div className='hero-page-container'>
  {titleElement}
   <div className='constellation-container'>
      <Constellation className='constellation-component top-left' pattern='Orion'/>
      <Constellation className='constellation-component top-right' pattern='Taurus'/>
      <Constellation className='constellation-component bot-left' pattern='Orion'/>
      <Constellation className='constellation-component bot-right' pattern='Taurus'/>
   </div>
  </div>


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