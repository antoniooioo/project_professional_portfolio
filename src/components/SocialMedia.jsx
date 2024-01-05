import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaLinkedin />
    </div>
    <div>
      <FaGithub />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
