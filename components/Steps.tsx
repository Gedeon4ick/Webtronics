import styles from '../styles/Steps.module.scss'
import CardStep from "./CardStep";
import TitleH2 from "./TitleH2";

const Steps = () => {
    return (
        <div className={styles.steps}>
            <TitleH2 title={"Steps"}/>
            <CardStep/>
        </div>
    );
};

export default Steps;