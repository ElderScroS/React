import React, {Component} from 'react';
import './character-details.css'
import RMService from "../../api-services/RMService";
class CharacterDetails extends Component {
    service  = new RMService()
    state = {
        name: null,
        gender: null,
        species:null,
        location:null,
        image:null
    }
   componentDidMount() {
        this.updateCharacter()
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
       if(this.props.selectedId !== prevProps.selectedId){
           this.updateCharacter()
       }
   }

   updateCharacter = ()=>{
        const {selectedId} = this.props
        this.service.getCharacterByID(selectedId)
           .then((character)=>{
               this.setState(character)
           })
   }
    render() {
        const{name,
            gender,
            species,
            location,
            image} = this.state
        return (
            <div className="person-details card">
               <img className="person-image"
                   src={image}/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <span className='term'>Gender:</span>
                            <span>{gender}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'> Species:</span>
                            <span>{species}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Location:</span>
                            <span>{location}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CharacterDetails;