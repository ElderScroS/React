import React, {useState} from 'react';
import ItemList from "../item-list";

import EpisodeDetails from "../episode-details";

const EpisodesPage = ({getData}) => {
    const [selectedEpisode, setSelectedEpisode] = useState(3)
    const onEpisodeSelected = (id)=>{
        setSelectedEpisode(id)
    }
    return (
        <div>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={onEpisodeSelected}
                    getData = {getData}/>
                </div>
                <div className="col-md-6">
                    <EpisodeDetails selectedId={selectedEpisode}/>
                </div>
            </div>
        </div>
    );
};

export default EpisodesPage;


