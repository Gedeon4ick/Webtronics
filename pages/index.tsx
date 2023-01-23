import { GetStaticProps, InferGetStaticPropsType  } from "next";
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.scss'
import Titul from '../components/Titul'
import About from "../components/About";
const inter = Inter({ subsets: ['latin'] })


export default function Home({home}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {menu} = home  
  return (
   <> 
      <Head>
        <title>Webtronics</title>
        <meta name="keywords" content="Webtronics,next.js,react" />
      </Head>
        <header className={styles.header}>
            <div className="container">
              <nav>
                <Menu links={menu}/>
              </nav>
              <Titul/>
              <About/>

            </div>
          </header>
   </>
  )

}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`http://localhost:3004/homePage`)
  const home = await response.json();

  return {
      props: { home }
  }
}