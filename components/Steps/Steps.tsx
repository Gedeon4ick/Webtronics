import styles from '../Steps/Steps.module.scss'
import CardStep from '../CardStep/CardStep'
import TitleH2 from '../TitleH2/TitleH2'
import Gradient from '../Gradient/Gradient'
import Star from '../Star/Star'

export interface Step {
	id: number,
	title: string,
	description: string,
}

interface Props {
	steps: Step[]
}

const Steps = ({ steps }: Props): JSX.Element => {
	let delta = 0
	const content = steps.map((step, i) => {
		const n: number = i + 1
		const attitude: string = `${n + delta}/${n + 2 + delta}`
		const style: Record<string, string> = {
			gridRow: attitude
		}
		if (n % 2 == 0) delta++
		return <CardStep gridConfig={style} step={step} key={step.id} />
	})

	return (
		<div className={styles.steps}>
			<TitleH2 title="Steps" />
			<div className={styles.grid}>
				{content}
			</div>
			<Gradient top={30} right={70} />
			<Star top={0} right={70} width={30} />
			<Star top={30} right={90} />
			<Star top={30} right={-5} width={30} />
			<Star top={40} right={30} />
			<Star top={60} right={0} />

		</div>
	)
}

export default Steps
