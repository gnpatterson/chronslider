import * as React from "react";
//import SliderPoint from "./components/SliderPoint";

import "./PointSlider.css"

// this controls one or more SliderPoints. we are
// the slider and we control the points. we are a
// straight line and the points appear on our line.
// there is always one point at the beginning and
// one point at the end of our line. any other points
// are spaced according to their relative value.

// we can tell our points how to display themselves
// (icon or text) and we catch events from them by
// passing callbacks to ourself in the point's props.

interface IPoint {
    value: number;

}

export interface IProps {
  name?: string;
  type?: string;
  value?: string;
  onHover?: () => void;
  onClick?: () => void;
  onContextMenu?: () => void;
}

interface IState {
    points: IPoint[];

}

class PointSlider extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
        points: [{value: 20},{value: 40},{value: 60}]
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
    let offset = 0;
    let offsetStyle = {};
    let offsetPercent = "";
    let offsetTotal = this.state.points.map(point => point.value).reduce((prev, next) => prev + next);
    let tableStyle = { width: "100%" };

    return (
      <div>
          <table style={tableStyle}>
              <tr>
                  {this.state.points.map((point, i) => {
                    offset += point.value;
                    offsetPercent = (point.value / offsetTotal * 100).toString() + "%";
                    offsetStyle = { width: offsetPercent, border: "1px solid black" }
                    return <td style={offsetStyle}>{point.value}</td>
                  })}
              </tr>
          </table>


          {this.state.points.map((point, i) => {
            offset += point.value;

            offsetStyle = { display:"inline-block", marginLeft: offset}
            return <span style={offsetStyle} onClick={this.onClick} onContextMenu={this.onContextMenu}>{point.value}</span>
          })}
      </div>
    );
  }

}

export default PointSlider;
