import React from "react";

class ToggleClick extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: 0 };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		let c = this.state.clicked;
		this.setState({ clicked: c+1 }); //on incremente le nombre de clicks.
	}

	render() {
		return ( //si clicked est paire, "clicked" sinon "not clicked"
			<div>
				<h1>the button has been cliecked {this.state.clicked} times</h1>
				<h1>{this.state.clicked%2===0 ? 'Clicked!!!' : 'Not Clicked'}</h1>
				<button onClick={this.handleClick}>Click Me!</button>
			</div>
		);
	}
}
        
    
export default ToggleClick;