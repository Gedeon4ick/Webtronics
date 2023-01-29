import styles from '../../components/AccordionItem/AccordinItem.module.scss'

interface Props {
	item: {
		id: number,
		title: string,
		description: string
	},
	active: number,
	index: number,
	changeItem: (index: number) => void
}

const AccordionItem = ({ item, active, index, changeItem }: Props): JSX.Element => {
	let isActive = active === index ? true : false

	return (
		<div className={styles.item}>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					{item.title}
				</div>
				{isActive && <div className={styles.description}>{item.description}</div>}
				<div className={styles.icon} onClick={() => changeItem(index)}>
					<span className={isActive ? styles.active : styles.span}></span><span className={isActive ? styles.active : styles.span}></span>
				</div>
			</div>
		</div>
	)
}

export default AccordionItem
