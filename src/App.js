import './App.css';
import { useEffect, useRef, useState } from 'react';
import HeroPage from './Components/HeroPage';
import ContentBlock from './Components/ContentBlock'
import SkillIcon from './Components/SkillIcon';
import NavBar from './Components/NavBar';
import ProjectLink from './Components/ProjectLink';
import Footer from './Components/Footer';


function App() {
  const vh = window.screen.height;
  const vw = window.screen.width;

  const aboutText = 'My name is David K. Schaarschmidt. I am a front-end developer with over 3 years of experience with a variety of software technologies and tools. Outside of work, you can find me playing video games, working on my boat, or pursuing new hobbies.';

  const workText = <>
    <ProjectLink goTo='' title='Portfolio' text={
      <>
        <SkillIcon skill='HTML'/>
        <SkillIcon skill='CSS'/>
        <SkillIcon skill='JavaScript'/>
        <SkillIcon skill='React'/>
      </>
    } />
    <ProjectLink goTo='https://deckmarket.netlify.app/' title='Deck Market' text={
          <>
            <SkillIcon skill='HTML'/>
            <SkillIcon skill='CSS'/>
            <SkillIcon skill='Sass'/>
            <SkillIcon skill='JavaScript'/>
            <SkillIcon skill='React'/>
            <SkillIcon skill='React-Spring'/>
          </>
    } />
  </>;
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const refArray = [homeRef, aboutRef, workRef, contactRef];

  useEffect(() => {
    generateStars();

  }, []);

  const generateStars = () => {
    for(let a = 0; a < 1000; a++){
      let svgObj = document.getElementById('svg-id');

      let x = Math.floor(Math.random() * vw);
      let y = Math.floor(Math.random() * (vh * 3));
      
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
      <svg id='svg-id' viewbox= '0 0 1920 5400'></svg>
      <NavBar refArray={refArray} additionalClass='fixedNav'/>
      <HeroPage setRef={homeRef} refArray={refArray}/>
      <ContentBlock setRef={aboutRef} title='About' text={aboutText} bgStyle='bg-white' textStyle='text-dark'/>
      <ContentBlock setRef={workRef} title='Projects' text={workText} textStyle='text-white' titleStyle='title-white'/>
      <Footer setRef={contactRef}/>
    </div>
  );
}

export default App;