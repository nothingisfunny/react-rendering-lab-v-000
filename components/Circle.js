import React from 'react';

export default class Circle extends React.Component {

  shouldComponentUpdate(nextProp){
  	this.props.color === nextProp.color
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}
