import React from 'react';
import gitHubBg from '../assets/images/github_bg.png';
import gitHub from '../assets/images/github.png';
import linkedinBg from '../assets/images/linkedin_bg.png';
import linkedin from '../assets/images/linkedin.png';
import instagramBg from '../assets/images/instagram_bg.png';
import instagram from '../assets/images/instagram.png';
import twitterBg from '../assets/images/twitter_bg.png';
import twitter from '../assets/images/twitter.png';

const LeftSlider = () => {
  return (
    <div className="d-none d-md-block leftSlider">
      <ul>
        <li>
          <a href="https://github.com/Pomorskyi" target="_blank">
            <img src={gitHub} alt="GitHub" className="img-top" />
            <img src={gitHubBg} alt="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mykhailo-pomorskyi/"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn" className="img-top" />
            <img src={linkedinBg} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pomorskyi/" target="_blank">
            <img src={instagram} alt="Instagram" className="img-top" />
            <img src={instagramBg} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/pomorskyi" target="_blank">
            <img src={twitter} alt="Twitter" className="img-top" />
            <img src={twitterBg} alt="Twitter" />
          </a>
        </li>
        <li>
          <div className="vlOuter">
            <div className="vl"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftSlider;
