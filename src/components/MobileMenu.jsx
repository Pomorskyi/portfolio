import React from 'react';

const MobileMenu = ({ isOpen }) => {
  return (
    <React.Fragment>
      <div className="d-block d-lg-none mobileMenu w-100">
        <ul>
          <li>
            <a href="#">📝 About Me</a>
          </li>
          <li>
            <a href="#">💼 Work</a>
          </li>
          <li>
            <a href="#">⚡ Projects</a>
          </li>
          <li>
            <a href="#">📞 Contact</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
