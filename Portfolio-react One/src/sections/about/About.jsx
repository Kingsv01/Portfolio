import AboutImage from '../assets/about.jpg'
import CV from '../assets/CV.jpg'
import data from './data.js'
import Card from '../../component/Card'
import {HiDownload} from 'react-icons/hi'
import './about.css'

function About() {
  return (
    <section  id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nisi quia magnam magni 
          est aliquam odit, qui neque incidunt numquam.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione doloribus dolore velit,
           inventore asperiores quasi consectetur mollitia sapiente fugit perferendis maiores optio sunt,
            voluptatibus veritatis laudantium expedita tempore facere.
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>

  )
}

export default About
