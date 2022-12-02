import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Alpha from '../components/Alpha'
import Beta from '../components/Beta'
import Gridcard from '../components/Gridcard'
import HeroHeader from '../components/HeroHeader'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop'

export default function Home() {



  return (
    <div className={styles.container}>
      <Navbar/>
      <HeroHeader/>
      <About/>
      <Gridcard/>
      <Beta/>
      <Alpha/>
      <Shop/>
    </div>
  )
}
