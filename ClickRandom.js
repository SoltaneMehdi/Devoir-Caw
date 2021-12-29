import React from "react";

export default class ClickRandom extends React.Component {
	
		constructor(props) {
		  super(props);
		  this.state = { num: this.setRandom() };
		  this.handleClick = this.handleClick.bind(this);
		}
	  
		setRandom() {
			return Math.floor(Math.random() * this.props.maxNum); //nbr aleatoir de 0 j'usqua 10 (11 -1) avec maxNum =11.
		}
	  
		handleClick(e) {
		  this.setState({num:this.setRandom()});
		}
		

		render() {
			let affichage; //affichage conditionnel
			if (this.state.num===this.props.maxNum-1)  affichage = <h1>you win!!</h1>; // si num === 11-1 ===10, "you win"
			else affichage = <button onClick={this.handleClick}>Random Number</button>;//sinon on affiche le bouton.
		 	
			return (
			  <div>
					<h3> Number is: {this.state.num}</h3>
					{affichage}
			  </div>

		  	);
		}
	  } 