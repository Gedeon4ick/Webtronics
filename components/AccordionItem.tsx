import { idText } from 'typescript';
import styles from '../styles/Asked.module.scss'

const AccordionItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.content}>
            What is the price?

            </div>
        </div>
    );
};

export default AccordionItem;