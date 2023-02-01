import styles from './Hero.module.scss'
import Button from '../Button/Button'
import Gradient from '../Gradient/Gradient'

const Hero = () => {
	return (
		<div className='container'>
			<div className={styles.wrapper}>
				<div className={`${styles.element} ${styles.front}`}>
					<h1>Front-End</h1>
				</div>
				<div className={styles.element}>
					<div className={styles.descr}>
						Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
					</div>
				</div>
				<div className={styles.element}>
					<Button text={"Start my career change"} />
				</div>
				<div className={styles.element}>
					<h1>Developer</h1>
				</div>
				<div className={`${styles.element} ${styles.develop}`}>
					<h3 className={styles.courses}>Courses</h3>
				</div>
				<Gradient position={styles.gradientRightPosition} />
				<Gradient position={styles.gradientLeftPosition} />
			</div>
		</div>
	)
}

export default Hero
