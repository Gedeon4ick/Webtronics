import { useState } from 'react'
import TitleH2 from '../TitleH2/TitleH2'
import styles from '../../components/Asked/Ascked.module.scss'
import AccordionItem from '../AccordionItem/AccordionItem'
import Gradient from '../Gradient/Gradient'

interface Question {
	id: number,
	title: string,
	description: string
}

interface Props {
	questions: Question[]
}

const Asked = ({ questions }: Props): JSX.Element => {
	const [activeElement, setActiveElement] = useState(0)

	const changeItem = (i: number) => {
		return i === activeElement ? setActiveElement(questions.length + 1) : setActiveElement(i)
	}

	return (
		<div id="Questions" className={styles.asked}>
			<TitleH2 fontSize={styles.adaptive} title="Frequently Asked Questions" />
			<div className={styles.wrapper}>
				<div className={styles.question}>
					<div className={styles.description}>
						Do you have any kind of questions? We are here to help.
					</div>
				</div>
				<div className={styles.accordion}>
					{
						questions.map((question, i) =>
							<AccordionItem
								key={question.id}
								index={i}
								changeItem={changeItem}
								active={activeElement}
								item={question} />
						)
					}
				</div>
			</div>
			<Gradient />
		</div>
	)
}

export default Asked
