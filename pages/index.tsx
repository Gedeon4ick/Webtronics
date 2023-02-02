import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useState } from "react"
import Head from 'next/head'
import Menu from '../components/Menu/Menu'
import styles from '../components/Menu/Menu.module.scss'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Techno from '../components/Techno/Techno'
import Steps from '../components/Steps/Steps'
import Asked from '../components/Asked/Asked'
import Review from '../components/ReviewComponent/Review';
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import MobailMenu from "../components/MobailMenu/MobilelMenu"

export default function Home({ home }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { menu, mentors, steps, questions } = home
	const [menuActive, setMenuActive] = useState(false)

	return (
		<>
			<Head>
				<title>Webtronics</title>
				<meta name="keywords" content="Webtronics,next.js,react" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
			</Head>
			<header className={styles.header}>
				<nav>
					<MobailMenu active={menuActive} setActive={setMenuActive} links={menu} />
					<Menu links={menu} setActive={setMenuActive} active={menuActive}/>
				</nav>
				<Hero />
			</header>
			<div className="container">
				<About mentors={mentors} />
				<Techno />
				{/* <Steps steps={steps} /> */}
				<Asked questions={questions} />
				<Review />
				{/* <Gallery />
				<Contact /> */}
			</div>
			{/* <footer className={styles.footer}>
				<div className={styles.content}>
					<div className="container">
						<Footer links={menu} />
					</div>
				</div>
			</footer> */}
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(`http://localhost:3004/homePage`)
	const home = await response.json()

	return {
		props: { home }
	}
}
