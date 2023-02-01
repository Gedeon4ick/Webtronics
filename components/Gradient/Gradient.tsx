import styles from './Gradient.module.scss'

interface Props {
	position?: string
}

const Gradient = ({ position }: Props): JSX.Element => {

	return (
		<div className={`${styles.gradient} ${position}`}></div>
	)
}

export default Gradient
