import './App.scss'
import { Container, Row, Col } from 'react-bootstrap'
import React, { useMemo, useState } from 'react'
import Helpers from './components/Helpers'
import myPhoto from './assets/images/Mykhailo_Pomorskyi_Cropped.jpg'
import gitHubBg from './assets/images/github_bg.png'
import gitHub from './assets/images/github.png'
import ext_linkBG from './assets/images/ext_link_bg.png'
import ext_link from './assets/images/ext_link.png'
import portfolio from './assets/images/portfolio.png'
import copy_of_website from './assets/images/copy_of_real_website.png'

function App() {
  const [selectedCompany, setSelectedCompany] = useState(0) // sollers, freelance

  const myAge = () => {
    const myBirthday = new Date('08.09.2003')
    var ageDifMs = Date.now() - myBirthday
    var ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const textAmountBetweenDates = (d1, d2) => {
    let months =
      d1.getMonth() - d2.getMonth() + 12 * (d1.getFullYear() - d2.getFullYear())
    let years = Math.floor(months / 12)
    if (years > 0) {
      months %= 12
    }
    let res =
      (years > 0 ? years + ' year' + (years === 1 ? ' ' : 's ') : '') +
      (months !== 0 ? months + ' month' + (months === 1 ? '' : 's') : '')
    return res
  }

  const textAboutCompany = useMemo(() => {
    switch (selectedCompany) {
      case 0: // sollers
        return (
          <React.Fragment>
            <div className='timeFrame'>
              <h6>Apr 2022 - Now</h6>
              <h6>
                {textAmountBetweenDates(new Date(), new Date('04.01.2022'))}
              </h6>
            </div>
            <h5>
              My Responsibilities as{' '}
              <span className='accentedText'>
                Junior Developer &#8594; Software Developer
              </span>
            </h5>
            <p>
              An insurance company from the UK where my team was transferring
              portals from <span className='accentedText'>Angular</span> to{' '}
              <span className='accentedText'>React.js</span>. I was using every
              day <span className='accentedText'>React.js</span>,{' '}
              <span className='accentedText'>git</span>,{' '}
              <span className='accentedText'>Adobe Analytics</span> (for
              tracking users' experience on the portals and for Multivariate
              testing in marketing), and sometimes{' '}
              <span className='accentedText'>Java</span> to check how the back
              end works. Everyday meetings with teamates from client side.
            </p>
            <br />
            <h5>About Company</h5>
            <p>
              Consulting company where 80% of clients are world-known insurance
              and banking companies.
            </p>
            <br />
            <a href='https://sollers.eu/' target='_blank'>
              website
            </a>
          </React.Fragment>
        )
      case 1: // freelance
        return (
          <React.Fragment>
            <div className='timeFrame'>
              <h6>Aug 2021 - Dec 2021</h6>
              <h6>
                {textAmountBetweenDates(
                  new Date('12.01.2021'),
                  new Date('08.01.2021')
                )}
              </h6>
            </div>
            <h5>
              My Responsibilities as{' '}
              <span className='accentedText'>Frontend Developer</span>
            </h5>
            <p>
              It was a time when I was looking for a job at{' '}
              <a href='https://www.upwork.com/' target='_blank'>
                Upwork
              </a>
              , the first client asked me to do static{' '}
              <span className='accentedText'>HTML</span>,{' '}
              <span className='accentedText'>CSS</span> pages for their blog web
              application using the{' '}
              <span className='accentedText'>Bootstrap</span> library for CSS.
              The same client but with another project asked me to do something
              like the previous one but some backend also. Here is when I
              learned what headless CMS is -{' '}
              <span className='accentedText'>Strapi</span>
            </p>
            <br />
            <h5>About Company</h5>
            <p>Climate-friendly startup from Germany</p>
            <br />
            <a href='https://www.upwork.com/' target='_blank'>
              website
            </a>
          </React.Fragment>
        )
      default:
        return <p>unknown company</p>
    }
  }, [selectedCompany])

  return (
    <React.Fragment>
      <Helpers />
      <div className='App'>
        <Container className='outerContainer'>
          <Row>
            <Col xs={0} md={1}></Col>
            <Col xs={12} md={8}>
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
            <Col xs={0} md={3}></Col>
          </Row>
          <Row id='aboutMe'>
            <Col xs={0} md={1} lg={2}></Col>
            <Col xs={12} md={7} lg={6}>
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
                <span className='accentedText'>{myAge()}</span>) I have worked
                as a freelancer on Upwork and as a software engineer at big
                company where I work now, more information on{' '}
                <a href='#' target='_blank'>
                  LinkedIn
                </a>
                .
              </p>
              <p>
                I am good at Frontend but I am not staying at this point! I am
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
            <Col xs={12} md={4} lg={3}>
              <div className='bg-image hover-overlay'>
                <img
                  className='img-fluid'
                  src={myPhoto}
                  alt='Mykhailo Pomorskyi'
                />
              </div>
            </Col>
          </Row>
          <Row id='work'>
            <Col xs={0} md={1}></Col>
            <Col xs={12} md={11}>
              <h3>💼 Work</h3>
              <Container fluid>
                <Row>
                  <Col xs={12} lg={3}>
                    <ul className='btnsList'>
                      <button
                        className={selectedCompany === 0 ? 'activeBtn' : ''}
                        onClick={() => {
                          setSelectedCompany(0)
                        }}
                      >
                        Sollers Consulting
                      </button>
                      <button
                        className={selectedCompany === 1 ? 'activeBtn' : ''}
                        onClick={() => {
                          setSelectedCompany(1)
                        }}
                      >
                        Freelance
                      </button>
                      <h6 className='funnyTip d-none d-lg-block'>
                        your company name here 😜
                      </h6>
                    </ul>
                  </Col>
                  <Col xs={12} lg={7}>
                    <div className='textAboutCompany'>{textAboutCompany}</div>
                  </Col>
                  <Col xs={0} lg={2}></Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row id='projects'>
            <Col xs={0} md={1} lg={2}></Col>
            <Col xs={12} md={10} lg={9}>
              <h3 className='title'>⚡ What I've built</h3>
              <Container fluid>
                <Row className='projectDesc'>
                  <div className='imgContainer'>
                    <img src={portfolio} alt='Portfolio' />
                  </div>
                  <div className='txtContainer'>
                    <h6 className='d-none d-md-block'>Portfolio Project</h6>
                    <h3>
                      <a href='#'>Portfolio</a>
                    </h3>
                    <p className='highlightedTxt'>
                      A minimal, dark portfolio to show my projects, my CV, my
                      commercial experience, and all the social media connected
                      with myself. Hope you liked it!
                    </p>
                    <div className='techStack'>
                      <ul>
                        <li>VS Code</li>
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Browser</li>
                      </ul>
                    </div>
                    <div className='links'>
                      <a
                        href='https://github.com/Pomorskyi/portfolio'
                        target='_blank'
                      >
                        <img src={gitHub} alt='GitHub' className='img-top' />
                        <img src={gitHubBg} alt='GitHub' />
                      </a>
                      <a href='#'>
                        <img
                          src={ext_link}
                          alt='External link'
                          className='img-top'
                        />
                        <img src={ext_linkBG} alt='External link' />
                      </a>
                    </div>
                  </div>
                </Row>
                <Row className='projectDesc'>
                  <div className='imgContainer imgContainerRight'>
                    <img src={myPhoto} alt='ProjectAlt' />
                  </div>
                  <div className='txtContainer txtContainerRight'>
                    <h6 className='d-none d-md-block'>Featured Project</h6>
                    <h3>
                      <a href='#'>Halcyon Theme</a>
                    </h3>
                    <p className='highlightedTxt'>
                      A minimal, dark blue theme for VS Code, Sublime Text,
                      Atom, iTerm, and more. Available on Visual Studio
                      Marketplace, Package Control, Atom Package Manager, and
                      npm.
                    </p>
                    <div className='techStack'>
                      <ul>
                        <li>VS Code</li>
                        <li>Sublime Text</li>
                        <li>Atom</li>
                        <li>iTerm2</li>
                        <li>Hyper</li>
                      </ul>
                    </div>
                    <div className='links'>
                      <a href='https://github.com/Pomorskyi' target='_blank'>
                        <img src={gitHub} alt='GitHub' className='img-top' />
                        <img src={gitHubBg} alt='GitHub' />
                      </a>
                      <a href='https://github.com/Pomorskyi' target='_blank'>
                        <img
                          src={ext_link}
                          alt='External link'
                          className='img-top'
                        />
                        <img src={ext_linkBG} alt='External link' />
                      </a>
                    </div>
                  </div>
                </Row>
                <Row className='projectDesc'>
                  <div className='imgContainer'>
                    <img src={copy_of_website} alt='Copy of website' />
                  </div>
                  <div className='txtContainer'>
                    <h6 className='d-none d-md-block'>Featured Project</h6>
                    <h3>
                      <a href='#'>Copies of real Websites</a>
                    </h3>
                    <p className='highlightedTxt'>
                      For practice, I discovered a new way to learn React and
                      Frontend - copying websites but doing it by myself. That's
                      how to really understand how responsive SPA works.
                    </p>
                    <div className='techStack'>
                      <ul>
                        <li>VS Code</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                      </ul>
                    </div>
                    <div className='links'>
                      <a
                        href='https://github.com/Pomorskyi/bold_testTask'
                        target='_blank'
                      >
                        <img src={gitHub} alt='GitHub' className='img-top' />
                        <img src={gitHubBg} alt='GitHub' />
                      </a>
                      <a
                        href='https://pomorskyi.github.io/bold_testTask/'
                        target='_blank'
                      >
                        <img
                          src={ext_link}
                          alt='External link'
                          className='img-top'
                        />
                        <img src={ext_linkBG} alt='External link' />
                      </a>
                    </div>
                  </div>
                </Row>
              </Container>
            </Col>
            <Col xs={0} md={1}></Col>
          </Row>
          <Row id='contact'>
            <Col xs={0} lg={1}></Col>
            <Col xs={12} lg={8}>
              <section>
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
