import React from 'react';

export default class Ingredient extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
