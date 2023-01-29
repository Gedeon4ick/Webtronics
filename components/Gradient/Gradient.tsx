import styles from './Gradient.module.scss'

interface Props {
	top: number,
	right: number,
	index?: number,
	background?: string
}

const Gradient = ({ top, right, index, background }: Props): JSX.Element => {
	const style = {
		top: `${top}%`,
		right: `${right}%`,
		zIndex: `${index}`,
		background: `${background}`
	}
	return (
		<div style={style} className={styles.gradient}></div>
	)
}

export default Gradient
