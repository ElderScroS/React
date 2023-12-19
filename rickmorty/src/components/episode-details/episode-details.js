import React, {Component} from 'react';
import './episode-details.css'
import RMService from "../../api-services/RMService";
class EpisodeDetails extends Component {
    service  = new RMService()
    state = {
        name: null,
        year: null,
        director:null,
        description:null,
        image:null
    }
   componentDidMount() {
        this.updateEpisode()
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
       if(this.props.selectedId !== prevProps.selectedId){
           this.updateEpisode()
       }
   }

   updateEpisode = ()=>{
        const {selectedId} = this.props
        this.service.getEpisodeById(selectedId)
           .then((episode)=>{
               this.setState(episode)
           })
   }
    render() {
        const{name,
            year,
            director,
            description,
            image} = this.state
        return (
            <div className="person-details card">
               <img className="person-image"
                   src={image}/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <span className='term'>Year:</span>
                            <span>{year}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'> Director:</span>
                            <span>{director}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Description:</span>
                            <span>{description}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default EpisodeDetails;