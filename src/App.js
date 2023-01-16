import './App.scss'
import { Container, Row, Col, Image } from 'react-bootstrap'
import React, { useMemo } from 'react'
import Helpers from './components/Helpers'
import myPhoto from './assets/images/Mykhailo_Pomorskyi_Cropped.jpg'

function App() {
  const myAge = useMemo(() => {
    const myBirthday = new Date('08.09.2003')
    var ageDifMs = Date.now() - myBirthday
    var ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }, [])

  return (
    <React.Fragment>
      <Helpers />
      <div className='App'>
        <Container className='outerContainer'>
          <Row>
            <Col xs={0} lg={1}></Col>
            <Col xs={12} lg={9}>
              <section id='greetings'>
                <h6>Hello, my name is</h6>
                <h1>Mykhailo Pomorskyi</h1>
                <h2>Software Engineer</h2>
                <p>
                  I'm a software engineer specializing in frontend (my main aim
                  is to become full stack engineer). I'm good at{' '}
                  <a href='#' target='_blank'>
                    React, JavaScript (EcmaSCRIPT)
                  </a>
                  ,&nbsp;
                  <a href='#' target='_blank'>
                    Algorithms and Data Structures
                  </a>
                </p>
                <div className='outerAccentButton'>
                  <a
                    href='https://github.com/Pomorskyi'
                    className='accentButton'
                    target='_blank'
                  >
                    Check my GitHub profile!
                  </a>
                </div>
              </section>
            </Col>
            <Col xs={0} lg={2}></Col>
          </Row>
          <Row id='aboutMe'>
            <Col xs={0} lg={2}></Col>
            <Col xs={12} lg={6}>
              <h3>📝 About Me</h3>
              <p>
                Hello, my name is Mykhailo and my passion is programming,
                puzzles and math. I am based in{' '}
                <span className='accentedText'>Warsaw, Poland</span> and I am a
                &nbsp;<span className='accentedText'>part-time student</span>{' '}
                here at the Polish-Japanese Academy of Information Technologies
                where I am doing a Bachelor of Engineering in Computer Science.
              </p>
              <p>
                In my young ages (I am only&nbsp;
                <span className='accentedText'>{myAge}</span>) I have worked as
                a freelancer on Upwork and as a software engineer at big company
                where I work now, more information on{' '}
                <a href='#' target='_blank'>
                  LinkedIn
                </a>
                .
              </p>
              <p>
                I am good at Frontend but I am not staring at this point! I am
                moving to full stack developer, that's why I pursuing node.js
                course on Udemy. Other interests: Blockchain, Cloud, Artificial
                Inteligence
              </p>
              <p>Here are a few technologies I've been working with:</p>
              <Container>
                <Row>
                  <Col xs={6}>
                    <ul>
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>Angular</li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul>
                      <li>Git</li>
                      <li>Java</li>
                      <li>C++</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={12} lg={3}>
              <div className='bg-image hover-overlay'>
                <img
                  className='img-fluid'
                  src={myPhoto}
                  alt='Mykhailo Pomorskyi'
                />
              </div>
            </Col>
          </Row>
          <Row id='aboutMe'>
            <Col xs={0} lg={1}></Col>
            <Col xs={12} lg={6}>
              <h3>⚡ Experience</h3>
              <p>
                Hello, my name is Mykhailo and my passion is programming,
                puzzles and math. I am based in{' '}
                <span className='accentedText'>Warsaw, Poland</span> and I am a
                &nbsp;<span className='accentedText'>part-time student</span>{' '}
                here at the Polish-Japanese Academy of Information Technologies
                where I am doing a Bachelor of Engineering in Computer Science.
              </p>
              <p>
                In my young ages (I am only&nbsp;
                <span className='accentedText'>{myAge}</span>) I have worked as
                a freelancer on Upwork and as a software engineer at big company
                where I work now, more information on{' '}
                <a href='#' target='_blank'>
                  LinkedIn
                </a>
                .
              </p>
              <p>
                I am good at Frontend but I am not staring at this point! I am
                moving to full stack developer, that's why I pursuing node.js
                course on Udemy. Other interests: Blockchain, Cloud, Artificial
                Inteligence
              </p>
              <p>Here are a few technologies I've been working with:</p>
              <Container>
                <Row>
                  <Col xs={6}>
                    <ul>
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>Angular</li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul>
                      <li>Git</li>
                      <li>Java</li>
                      <li>C++</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col xs={0} lg={1}></Col>
            <Col xs={12} lg={8}>
              <section id='work'>
                Hi, my name is Brittany Chiang. I build things for the web. I'm
                a software engineer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I'm
                focused on building accessible, human-centered products at
                Upstatement.
              </section>
            </Col>
            <Col xs={0} lg={3}></Col>
          </Row>
          <Row>
            <Col xs={0} lg={1}></Col>
            <Col xs={12} lg={8}>
              <section id='contact'>
                Hi, my name is Brittany Chiang. I build things for the web. I'm
                a software engineer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I'm
                focused on building accessible, human-centered products at
                Upstatement.
              </section>
            </Col>
            <Col xs={0} lg={3}></Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default App
