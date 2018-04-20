const Counter = React.createClass({

	getDefaultProps() {
		console.log('Initialization. Default props for the component.');
	},

	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter +1

		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter -1
		});
	},

	render: function() {
		return React.createElement('div', {className: 'container'},
				React.createElement('button', {onClick: this.increment, className: 'button'}, 'Plus'),	
				React.createElement('button', {onClick: this.decrement, className: 'button'}, 'Minus'),
				React.createElement('p', {className: 'number1'}, 'Liczba: ' + this.state.counter),
				React.createElement('p', {className: 'number2'}, 'Liczba: ' + this.state.counter),
		);
	},

	componentWillMount() {
		console.log('Mounting. State is not being rendered');
	},

	componentDidMount() {
		console.log('The component has been inserted into DOM. We can do some operations on it.');
	},

	componentWillReceiveProps() {
    	console.log('Update. Invoked if the component receives a new props. If not, it is not being rendered');
    },

     shouldComponentUpdate() {
    	console.log('Update. Useful for the verification if the component receives a new props. We can use it for the optimization of our app');
    	return true;
    	/* 
    	shouldComponentUpdate(nextProps, nextState) {
      		(this.state.count !== nextState.count ? return true : return false);
    	};
    	*/
    },
  	componentWillUpdate() {
    	console.log('Update. ShouldComponentUpdate returned true. We can perform preparations for an upcoming render.');
  	},

  	componentDidUpdate() {
    	console.log('Update. After re-render. We can use it to perform operations on DOM after the data has been updated');
  	},

  	componentWillUnmount() {
    	console.log('Unmounting. Before the component was removed from the DOM. We can use it to clean up DOM elements created in componentDidMount or DidUpdate.');
  	},
});


var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));