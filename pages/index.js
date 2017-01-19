import React from 'react';

import Stage from './components/Stage';
import Kanban from './components/Kanban';

export default class IndexView extends React.Component {
  render() {
    return(
      <Stage
        windowTitle="User Experience Kanban"
        mainTitle="User Experience">
        <Kanban />
      </Stage>
    );
  }
}
