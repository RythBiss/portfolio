import './App.css';
import { useEffect } from 'react';
import HeroPage from './Components/HeroPage';
import ContentBlock from './Components/ContentBlock'


function App() {

  const aboutText = 'My name is David K. Schaarschmidt. I am a front-end developer with over 3 years of experience with a variety of software technologies and tools. Outside of work, you can find me playing video games, working on my boat, Mable, or taking road trips to interesting restaurants.';

  useEffect(() => {
    generateStars();
  })

  const generateStars = () => {

    for(let a = 0; a < 1000; a++){
      let svgObj = document.getElementById('svg-id');

      let x = Math.floor(Math.random() * 1920);
      let y = Math.floor(Math.random() * 5400);
      
      const svg_star_element = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

      svg_star_element.setAttribute("cx", x);  
      svg_star_element.setAttribute("cy", y);
      svg_star_element.setAttribute("r", "1");
      svg_star_element.setAttribute("fill", `#6ac2fc`);
      svgObj.appendChild(svg_star_element);
      svgObj.appendChild(svg_star_element);
    }
  }

  return (
    
    <div className="App">
      
      {/* this gets filled in by generateStars. */}
      <svg id='svg-id' className='bg-stars' viewbox= '0 0 1920 5400'></svg>

      <HeroPage />
      <skillIcon />
      <ContentBlock className='solid' title='About' text={aboutText}/>
      <ContentBlock title='Skills' text='skills' content={'skill icons'} pos='content-right'/>
      <ContentBlock className='solid' title='Work' text='List of projects' />
      <ContentBlock title='Contact' text='dkschaarschmidt@gmail.com || 240-866-0273' pos='content-center' />
    </div>
  );
}

export default App;