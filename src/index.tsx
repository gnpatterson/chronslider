import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import PointSlider from './containers/PointSlider'

ReactDOM.render(
  <PointSlider />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
