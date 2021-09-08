import React from "react";
import { Feature } from './styles'

export default ({item}) => {
    console.log(item)

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <Feature style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="vertical">
                <div className="horizontal">
                    <div className="name">{item.original_name}</div>
                    <div className="infos">
                        <div className="points">{item.vote_average} pontos</div>
                        <div className="year">{firstDate.getFullYear()}</div>
                        <div className="seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="description">{item.overview}</div>
                    <div className="buttons">
                        <a href={`https://www.youtube.com/results?search_query=${item.original_name}+trailer`} target="_blank" className="assistir">▶ Assistir</a>
                        <a href={`https://www.youtube.com/results?search_query=${item.original_name}+trailer`} target="_blank" className="minhaLista">+ Minha Lista</a>
                    </div>
                    <div className="genres"><strong><span>Gêneros:</span> {genres.join(', ')}</strong></div>
                </div>
            </div>
        </Feature>
    )
}