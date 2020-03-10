import React from 'react';

import Logo from '../Logo';
import Score from '../Score';

const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <Score className="header__score" />
    </header>
  );
};

export default Header;
