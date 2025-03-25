import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/hero.css"

const Hero = () => {

  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = (element, text, delay = 100) => {
      element.innerHTML = "";  // Clear previous content
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          element.innerHTML += text[i];
        }, delay * i);
      }
    };

    if (typewriterRef.current) {
      typewriter(typewriterRef.current, "Welcome to Our Service");
    }
  }, []);

  const navigation = useNavigate()
  return (
    <div className='Hero_Container'>
      <h1 className='content'  ref={typewriterRef}></h1>
      <p className='content'>Empowering you with tailored solutions that drive success and innovation. Experience 
      excellence in every interaction.</p>
      <button onClick={()=> navigation("/enquiry")} className='content'>Make an Enquiry</button>
    </div>
  )
}

export default Hero
