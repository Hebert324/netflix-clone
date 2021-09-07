import React from "react";
import { MovieRow} from './styles'

export default ({title, items}) => {
    return(
        <MovieRow>
            <h2>{title}</h2>
            <div className="listArea">
                <div className="list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </MovieRow>
    )
}
