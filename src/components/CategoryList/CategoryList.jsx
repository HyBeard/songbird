import React from 'react';

import cn from '../../utils/bemNaming';

const CategoryList = ({ mixinClass, categories, currentStep }) => {
  const currentCategory = categories[currentStep];

  return (
    <ul className={`category-list ${mixinClass}`}>
      {categories.map(({ categoryTitle, categoryId }) => {
        const categoryClass = cn(
          'category-list',
          'item',
        )({ active: categoryTitle === currentCategory });

        return (
          <li className={categoryClass} key={categoryId}>
            {categoryTitle}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
