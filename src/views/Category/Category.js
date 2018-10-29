import React from 'react';
import propTypes from 'prop-types';

const Category = ({ categoryName }) => (
  <section>
    <h1>Category {categoryName}</h1>
  </section>
);

Category.propTypes = {
  categoryName: propTypes.string.isRequired
};

export default Category;