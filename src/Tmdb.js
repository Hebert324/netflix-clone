const API_KEY = '5c1b1c56c9716a0325bee6b8b47333b2'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export async function getHomeList() {
        return [
            {
                slug: 'mains',
                title: 'Principais',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados pra Você',
                items: await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'documentario',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)
            },
        ]
}

export async function getMovieInfo(movieId, type) {
    let info = {}

    if(movieId) {
        switch(type){
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-br&api_key=${API_KEY}`)
            break

            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-br&api_key=${API_KEY}`)
            break

            default:
                info = null
            break
        }
    }

    return info
}