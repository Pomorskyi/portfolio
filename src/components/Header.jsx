import React from 'react'

const Header = () => {
  return (
    <nav>
      {/* <img src='' alt='logo' /> */}
      <div></div>
      <div className='rightPanel'>
        <ol>
          <li>
            <a href='#aboutMe'>About Me</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#work'>Work</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ol>
        <button className='accentButton'>Resume</button>
      </div>
    </nav>
  )
}

export default Header
