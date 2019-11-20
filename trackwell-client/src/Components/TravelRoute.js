import React from 'react';

export default class Vector extends React.Component {
  constructor(props) {
    super(props)
    let tailMagnitude = Math.sqrt(Math.pow(props.tail.x, 2) + Math.pow(props.tail.y, 2));
    let headMagnitude = Math.sqrt(Math.pow(props.head.x, 2) + Math.pow(props.head.y, 2));
    let vectorX = 0;
    let vectorY = 0;
    if(tailMagnitude < headMagnitude) {
    	vectorX = props.tail.x-props.head.x;
    	vectorY = props.tail.y-props.head.y;
    } else {
		vectorX = props.head.x-props.tail.x;
    	vectorY = props.head.y-props.tail.y;
    }
    this.state={
      head: props.head,
      tail: props.tail,
      vector: {x: vectorX, y: vectorY},
      origin: (tailMagnitude < headMagnitude) ? props.tail : props.head,
      magnitude: Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2)),
      angle: -Math.atan(vectorY/vectorX)*(180/Math.PI)
    }
  }

  render() {
    const angle = this.state.angle;
    let vectorStyle={position: 'absolute', height: 0, width: this.state.magnitude, border: '1px solid green', marginLeft: this.state.origin.x, marginTop: 1000-this.state.origin.y, transform: '', transformOrigin: 'bottom left'}
    vectorStyle.transform = 'rotate(' + angle + 'deg)';
    return (
      <div style={vectorStyle}>
      </div>
    );
  }
}