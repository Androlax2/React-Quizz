import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category';

class CategoryContainer extends Component {
  componentDidMount() {
    API.getCategoryQuestions(this.props.match.params.name).then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <Category 
        categoryName={this.props.match.params.name}
      />
    );
  }
}

export default withRouter(CategoryContainer);