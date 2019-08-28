import React, { Component } from 'react';
import axios from 'axios'; 
import PlacesNearby from './PlacesNearby.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [], 
      activities: []
    }

    this.fetchPlaces = this.fetchPlaces.bind(this); 
  }
  componentDidMount() {
    this.fetchPlaces()
  }

  fetchPlaces() {
    axios.get('/api/nearbyPlaces', {
    })
    .then(res => {
      const places = res.data;
      this.setState({ places });
    })
  }

  //same thing for Activities to be done later
  // fetchActivities() {
  //   axios.get('/api/nearbyActivities', {
  //   })
  //   .then(res => {
  //     const activities = res.data; 
  //     this.setState({activities})
  //   })
  // }
  render() {
    return (
      <div>
        <PlacesNearby places ={this.state.places}/>
      </div>
    );
  }
}

export default App;