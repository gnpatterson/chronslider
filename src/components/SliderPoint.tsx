import * as React from "react";
import {IPoint} from "../types/IPoint"

// this is a dumb component. it has to be told
// how to display itself (icon or text) and what
// it's value is. it knows to catch a few events
// and pass them to the provided callbacks.

interface IProps {
  points: IPoint[]
}

interface IState {}

class SliderPoint extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};

  }

  onHover = () => console.log('hover');
  onClick = () => console.log('click');
  onContextMenu = () => console.log('right');

  render() {
    let offset = 0;
    let offsetStyle = {};
    let offsetPercent = "";
    let offsetTotal = this.props.points.map(point => point.minutesFromPrevious).reduce((prev, next) => prev + next);
    let pointStyle = { width: 16 };
    let tableStyle = { width: "100%" };
  
    return (
      <div>

        <div className="flex-container">
          <div></div>
          <div>
            <table style={tableStyle}>
              <tr>
                  {this.props.points.map((point, i) => {
                    offsetPercent = (point.minutesFromPrevious / offsetTotal * 100).toString() + "%";
                    offsetStyle = { width: offsetPercent, textAlign: "right" }
                    return <td style={offsetStyle}><img src={point.icon} style={pointStyle}></img></td>
                  })}
              </tr>
            </table>
          </div>
          <div></div>
        </div>


        <div className="container">
        <div className="row">
          <div className="col-xs-1">&nbsp;</div>
          <div className="col-xs-7">
            <table style={tableStyle}>
              <tr>
                  {this.props.points.map((point, i) => {
                    offsetPercent = (point.minutesFromPrevious / offsetTotal * 100).toString() + "%";
                    offsetStyle = { width: offsetPercent, textAlign: "right" }
                    return <td style={offsetStyle}><img src={point.icon} style={pointStyle}></img></td>
                  })}
              </tr>
            </table>
          </div>
          <div className="col-xs-4">&nbsp;</div>
        </div>
        </div>

          <table style={tableStyle}>
              <tr>
                  {this.props.points.map((point, i) => {
                    offsetPercent = (point.minutesFromPrevious / offsetTotal * 100).toString() + "%";
                    offsetStyle = { width: offsetPercent, textAlign: "right" }
                    return <td style={offsetStyle}><img src={point.icon} style={pointStyle}></img></td>
                  })}
              </tr>
          </table>

        
          <table style={tableStyle}>
              <tr>
                  {this.props.points.map((point, i) => {
                    offsetPercent = (point.minutesFromPrevious / offsetTotal * 100).toString() + "%";
                    offsetStyle = { width: offsetPercent, textAlign: "right" }
                    return <td style={offsetStyle}>{point.minutesFromStart}</td>
                  })}
              </tr>
          </table>

        
          <table style={tableStyle}>
              <tr>
                  {this.props.points.map((point, i) => {
                    offsetPercent = (point.minutesFromPrevious / offsetTotal * 100).toString() + "%";
                    offsetStyle = { width: offsetPercent, textAlign: "right", border: "1px solid black" }
                    return <td style={offsetStyle}>{point.minutesFromPrevious}</td>
                  })}
              </tr>
          </table>


          {this.props.points.map((point, i) => {
            offset += point.minutesFromPrevious;

            offsetStyle = { display:"inline-block", marginLeft: offset}
            return <span style={offsetStyle} onClick={this.onClick} onContextMenu={this.onContextMenu}>{point.minutesFromPrevious} </span>
          })}
      </div>
    );
  }

}

export default SliderPoint;
