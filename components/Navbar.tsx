
import { useRouter } from 'next/router';
import React from 'react';
import { API_KEY } from '../utils/reqs';


export const items = [{
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

const Navbar = () => {
    const router = useRouter();
  return (
    <nav className='relative'>
        
        <div className='flex px-10 space-x-10 overflow-x-scroll text-2xl scrollbar-hide sm:px-20 whitespace-nowrap sm:space-x-20'>{
            items.map((v, key)=>(
                <h2 
                onClick={()=>router.push(`/?genre=${key}`)}
                className='transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500'
                key={key}>{v.title}</h2>
            ))
            }</div>
            <div className='absolute right-0 left-o 
            bg-gradient-to-l from-[#06202A] h-10 w-1/12'/>
    </nav>
  )}
export default Navbar