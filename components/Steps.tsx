import styles from '../styles/Steps.module.scss'
import CardStep from "./CardStep";
import TitleH2 from "./TitleH2";


interface Props {
    steps: {
        id: number,
        title: string,
        descr: string,
    }[],
}

const Steps = ({steps}:Props):JSX.Element => {
    let delta = 0;
    const content = steps.map((step, i) => {
        const n: number = i + 1;
        const attitude: string = `${n+delta}/${n+2+delta}`
        const style: object = {
            gridRow: attitude
        }
        if( n%2 == 0 ) delta++
        return <CardStep style={style} step={step} key={step.id}/>
    })


    return (
        <div className={styles.steps}>
            <TitleH2 title={"Steps"}/>
            <div className={styles.grid}>
                {content}
            </div>
        </div>
    );
};

export default Steps;