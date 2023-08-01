import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
// import { robots } from './Robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchfield, requestRobots } from '../action';


const mapStateToProps = state => {
	return {
		searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {


	componentDidMount() {
		this.props.onRequestRobots();
		
		
	}

	

	render() {
		const { searchfield, onSearchChange, robots, isPending } = this.props;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if (isPending) {
			return <h1>Loading</h1>
		} else {
			return (
			 <div className='tc'>
				 <h1 className='f1'>RoboFriends</h1>
				 <SearchBox searchChange={onSearchChange}/>
				 <Scroll>
				  <ErrorBoundry>
			       <CardList robots={filteredRobots}/>
			      </ErrorBoundry>
			     </Scroll>
		     </div>

	);
		}



	}
}



export default connect(mapStateToProps, mapDispatchToProps)(App);