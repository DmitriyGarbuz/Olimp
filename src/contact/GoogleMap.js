import React, { Component } from 'react';
import {GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';




export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

  render() {
    return (
   
      <Map
        google={this.props.google}
        zoom={17}
      
        className={'map'}
        initialCenter={{ lat: 50.4323132, lng: 30.36883682 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Power Gym Olimp бул. Ромена Ролана 7'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXKG0LFWyMXNERW42kI69F0yfDI_tVej8'
})(MapContainer);