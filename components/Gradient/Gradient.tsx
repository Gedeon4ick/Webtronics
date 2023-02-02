import styles from './Gradient.module.scss'

interface Props {
	position?: string
	index?: number
}

const Gradient = ({ position, index }: Props): JSX.Element => {
	const style = {
		zIndex: index
	}

	return (
		<div style={style} className={`${styles.gradient} ${position}`}></div>
	)
}

export default Gradient
