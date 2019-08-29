import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import PlacesCard from './PlacesCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: 3
    }
  }
  componentDidMount() {
    this.fetchPlaces()
    //this.setState({property: this.state.places[0]})
  }

  fetchPlaces() {
    axios.get('/api/nearbyPlaces', {
    })
    .then(res => {
      const places = res.data;
      this.setState({ 
        places: places, 
        property: places[0]
      });
    })
  }

  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 1,
        finish: finish - 1,
      });
    } else {
      this.setState({
        fadedleft: true
      });
    }
    this.setState({
      fadedright: false
    })
  }
  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < this.state.places.length) {
      this.setState({
        start: start + 1,
        finish: finish + 1
      });
    } else {
      this.setState({
        fadedright: true
      });
    }
    
    this.setState({
      fadedleft: false
    });
  }
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft ? "arrow-left faded-left" : "arrow-left";
    const fadedright = this.state.fadedright ? "arrow-right faded-right" : "arrow-right";
    return (
      <div className="container">
        <div className="slideshow row col-md-12">
          <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
          {
            this.state.places.slice(startindex, finishindex).map(place => 
            <PlacesCard key={place.id} place={place} />)
            }
           }
          <div className={fadedright} onClick={this.rightClick.bind(this)}></div>
        </div>
      </div>
    )
  }
};

export default App;

module.exports = App;