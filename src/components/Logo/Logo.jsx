import React from 'react';

import { ReactComponent as LogoIcon } from './default-monochrome-black.svg';

const Logo = ({ mixinClass }) => {
  return (
    <h1 className={`${mixinClass} text-hide`}>
      SongBird
      <LogoIcon className="logo" />
    </h1>
  );
};

export default Logo;
