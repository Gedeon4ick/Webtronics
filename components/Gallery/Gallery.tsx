import styles from './Gallery.module.scss'
import TitleH2 from '../TitleH2/TitleH2'
import dev1 from '../../img/grid/developer 1.png'
import dev2 from '../../img/grid/developer 2.png'
import dev3 from '../../img/grid/developer 3.png'
import dev4 from '../../img/grid/deloper 4.png'
import Gradient from '../Gradient/Gradient'

import Image from 'next/image'

const Gallery = () => {
	return (
		<div className={styles.gallery}>
			<TitleH2 title="Gallery" />
			<div className={styles.wrapper}>
				<div className={styles.item}>
					By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.
				</div>
				<div className={styles.item}>
					<Image src={dev1} alt="developer"></Image>
				</div>
				<div className={styles.item}>
					<Image src={dev2} alt="developer"></Image>
				</div>
				<div className={styles.item}>
					<Image src={dev3} alt="developer"></Image>
				</div>
				<div className={styles.item}>
					If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.
				</div>
				<div className={styles.item}>
					<Image src={dev4} alt="developer"></Image>
				</div>
			</div>
			<Gradient index={-1} />
		</div>
	)
}

export default Gallery
