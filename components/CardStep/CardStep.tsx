import styles from '../CardStep/CardStep.module.scss'
import { Step } from '../Steps'

interface Props {
    gridConfig: Record<string, string>,
    step: Step
}

const CardStep = ({ gridConfig, step}:Props):JSX.Element => {
    const {id, title, description} = step
    return (
        <div style={{ ...gridConfig }} className={styles.next}>
            <div  className={styles.card}>
                <div className={styles.title}>
                    Step {id}
                </div>
                <div className={styles.subtitle}>
                    {title}
                </div>
                <div className={styles.descr}>
                    {description}
                </div>
            </div>
        </div>
        
    )
}

export default CardStep
