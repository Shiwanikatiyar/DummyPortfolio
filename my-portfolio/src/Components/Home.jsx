import React, { useEffect } from 'react'
import pdf from '../pdf/shiwani resume.pdf'
import photo from './Data/photo.json'
import Typed from 'typed.js'
import { useRef } from 'react'

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() =>{

    const options = {
      strings: ["Welcome to My Profile.", 
        "My Name is Shiwani Katiyar.", 
        "I am Full Stack Web Developer (MERN)."],
      typeSpeed:50,
      backSpeed:50,
      loop: true
    }

    const typed = new Typed(typedRef.current,options)

    return () =>{
      typed.destroy();
    }

},[]);


  return (
    <>
      <div className="Container home" id='home'>
        <div className="left"
         data-aos="fade-up-right"
        data-aos-duration='1000'
        >
          <h1 ref={typedRef}>Shiwani katiyar</h1>
          <a href={pdf}
            download='resume.pdf'
            className="btn btn-outline-warning my-3"
          >
            Download Resume</a>
        </div>
        <div className="right"
         data-aos="fade-up-left"
        data-aos-duration='1000'
        >
          <div className="img">
            <img src={ `/assets/${photo.imgSrc}`} alt="my photo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home