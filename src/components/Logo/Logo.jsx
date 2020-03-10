import React from 'react';
import { ReactComponent as LogoIcon } from './bird.svg';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <LogoIcon className="logo" />
    </div>
  );
};

export default Logo;
