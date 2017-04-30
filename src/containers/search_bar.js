import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: ''};

		//take existing function and bind with 'this' as SearchBar and replace existing function
		//when passing a callback and call have reference to 'this', you need to bind.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}


	//DOM event handler
	onInputChange(event){
		this.setState({term: event.target.value })
	}

	onFormSubmit(event){
		event.preventDefault();

		//we need to go and fetch weather data
		//this is where you call the action creator
		this.props.fetchWeather(this.state.term);
		//clear search input and cause component to re-render
		this.setState({ term: ''});

	}


	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

//this gives us access to this.props.fetchWeather inside the component up there. 
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}

// the reason we passing null is that whenever we passing a function that supposed to map our dispatch to the props of the container
// it always goes in as the 2nd argument in here. 
// passing in null means redux is maintaining some state but this container doesn't care about it at all.
export default connect(null, mapDispatchToProps)(SearchBar);