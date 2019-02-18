import * as React from "react";
import SliderPoint from "../components/SliderPoint";
import {IPoint} from '../types/IPoint';
import "./PointSlider.css"

import redball from '../images/ball_red.jpg';
import greyball from '../images/ball_grey.jpg';

// this controls one or more SliderPoints. we are
// the slider and we control the points. we are a
// straight line and the points appear on our line.
// there is always one point at the beginning and
// one point at the end of our line. any other points
// are spaced according to their relative value.

// we can tell our points how to display themselves
// (icon or text) and we catch events from them by
// passing callbacks to ourself in the point's props.

interface IProps {

}

interface IState {
    points: IPoint[];

}


class PointSlider extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
        points: [
          {key: 0, name: '', icon: redball, size: 1, minutesFromStart: 0, minutesFromPrevious: 0},
          {key: 1, name: '', icon: greyball, size: 1, minutesFromStart: 2, minutesFromPrevious: 2},
          {key: 2, name: '', icon: greyball, size: 1, minutesFromStart: 4, minutesFromPrevious: 2},
          {key: 3, name: '', icon: greyball, size: 1, minutesFromStart: 8, minutesFromPrevious: 4},
          {key: 4, name: '', icon: greyball, size: 1, minutesFromStart: 16, minutesFromPrevious: 8},
          {key: 5, name: '', icon: greyball, size: 1, minutesFromStart: 24, minutesFromPrevious: 8},
          ]
    };

  }

  onHover() { console.log('hover') };
  onClick() { console.log('click') };
  onContextMenu = () => console.log('right');

  render() {
    return (
      <div className="hello">
        <div className="greeting">
            { this.displayPoints() }
        </div>
      </div>
    );
  }

  displayPoints (): JSX.Element {
    return (
      <SliderPoint points={this.state.points} />
    );
  }

}

export default PointSlider;
