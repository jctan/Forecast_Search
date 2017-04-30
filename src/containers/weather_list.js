import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	//rendering a single city
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;
		//same as lon and lat = cityData.city.coord.lon and cityData.city.coord.lat

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="K"/></td>
				<td><Chart data={pressures} color="green" units="hPa"/></td>
				<td><Chart data={humidities} color="black" units="%"/></td>
			</tr>
		);
	}


	render(){
		return (
			<table className="table table-hover"> 
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature ( K )</th>
						<th>Pressure ( hPa ) </th>
						<th>Humidity ( % )</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

//now you have access to this.props inside the WeatherList/
function mapStateToProps({ weather }){
	return { weather }; // { weather } === { weather: weather }
}


export default connect(mapStateToProps)(WeatherList);