import React, { Component } from 'react';

class GoogleMap extends Component {
	//call automatically after this method has been rendered
	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom: 12, //options object
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render(){
		//this.refs.map
		return <div ref="map" />;
	}
}

export default GoogleMap;