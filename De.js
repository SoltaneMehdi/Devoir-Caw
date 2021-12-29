import React from "react";
import image1 from "./imageDe/1.png";//importation des images depuis le dossier "imageDe"
import image2 from "./imageDe/2.png";
import image3 from "./imageDe/3.png";
import image4 from "./imageDe/4.png";
import image5 from "./imageDe/5.png";
import image6 from "./imageDe/6.png";
class De extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let image = [ //tableau pour les image a afficher
            image1,
            image2,
            image3,
            image4,
            image5,
            image6
        ]
        return(//selon le prop "num" envoyé par LancerDe, on choisis une image du tableau, entre 0 et 5.
            <div>
                <img alt={this.props.num} src ={image[this.props.num]}></img> 
            </div>
        );
    }
}
export default De;