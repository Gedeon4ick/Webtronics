import styles from '../styles/Steps.module.scss'

interface Props {
    style: object,
    step: {
        id: number,
        title: string,
        descr: string
    }
}


const CardStep = ({style, step}:Props):JSX.Element => {
    const {id, title, descr} = step
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
                    {descr}
                </div>
            </div>
        </div>
        
    );
};

export default CardStep;