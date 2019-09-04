import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import PlacesCard from './PlacesCard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      start: 0,
      finish: 3
    }
  }
  componentDidMount() {
    this.fetchPlaces()
  }
  fetchPlaces() {
    axios.get('http://localhost:3003/api/listings/:id', {
    })
    .then(res => {
      const places = res.data;
      this.setState({ 
        places: places });
    })
  }
  leftClick() {
    if (this.state.start > 0 && this.state.finish > 0) {
      this.setState({
        start: this.state.start - 1,
        finish: this.state.finish - 1,
      });
    } 
  }
  rightClick() {
    if (this.state.finish < this.state.places.length) {
      this.setState({
        start: this.state.start + 1,
        finish: this.state.finish + 1
      });
    } 
  }
  render() {
    return (
      <div className = 'header'>
      <h1 className='h1' tabIndex='-10px'>More places to stay</h1>
      <div>
        <div className="slideshow">
        {this.state.start !== 0 && (<div className='arrow-left' onClick={this.leftClick.bind(this)}></div>)}
          {this.state.places.slice(this.state.start, this.state.finish).map(place => 
            <PlacesCard key={place.id} place={place} />)}
          {this.state.finish !== 12 && (<div className='arrow-right' onClick={this.rightClick.bind(this)}></div>)}
        </div>
      </div>
      </div>
    )
  }
};
export default App;