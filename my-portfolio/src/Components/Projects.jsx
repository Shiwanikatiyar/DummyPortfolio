import React from 'react'
import project from './Data/project.json'

const Projects = () => {
  return (
    <>
      <div classNameName="Container projects my-3 " id='project'>
        <h1> MY PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-5"
              >
                <div
                  className="card bg-dark text-light"
                  data-aos="flip-right"
                  data-aos-duration='1000'
                  style={{
                    width: '18rem',
                    border: '2px solid yellow',
                    // borderRadius: '10px',
                    boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)'
                  }}>

                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: '200px',
                        height: '200px',
                        border: '2px solid yellow',
                        borderRadius: '10px'
                      }}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>

                    <a href={data.demo}
                      className="btn btn-primary"
                      style={{ margin: '2px' }}>Live</a>

                    <a href={data.source}
                      className="btn btn-warning"
                      style={{ margin: '2px' }}>Github</a>
                  </div>
                </div>
              </div>
            </>))}
        </div>
      </div>
    </>
  )
}

export default Projects