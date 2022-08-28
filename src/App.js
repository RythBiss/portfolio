import './App.css';
import { useEffect, useRef, useState } from 'react';
import HeroPage from './Components/HeroPage';
import ContentBlock from './Components/ContentBlock'
import SkillIcon from './Components/SkillIcon';
import NavBar from './Components/NavBar';


function App() {

  const aboutText = 'My name is David K. Schaarschmidt. I am a front-end developer with over 3 years of experience with a variety of software technologies and tools. Outside of work, you can find me playing video games, working on my boat, Mable, or taking road trips to interesting restaurants.';
  const skillsText = <>
    <SkillIcon skill='HTML'/>
    <SkillIcon skill='CSS'/>
    <SkillIcon skill='JavaScript'/>
    <SkillIcon skill='React'/>
    <SkillIcon skill='Git/Github'/>
    <SkillIcon skill='Java'/>
    <SkillIcon skill='C++'/>
    <SkillIcon skill='C#'/>
    {/* hover display? */}
  </>;
  const workText = 'fancy projects';
  const contactText = 'dkschaarschmidt@gmail.com || 240-866-0273'
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const refArray = [homeRef, aboutRef, skillRef, workRef, contactRef]

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    generateStars();

    window.addEventListener("scroll", handleScrollPos);

    return () => {
        window.removeEventListener("scroll", handleScrollPos);
    };
  }, []);

  useEffect(() => {
    setScrollPos(window.pageYOffset);
  });

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

  const handleScrollPos = () => {
    const pos = window.pageYOffset;
    setScrollPos(pos);
}

  return (
    
    <div className="App">
      {/* this gets filled in by generateStars. */}
      <svg id='svg-id' viewbox= '0 0 1920 5400'></svg>
      {scrollPos > window.innerHeight-1 ? <NavBar refArray={refArray} additionalClass='fixedNav'/> : ''}
      <HeroPage setRef={homeRef} refArray={refArray}/>
      <ContentBlock setRef={aboutRef} title='About' text={aboutText} bgStyle='bg-white' textStyle='text-dark'/>
      <ContentBlock setRef={skillRef} title='Skills' text={skillsText} textStyle='text-white' titleStyle='title-white'/>
      <ContentBlock setRef={workRef} title='Work' text={workText} bgStyle='bg-white' textStyle='text-dark'/>
      <ContentBlock setRef={contactRef} title='Contact' text={contactText} bgStyle='bg-dark' textStyle='text-white' titleStyle='title-white'/>
    </div>
  );
}

export default App;