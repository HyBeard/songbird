import React from 'react';

import cn from '../../utils/bemNaming';

const CategoryList = ({ mixinClass, categories, currentCategory }) => {
  return (
    <ul className={`category-list ${mixinClass}`}>
      {categories.map((title) => {
        const categoryClass = cn(
          'category-list',
          'item',
        )({ active: title === currentCategory });

        return <li className={categoryClass}>{title}</li>;
      })}
    </ul>
  );
};

export default CategoryList;
