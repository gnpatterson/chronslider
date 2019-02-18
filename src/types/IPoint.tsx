export interface IPoint {
    key: number;
    name: string;
    type?: string;
    icon: string;
    size: number;
    value?: string;
    minutesFromStart: number;
    minutesFromPrevious: number;
    onHover?: () => void;
    onClick?: () => void;
    onContextMenu?: () => void;
  }