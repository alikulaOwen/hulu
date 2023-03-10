import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  console.log(props)
  
  return (
    <div className='flex flex-col justify-center w-screen'>
      <Head>
        <title>
          Hulu 3.0
        </title>
        <link rel='icon' href='../public/favicon.ico' />
      </Head>
      {/* header */}
      <Header />
      {/* nav */}
      <Navbar/>

      {/* Results */}
      <Results requests={props.results}/>
    </div>

  )
}

export const getServerSideProps= async(context: { query: { genre: any } }) => {
  const gr = context.query.genre

  // const req = await fetch(`https://api.themoviedb.org/3${items[gr].url || items[0].url}`)
  // .then((res) => res.json());

  return {
    props:{
      results: gr
    }
  }
  
}
