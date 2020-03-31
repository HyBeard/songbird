import React from 'react';

import { ReactComponent as LogoIcon } from './default-monochrome-black.svg';

const Logo = ({ mixinClass }) => {
  return (
    <div className={mixinClass}>
      <LogoIcon className="logo" />
    </div>
  );
};

export default Logo;
