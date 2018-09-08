import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';



class App extends Component {

  
  render() {
    const divStyle = {
      backgroundImage: 'url(./assets/9.jpg)',
      backgroundSize: 'cover'
    };
    return (
        <div className="App"> 
        
   <Carousel interval={null} controls={false}>
  <Carousel.Item style={divStyle}>
    
  </Carousel.Item>
  <Carousel.Item >
    
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
  
    );
  }
}

export default App;
