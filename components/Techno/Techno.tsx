import TitleH2 from '../TitleH2/TitleH2';
import styles from './Techno.module.scss'
import CardTechno from '../CardTechno/CardTechno';
import angular from '../../img/angular.svg';
import react from '../../img/react.svg'
import vue from '../../img/vue.svg'
import js from '../../img/js.svg'
import Gradient from '../Gradient/Gradient';


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
            <Gradient top={-20} right={-20}/>
            <Gradient top={60} right={70}/>
        </div>
    );
};

export default Techno;