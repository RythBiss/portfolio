import './App.css';
import MajorSegment from './Components/MajorSegment.js';
import HeroPage from './Components/HeroPage';
import SkillsPage from './Components/DarkOverlay';
import Constellation from './Components/Constellation'
import SpaceBlob from './Components/SpaceBlob'
import Skill from './Components/Skill'
import About from './Components/LightOverlay';
import ContentBlock from './Components/ContentBlock'

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
      <MajorSegment body={<HeroPage />} styling='majorSegDark' />
      <ContentBlock body={<About />} styling='majorSegLight' />
      <ContentBlock pos='content-right' body={<About />} styling='majorSegLight' />
      <ContentBlock body={<About />} styling='majorSegLight' />
      <ContentBlock pos='content-right' body={<About />} styling='majorSegLight' />
     
    </div>
  );
}

export default App;