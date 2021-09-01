const API_KEY = '5c1b1c56c9716a0325bee6b8b47333b2'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    async getHomeList() {
        return [
            {
                slug: 'trending',
                title: 'Recomendados pra Você',
                item: await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                item: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                item: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                item: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                item: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                item: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'documentario',
                item: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)
            },
        ]
    }
}