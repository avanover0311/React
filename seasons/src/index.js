import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay'
import Spinner from './spinner'

class App extends React.Component {
	
state ={ lat: null, errorMesssage: ''};

componentDidMount() {
	window.navigator.geolocation.getCurrentPosition(
		(position) => this.setState({ lat: position.coords.latitude}),
			(err) => this.setState({errorMesssage: err.message })
		);
	}

	render() {
		
			if ( this.state.errorMesssage && !this.state.lat) {
				return <div> Error: {this.state.errorMesssage} </div>
			}
			if (!this.state.errorMesssage && this.state.lat) {
				return <SeasonDisplay lat={this.state.lat} />
			}
			return <Spinner message="Please accept location request" />
		}
}

ReactDOM.render(<App />, document.querySelector('#root'));