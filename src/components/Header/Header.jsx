import React from 'react';

import Logo from '../Logo';
import Score from '../Score';

const Header = ({ score }) => {
  return (
    <header className="header">
      <Logo mixinClass="header__logo" />
      <Score mixinClass="header__score" score={score} />
    </header>
  );
};

export default Header;
