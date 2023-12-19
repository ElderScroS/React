import React, {Component} from 'react';
import './random-episodes.css'
import RMService from "../../api-services/RMService";

class RandomEpisodes extends Component {
    service = new RMService()
    state = {
        name: null,
        year: null,
        director: null,
        description:null,
        image: null
    }

    componentDidMount() {
        this.interval  = setInterval(this.updateResources, 10000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updateResources = ()=>{
        const id = Math.floor(Math.random()*20 + 1)
        this.service.getEpisodeById(id)
            .then((episode)=>{
                this.setState(episode)
            })
    }
    render() {
        const {name, year, director, description, image} = this.state
        return (

            <div
                className="random-episodes alert alert-dismissible alert-light rounded">
                <img className="episode-image"
                     src={image}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className='term'>Year:</span>
                        <span>{year}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Director:</span>
                        <span>{director}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Description: </span>
                        <span>{description}</span>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default RandomEpisodes;