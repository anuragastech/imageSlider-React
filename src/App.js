import React, { Component } from 'react';
import ImageSlider from "./components/image-slider/imageSlider"

class App extends Component {
  render() {
    return (
      <div className="App">
    <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/>
      </div>
    );
  }
}

export default App;
