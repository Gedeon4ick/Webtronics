import TitleH2 from './TitleH2';
import styles from '../styles/Techno.module.scss'
import CardTechno from './CardTechno';
import angular from '../img/angular.svg';
import react from '../img/react.svg'
import vue from '../img/vue.svg'
import js from '../img/js.svg'


const Techno = () => {
    return (
        <div className={styles.techno}>
            <TitleH2 title={"Programming technologies"}/>
            <div className={styles.subtitle}>
                By the end, you’ll have the portfolio and interview skills you need to start your new career.
            </div>
            <div className={styles.cards}>
                <CardTechno img={angular} name={"Angular"}/>
                <CardTechno img={react} name={"React"}/>
                <CardTechno img={vue} name={"Vue.js"}/>
                <CardTechno img={js} name={"JavaScript"}/>
            </div>
        </div>
    );
};

export default Techno;