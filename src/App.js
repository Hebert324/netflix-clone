import React, { useEffect, useState } from 'react'
import GlobalStyle from './styles/global'
import { getHomeList, getMovieInfo } from './Tmdb'
import MovieRow from './components/ListMovies/MovieRow'
import FeatureMovie from './components/Main/FeatureMovie'
import Header from './components/header/Header'

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista dos conteúdos
      let list = await getHomeList()
      setMovieList(list)

      // Pegando o Featured
      let mains = list.filter(i => i.slug === 'mains')
      let randomChosen = Math.floor(Math.random() * (mains[0].items.results.length - 1))
      let chosen = mains[0].items.results[randomChosen]

      let chosenInfo = await getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
    }
    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 15) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return(
    <>
    <div className="page">

      <Header black={blackHeader} />

      {featureData && <FeatureMovie item={featureData} /> }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
      Desenvolvido por <a rel="noreferrer" target="_blank" href="https://github.com/Hebert324/netflix-clone">Hebert Rocha</a> <span role="img" aria-label="coração">❤️</span><br /> Este site não e oficial e apenas um clone da Netflix <br />
      </footer>

      {/* <div className="loading"><img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" /></div> */}
    </div>
    <GlobalStyle />
    </>
  )
}