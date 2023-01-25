import { GetStaticProps, InferGetStaticPropsType  } from "next";
import Head from 'next/head'
import Menu from '../components/Menu/Menu'
import styles from '../components/Menu/Menu.module.scss'
import Titul from '../components/Titul/Titul'
import About from '../components/About/About';
import Techno from '../components/Techno/Techno'
import Steps from "../components/Steps/Steps";
import Asked from "../components/Asked/Asked";


export default function Home({home}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {menu, mentors, steps} = home  
  
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
              <About mentors={mentors}/>
              <Techno/>
              <Steps steps={steps}/>
              <Asked/>
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