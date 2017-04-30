import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch(action.type){
		case FETCH_WEATHER:
			return [ action.payload.data, ...state ]; //new form for ES6 i.e [city, city, city]
			//return state.concat([action.payload.data]); //return new instance of state with concat
	}

	return state;
}