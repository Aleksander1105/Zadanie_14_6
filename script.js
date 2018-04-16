const Counter = React.createClass({
	getInitialState: function() {
		return {
			counter1: 0,
			counter2: 0
		};
	},

	increment: function() {
		this.setState({
			counter1: this.state.counter1 +1
		});
	},

	decrement: function() {
		this.setState({
			counter2: this.state.counter2 -1
		});
	},

	render: function() {
		return React.createElement('div', {className: 'app'},
				React.createElement('button', {onClick: this.increment},		
					React.createElement('span', {}, 'Licznik ' + this.state.counter1)
				),
			
			   React.createElement('button', {onClick: this.decrement},		
					React.createElement('span', {}, 'Licznik ' + this.state.counter2)
			   )
		);
	}

});



var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));