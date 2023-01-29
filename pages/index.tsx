import { GetStaticProps, InferGetStaticPropsType } from "next"
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

export default function Home({ home }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { menu, mentors, steps, questions } = home

	return (
		<>
			<Head>
				<title>Webtronics</title>
				<meta name="keywords" content="Webtronics,next.js,react" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
			</Head>
			<header className={styles.header}>
				<div className="container">
					<nav>
						<Menu links={menu} />
					</nav>
					<Hero />
				</div>
			</header>
			<div className="container">
				<About mentors={mentors} />
				<Techno />
				<Steps steps={steps} />
				<Asked questions={questions} />
				<Review />
				<Gallery />
				<Contact />
			</div>
			<footer className={styles.footer}>
				<div className={styles.content}>
					<div className="container">
						<Footer links={menu} />
					</div>
				</div>
			</footer>
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
