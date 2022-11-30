import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './components/About'
import Beta from './components/Beta'
import Gridcard from './components/Gridcard'
import HeroHeader from './components/HeroHeader'
import Navbar from './components/Navbar'

export default function Home() {



  return (
    <div className={styles.container}>
      <Navbar/>
      <HeroHeader/>
      <About/>
      <Gridcard/>
      <Beta/>
      
    </div>
  )
}
