export default class RMService {
    _base_url = 'https://rickandmortyapi.com/api/'

    async getResource(url) {
        const result =
            await fetch(`${this._base_url}${url}`)
        if (!result.ok) {
            throw new Error(`Error: Status code ${result.status}`)
        }
        return await result.json()
    }

    getEpisodeById = async (id) => {
        const episode = await this.getResource(`episode/${id}`)
        return await this.episodeDTO(episode)
    }

    getOMDBData = async (season, episode) => {
        const omdbData =
            await fetch(`https://www.omdbapi.com/?t=Rick&Morty&Season=${season}&Episode=${episode}&apikey=124df000`)
        const result = await omdbData.json()

        const data = {
            director: result.Director,
            description: result.Plot,
            image: result.Poster
        }
        return data
    }

    async getCharacterByID(id) {
        const character =
            await this.getResource(`character/${id}`)
        return this.characterDTO(character)
    }

    getAllCharacters = async()=>{
        const characters =  await this.getResource(`character`)
       return characters.results.map((item)=> this.characterDTO(item))
    }

    getAllEpisodes = async ()=>{
        const episodes =  await this.getResource(`episode`)
        return episodes.results.map(
            (item) =>{
                return this.episodeDTO(item)
            })
    }

    episodeDTO = async (data) => {
        const s = data.episode.slice(1, 3)
        const e = data.episode.slice(4, 6)
        const omdb = await this.getOMDBData(s, e)
        const episode =  {
                id: data.id,
                name: data.name,
                year: data.air_date.split(', ')[1],
                director: omdb.director ,
                description: omdb.description,
                image: omdb.image
            }
        return episode
    }

    characterDTO = async (character)=>{
        return {
            id: character.id,
            name: character.name,
            gender: character.gender,
            species: character.species,
            location: character.location.name,
            image: character.image
        }
    }

}