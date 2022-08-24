import './App.css';
import MajorSegment from './Components/MajorSegment.js';
import HeroPage from './Components/HeroPage';
import SkillsPage from './Components/DarkOverlay';
import Constellation from './Components/Constellation'
import SpaceBlob from './Components/SpaceBlob'
import Skill from './Components/Skill'
import ContentBlock from './Components/ContentBlock'
import { useEffect } from 'react';

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

  useEffect(() => {
    generateStars();
  }, [])

  const generateStars = () => {
    let svgObj = document.getElementById('svg-id');

    for(let a = 0; a < 1000; a++){
      let x = Math.floor(Math.random() * 1920);
      let y = Math.floor(Math.random() * 5400);
      
        const newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
      newElement.setAttribute("cx", x);  
      newElement.setAttribute("cy", y);
      newElement.setAttribute("r", "1");
      newElement.setAttribute("fill", "#f7f4d7");    
      svgObj.appendChild(newElement);
    }
  }

  return (
    
    <div className="App">

      <svg id='svg-id' viewbox= '0 0 1920 5400'>

      </svg>

      <MajorSegment body={<HeroPage />} styling='majorSegDark' />
      <ContentBlock body='{<About />}' styling='majorSegLight' title='About' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      <ContentBlock pos='content-right' body='{<About />}' styling='majorSegLight' title='Skills' text={skillsElement} />
      <ContentBlock body='{<About />}' styling='majorSegLight' title='Work' text='List of projects' />
      <ContentBlock pos='content-right' body='{<About />}' styling='majorSegLight' title='Contact' text='Contact form. Maybe this last one should be centered.' />
     
    </div>
  );
}

export default App;