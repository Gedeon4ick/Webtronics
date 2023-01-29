import styles from './Star.module.scss'
import star from '../../icons/Star.svg'
import Image from 'next/image'

interface Props {
	top: number,
	right: number,
	width?: number,
}

const Star = ({ top, right, width }: Props): JSX.Element => {
	const style = {
		top: `${top}%`,
		right: `${right}%`,
	}

	return (
		<Image width={width} src={star} alt="star" style={style} className={styles.img} />
	)
}

export default Star
