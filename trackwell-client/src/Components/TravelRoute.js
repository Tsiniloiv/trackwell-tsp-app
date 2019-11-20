import React from 'react';

/*
  Each part of the route, from one point to another, is described as a vector. We take 
  the vector information and use it to render a line between the two points.

  head: the destination point of the vector
  tail: the origin point of the vector
  vector: the actual (x,y) information of the vector, derived from subtracting the head and tail vectors.
  origin: The point used to determine the vector's offset for the actual render. By preferring the 
          point with the lower magnitude, we mitigate (but, unfortunately, do not completely solve)
          the problem of vectors being placed with their heads where their tails should be.
  magnitude: The length of the vector, used to determine the width of the div used to render it.
  angle: The vector's angle, applied as a transform to rotate the final div.
*/

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