import React from 'react';
import classNames from 'classnames';

const CategoryList = ({ mixinClass, categories, currentStep }) => {
  const currentCategory = categories[currentStep].categoryTitle;

  return (
    <ul
      className={classNames(
        mixinClass,
        'list-group list-group-horizontal d-flex flex-md-nowrap flex-wrap shadow',
      )}
    >
      {categories.map(({ categoryTitle, categoryId }) => {
        const listItemClass = classNames(
          'list-group-item list-group-item-primary flex-fill text-center',
          { active: categoryTitle === currentCategory },
        );

        return (
          <li className={listItemClass} key={categoryId}>
            {categoryTitle}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
