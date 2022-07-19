import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PokeGrid from '../components/pokeGrid'
import { Pagination } from '@mui/material'
import pokemons from 'json-pokemon'
import { useState } from 'react'


type cardpropstype = {
  name: string,
  number: string,
  type1: string,
  type2: string,
  image: string
};


// We setup the amount of pages containing 16 pokemon each
const pokePerPage = 16;
const pokeAmount = pokemons.length;
const pages = Math.ceil(pokeAmount / pokePerPage)

const Home: NextPage = (pageProps) => {
  // Setup State on which page is selected
  // When selecting a new page we use a different slice of the pokemon to display
  const [currPage, setCurrPage] = useState(1)
  const onPageChange = (event:React.ChangeEvent<unknown>, page:number) => {
    setCurrPage(page)
  }
  // Transforming the pokemon data into our setup
  let pokeData: Array<cardpropstype> = []
  pokemons.forEach(poke => {
    pokeData.push({
      name: poke.name,
      number: String(poke.id).padStart(3, '0'),
      type1: poke.typeList[0],
      type2: poke.typeList[1],
      image: '/pokemon/' + poke.name.toLowerCase() + '.png'
    })
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Pokedex Database!
        </h1>
        {/* Uncomment the next line once all pokemon images are available */}
        {/* <Pagination count={pages} defaultPage={1} onChange={onPageChange}/> */}
        <Pagination count={18} defaultPage={1} onChange={onPageChange}/>
        <PokeGrid data={pokeData.slice((currPage - 1) * 16, currPage * 16)}/>

      </main>

      <footer className={styles.footer}>
        <p>Source code available <a href='https://github.com/Sgvonbergen/pokedex-nextJS'>here</a></p>
      </footer>
    </div>
  )
}

export default Home
