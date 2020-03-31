import React from 'react';
import classNames from 'classnames';

import Logo from '../Logo';
import Score from '../Score';

const Header = ({ mixinClass, score }) => {
  const headerClass = classNames(mixinClass, 'header');

  return (
    <header className={headerClass}>
      <Logo mixinClass="header__logo" />
      <Score mixinClass="header__score" score={score} />
    </header>
  );
};

export default Header;
