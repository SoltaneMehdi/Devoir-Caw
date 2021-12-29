import React from "react";
import De from "./De"

class LancerDe extends React.Component{
    constructor(props){
        super(props);
        this.state = { de1:6 , de2:6 , start : true , score : 0 , nThrows : 0};
        this.lancer=this.lancer.bind(this); 
        this.resetgame=this.resetgame.bind(this);
    }
    lancer(){
        this.setState({start:false}); //la partie demarre alors start = false.
        this.setState({ de1:this.setRandom() , de2:this.setRandom()}); //chois aleatroir des dés
        
        if(!this.state.start) //si la partie a commencé on calcule le score et le nombre de lancement.
        {  
            if (this.state.de1===this.state.de2) this.setState({score : this.state.score+1}); //si identique
            else this.setState({score : this.state.score-1}); // pas identique
            this.setState({nThrows : this.state.nThrows+1}); //nombre de lancement+1.
        }

        
    }
    resetgame(){
        this.setState({start:true,score:0,nThrows:0}) //event pour reset game.
    }
    
    setRandom() { //fct pour chois aleatoir du dé.
        return (Math.floor(Math.random()*6)); //de 0 jusqu'a 5.
    }
    render(){
        let msg; //pour afficher le message.
        if(this.state.start) msg = "Start by throwing the dice"; //la partie n'a pas encore commencé
        else{
            if(this.state.de1===this.state.de2) msg = "you win";//identique
            else msg = "try again";//pas identique.
        }

        let game; //pour afficher le jeux.
        if(this.state.start) game = <button onClick={this.lancer}>Throw FIRST dice</button>; //la partie n'a pas encore commencé
        else{
            if(this.state.nThrows<9){ //la partie a commencé
                game = <div>
                <button onClick={this.lancer}>Throw dice</button>
                <De num = {this.state.de1}/>
                <De num = {this.state.de2}/>
                </div>
            }else //la partie est terminé (nThrows = 10), on affiche le score est le bouton reset.
                game = <div>
                            <h1>your score is: {this.state.score}</h1>
                            <button onClick={this.resetgame}>reset</button>
                        </div>
               
        }
        return(
            <div>
                
                {game}
                <h1>{msg}</h1>
                
            </div>
        );
    }
}
export default LancerDe;