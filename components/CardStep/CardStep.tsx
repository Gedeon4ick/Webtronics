import styles from '../CardStep/CardStep.module.scss'

interface Props {
    style: object,
    step: {
        id: number,
        title: string,
        description: string
    }
}


const CardStep = ({style, step}:Props):JSX.Element => {
    const {id, title, description} = step
    return (
        <div style={style} className={styles.next}>
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
        
    );
};

export default CardStep;
