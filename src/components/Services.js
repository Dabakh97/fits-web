/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {BsWebcamFill} from 'react-icons/bs'
import {GrWebcam} from 'react-icons/gr'
const Services = () => {
  return (
    <div className='section-center services'>
      <div className='cequi-pro'>
        <h5> Services</h5>
        <h2> CE QUE NOUS PROPOSONS </h2>
        <div className='ligne'></div>
      </div>
      <div className='contener-cadre'>
        <div className='cadre'>
          <div className='cadre-site cadre-front'>
            <span>
              <BsWebcamFill />
            </span>
            <h3> Ingenieur Logicielle </h3>
          </div>
          <div className='cadre-site cadre-back'>
            <div className='back-info'>
              <div className='back-icone'>
                <span>
                  <BsWebcamFill />
                </span>
                <h3> Ingenieur Logicielle </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  neque obcaecati dolores laborum, quas tempora quod ex quos
                  necessitatibus tenetur!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='cadre'>
          <div className='cadre-site cadre-front'>
            <span>
              <BsWebcamFill />
            </span>
            <h3> Ingenieur Logicielle </h3>
          </div>
          <div className='cadre-site cadre-back'>
            <div className='back-info'>
              <div className='back-icone'>
                <span>
                  <BsWebcamFill />
                </span>
                <h3> Ingenieur Logicielle </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  neque obcaecati dolores laborum, quas tempora quod ex quos
                  necessitatibus tenetur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services