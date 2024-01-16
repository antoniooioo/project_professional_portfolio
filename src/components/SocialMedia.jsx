import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/antonio-lau/" aria-label="linkedin">
      <FaLinkedin />
    </a>
    <a href="https://github.com/antoniooioo " aria-label="github">
      <FaGithub />
    </a>
    <a href="https://www.instagram.com/antoniolau_/" aria-label="instagram">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
