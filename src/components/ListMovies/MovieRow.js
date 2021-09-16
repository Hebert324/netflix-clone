import React from "react";
import { MovieRow } from './styles'

export default function movieRow({title, items}){
    return(
        <MovieRow>
            <h2>{title}</h2>

            <div className="left-move">
            </div>

            <div className="right-move">
            
            </div>

            <div className="listArea">
                <div className="list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="item">
                            <a href={`https://www.youtube.com/results?search_query=${item.original_name}+trailer`} rel="noreferrer" target="_blank"><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </MovieRow>
    )
}
