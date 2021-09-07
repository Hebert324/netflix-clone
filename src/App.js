import React, { useEffect, useState } from 'react'
import GlobalStyle from './styles/global'
import Tmdb from './Tmdb'
import MovieRow from './components/ListMovies/MovieRow'
import FeatureMovie from './components/Main/FeatureMovie'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista dos conteúdos
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // Pegando o Featured
      let mains = list.filter(i => i.slug === 'mains')
      let randomChosen = Math.floor(Math.random() * (mains[0].items.results.length - 1))
      let chosen = mains[0].items.results[randomChosen]

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
    }
    loadAll()
  }, [])

  return(
    <>
    <div className="page">

      {featureData && <FeatureMovie item={featureData} /> }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
    <GlobalStyle />
    </>
  )
}