import React from 'react';
import ReactDOM from 'react-dom';
import Point from './Components/TravelPoint.js';
import TravelRoute from './Components/TravelRoute.js';
import './index.css';

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      solution: {bestState: [1, 2, 3,4,5,6,7,8,9], bestFitness: '0'},
      travelPoints: [
        {x: 279.900000, y: 162.300000},
        {x: 163.400000, y: 307.200000},
        {x: 155.900000, y: 190.600000},
        {x: 370.600000, y: 756.300000},
        {x: 212.500000, y: 626.100000},
        {x: 316.300000, y: 641.600000},
        {x: 397.100000, y: 753.100000},
        {x: 223.400000, y: 738.200000},
        {x: 267.300000, y: 633.700000},
        {x: 286.300000, y: 597.900000},
        {x: 83.100000, y: 39.100000},
        {x: 65.900000, y: 609.700000},
        {x: 193.200000, y: 301.300000},
        {x: 0.000000, y: 222.300000},
        {x: 202.500000, y: 460.200000},
        {x: 141.400000, y: 552.000000},
        {x: 110.000000, y: 609.100000},
        {x: 266.600000, y: 0.000000},
        {x: 376.900000, y: 723.800000},
        {x: 329.500000, y: 323.500000},
        {x: 144.300000, y: 672.400000},
        {x: 335.900000, y: 447.300000},
        {x: 517.400000, y: 760.100000},
        {x: 324.800000, y: 517.500000},
        {x: 471.300000, y: 772.200000},
        {x: 266.400000, y: 469.600000},
        {x: 187.500000, y: 688.800000},
        {x: 217.200000, y: 518.900000},
        {x: 444.800000, y: 759.800000},
        {x: 220.600000, y: 1.300000},
        {x: 298.300000, y: 679.700000},
        {x: 259.600000, y: 545.800000},
        {x: 118.800000, y: 459.800000},
        {x: 358.000000, y: 745.200000},
        {x: 279.100000, y: 753.500000},
        {x: 355.100000, y: 589.000000},
        {x: 449.600000, y: 734.200000},
        {x: 488.900000, y: 727.000000},
        {x: 281.900000, y: 347.400000},
        {x: 13.000000, y: 497.500000},
        {x: 99.600000, y: 66.500000},
        {x: 74.600000, y: 316.700000},
        {x: 203.900000, y: 110.200000},
        {x: 231.200000, y: 429.700000},
        {x: 458.500000, y: 775.200000},
        {x: 480.900000, y: 754.500000},
        {x: 125.800000, y: 725.500000},
        {x: 322.900000, y: 749.900000}
      ]
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      var parsedSolution = JSON.parse(xhr.responseText)
      this.setState({solution: parsedSolution})
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://localhost:8000/polls/')
    // send the request
    xhr.send()
  }

  renderPoints() {
    return this.state.travelPoints.map(point => {
      return(<Point x={point.x} y={point.y}/>)
    })
  }

  renderVectors() {
    let vectors = []
    for (const [i, v] of this.state.solution.bestState.entries()) {
      let indexOfNextPoint = i+1;
      if(indexOfNextPoint > this.state.solution.bestState.length - 1) {
        indexOfNextPoint = 0;
      }
      vectors.push(<TravelRoute key={i} tail={this.state.travelPoints[v]} head={this.state.travelPoints[this.state.solution.bestState[indexOfNextPoint]]}/>)
    }
    return vectors;
  }

  render() {
    return (
      <div>
        <div style={{width: 1000, height: 1000, border: '1px solid black'}}>
          {this.renderPoints()}
          {this.renderVectors()}
        </div>
        <div>Ideal Path: {JSON.stringify(this.state.solution.bestState)}</div>
        <div>Ideal Path Length: {this.state.solution.bestFitness}</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);