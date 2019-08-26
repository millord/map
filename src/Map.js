import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: 800,
      height: 600,
      latitude: 18.9396361,
      longitude: -70.4448623,
      zoom: 7
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoianVhbm1pbGxvcmQiLCJhIjoiY2p4djVlMHo0MDFlaDNkbXYxbGt3cWtnMyJ9.UY48lv3tPKWzH1RBgjX8dA"
      />
    );
  }
}

export default Map;
