import React from 'react'
import pdf from '../pdf/shiwani resume.pdf'

const Navbar = () => {
  return (
    <>
      <div className="Container nav_bar" style={{padding:'0px 70px'}}
        data-aos="fade-down"
        data-aos-duration='1000'
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_items">Home</a>
          <a href="#about" className="nav_items">About</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#project" className="nav_items">Project</a>
          <a href="#contact" className="nav_items">Contact</a>
          <a href={pdf}
            download='resume.pdf'
            className="nav_items"
          >Resume</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
