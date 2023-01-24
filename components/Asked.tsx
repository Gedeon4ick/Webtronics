import TitleH2 from "./TitleH2";
import styles from '../styles/Asked.module.scss'
import AccordionItem from '../components/AccordionItem'

const Asked = () => {
    return (
        <div className={styles.asked}>
            <TitleH2 title={"Frequently Asked Questions"}/>
            <div className="wrapper">
                <div className="question">
                    <div className="descr">
                        Do you have any kind of questions? We are here to help.
                    </div>
                </div>
                <div className="accordion">
                    <AccordionItem/>
                </div>  
            </div>
        </div>
    );
};

export default Asked;