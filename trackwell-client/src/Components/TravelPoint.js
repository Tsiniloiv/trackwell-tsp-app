import React from 'react';

/*
  The points on the route. Modifying the props by +/-5 so that the center of the 'point' matches the point's exact coordinates.
*/

export default class Point extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      x: props.x-5,
      y: props.y+5,
    }
  }

  render() {
    return (
      <div style={{position: 'absolute', height: 0, width: 0, border: '5px solid red', borderRadius: '5px', marginLeft: this.state.x, marginTop: 1000-this.state.y}}></div>
    );
  }
}