import { useState } from "react";
import { MovieRow } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function MovieRow2({title, items}){
    const [scrollx, setScrollx] = useState(0)

    function handleLeftArrow() {
        let x = scrollx + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setScrollx(x)
    }

    function handleRightArrow() {
        let x = scrollx - Math.round(window.innerWidth / 2)
        let listw = items.results.length * 232
        if((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw)
        }
        setScrollx(x)
    }

    return(
        <MovieRow>
            <h2>{title}</h2>

            <div className="left-arrow" onClick={handleLeftArrow}>
                <FiChevronLeft size={30} />
            </div>

            <div className="right-arrow" onClick={handleRightArrow}>
                <FiChevronRight size={30} />
            </div>

            <div className="listArea">
                <div className="list" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 250
                }}>
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
