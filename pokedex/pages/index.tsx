import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PokeCard from '../components/pokeCard'
import { type } from 'os';


const Home: NextPage = (pageProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PokeCard name='Charmander' number='0004' type1='Fire' type2='Grass' image='/pokemon/charmander.png'/>
        <h1 className={styles.title}>
          Welcome to the Pokedex Databse!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Bulbasaur</h2>
            <p>#1</p>
          </a>

          <a className={styles.card}>
            <h2>Ivysaur</h2>
            <p>#2</p>
          </a>

          <a className={styles.card}>
            <h2>Venasaur</h2>
            <p>#3</p>
          </a>

          <a className={styles.card}>
            <h2>Charmander</h2>
            <p> #4 </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Source code available <a href='https://github.com/Sgvonbergen/pokedex-nextJS'>here</a></p>
      </footer>
    </div>
  )
}

export default Home
