import React from 'react';

const MobileMenu = ({ isOpen, close }) => {
  if (isOpen) {
    return (
      <React.Fragment>
        <div className="d-block d-lg-none mobileMenu w-100">
          <ul>
            <li>
              <a href="#aboutMe" onClick={close}>
                📝 About Me
              </a>
            </li>
            <li>
              <a href="#work" onClick={close}>
                💼 Work
              </a>
            </li>
            <li>
              <a href="#projects" onClick={close}>
                ⚡ Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={close}>
                📞 Contact
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
};

export default MobileMenu;
