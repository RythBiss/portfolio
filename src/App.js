import './App.css';
import { useEffect } from 'react';
import HeroPage from './Components/HeroPage';
import ContentBlock from './Components/ContentBlock'


function App() {

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
      svg_star_element.setAttribute("fill", "#f7f4d7");

      svgObj.appendChild(svg_star_element);
    }
  }

  return (
    
    <div className="App">

      {/* this gets filled in by generateStars. */}
      <svg id='svg-id' viewbox= '0 0 1920 5400'></svg>

      <HeroPage />
      <ContentBlock title='About' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      <ContentBlock title='Skills' text='' pos='content-right'/>
      <ContentBlock title='Work' text='List of projects' />
      <ContentBlock title='Contact' text='Contact form. Maybe this last one should be centered.' pos='content-center' />
     
    </div>
  );
}

export default App;