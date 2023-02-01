import styles from './TitleH2.module.scss'

interface Props {
	fontSize?: string,
	title: string
}

const TitleH2: React.FC<Props> = ({ title, fontSize }) => {
	
	return (
		<h2 className={`${styles.title} ${fontSize}`}>
			{title}
		</h2>
	)
}

export default TitleH2
