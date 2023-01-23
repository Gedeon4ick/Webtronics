import { GetStaticProps, InferGetStaticPropsType  } from "next";
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Menu from '../components/Menu'
import styles from "../styles/Home.module.scss"
const inter = Inter({ subsets: ['latin'] })


export default function Home({home}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {menu} = home  
  return (
   <>
      <Head>
        <title>Webtronics</title>
        <meta name="keywords" content="Webtronics,next.js,react" />
      </Head>
      <div className="container">
        <header className={styles.header}>
          <nav>
            <Menu links={menu}/>
          </nav>
        </header>
      </div>
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