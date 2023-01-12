export const API_KEY = process.env.API_KEY;


export const  items = [{
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    }, {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    }, {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=28`
    }, {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=35`
    }, {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=27`
    }, {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10748`
    }, {
        title: "Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=9768`
    }, {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=878`
    },
    {
        title: "Trending",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=37`
    }, {
        title: "Animations",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=16`
    }, {
        title: "Tv Movies",
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10770`
    },
]