import React from 'react'
import pdf from '../pdf/shiwani resume.pdf'
import my from './Data/my.json'

const About = () => {
  return (
    <>
    <h1>ABOUT ME</h1>
      <div className="Container about" id='about'>
        
        <div className="left"
          data-aos="zoom-in-right"
          data-aos-duration='1000'
        >
          <div className="img">
            <img src={`/assets/${my.imgSrc}`} alt="my photo" />
          </div>
        </div>

        <div className="right"
          data-aos="zoom-in-left"
          data-aos-duration='1000'
        >
          <h3>About Me</h3>
          <p>Hello! I'm Shiwani Katiyar from Kannauj, Uttar Pradesh.
             I graduated in 2020 and am currently learning Full Stack Web Development 
             at Masai School, Bangalore. I am passionate about building web applications,
              especially in the e-commerce domain. My training has equipped me with front-end and 
              back-end skills, preparing me to tackle complex tech challenges. 
            I'm eager to work on real-world projects and contribute to innovative teams.</p>
        </div>
      </div>
    </>
  )
}

export default About