import React from 'react';

import Array from './components/Array/Array';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Array data={[1,2,3,4,5,6,7]}/>
      </div>
    )
  }
}