import styles from './Mentor.module.scss'
import Image from 'next/image'

interface Props {
	mentor: {
		id: number,
		name: string,
		description: string,
		img: string,
		center: boolean
	},
	img: string
}

const Mentor = ({ mentor, img }: Props): JSX.Element => {
	return (
		<div className={styles.card}>
			<Image src={img} alt={mentor.img} className={styles.img} />
			<div className={styles.name}>
				{mentor.name}
			</div>
			<div className={styles.subtitle}>
				{mentor.description}
			</div>
		</div>
	)
}

export default Mentor
