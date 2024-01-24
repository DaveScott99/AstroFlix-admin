const API_KEY = '39fcbb59ca74494324fa1fdc9407bd52';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    searchMovieByTittle: async (title) => {
        return[
            {
                items: await basicFetch(`/search/movie?query=${title}&include_adult=false&language=en-US&api_key=${API_KEY}`)
            }
        ]
    },

    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do AstroFlix',
                items: await basicFetch(`/discover/tv?with_network=213R&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=en-US&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    },

    getMovieImages: async (movieId) => {
        return[
            {   slug: 'backdrop',
                items: await basicFetch(`/movie/${movieId}/images?language=null&api_key=${API_KEY}`)
            },
            {   
                slug: 'thumbnail-logo',
                items: await basicFetch(`/movie/${movieId}/images?language=en&api_key=${API_KEY}`)
            }
        ]
    },

    getMovieVideo: async (movieId) => {
        return[
            {   slug: 'teaser',
                items: await basicFetch(`/movie/${movieId}/videos?language=en-US&api_key=${API_KEY}`)
            }
        ]
    }
}