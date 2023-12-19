import React, {Component, useState} from "react";
import './app.css'
import Header from "../header";
import RandomEpisodes from "../random-episodes";
import CharactersPage from "../characters-page";
import EpisodesPage from "../episodes-page";
import {BrowserRouter, Outlet, Route, Routes, useParams, Navigate} from "react-router-dom";

import RMService from "../../api-services/RMService";

const ViewElementById = ()=>{
    const [name, setName] = useState()
    const service = new RMService()
    const {id} = useParams()
    if (id < 0){
        return <Navigate to='/characters'/>
    }
    service.getCharacterByID(id).
    then((data)=>{
        setName(data.name)
    })

    return <h1>{name} - {id}</h1>
}

const Layout = ()=>{
    return(
        <>
            <Header/>
            <RandomEpisodes/>
            <Outlet/>
        </>
    )
}

class App extends Component {
    service = new RMService()
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route path='*' element={<h1>404 Not found</h1>}/>
                            <Route index element={<h1>Site about Rick and Morty</h1>}/>
                            <Route
                                path='/characters'
                                element={<CharactersPage getData = {this.service.getAllCharacters}/>}
                            />
                            <Route
                                path='/episodes'
                                element={<EpisodesPage getData = {this.service.getAllEpisodes}/>}
                            />
                            <Route path='/characters/:id' element={<ViewElementById/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App