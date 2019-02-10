import * as React from "react";

// this is a dumb component. it has to be told
// how to display itself (icon or text) and what
// it's value is. it knows to catch a few events
// and pass them to the provided callbacks.

export interface IProps {
  name: string;
  type: string;
  value: string;
  onHover: () => void;
  onClick: () => void;
  onContextMenu: () => void;
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
    return (
      <div className="hello">
        <div className="greeting">
          { this.props.name }
        </div>
      </div>
    );
  }

}

export default SliderPoint;
