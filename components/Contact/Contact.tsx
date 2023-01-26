import styles from './Contact.module.scss'
import TitleH2 from '../TitleH2/TitleH2';
import Input from '../Input/Input';
import Button from '../Button/Button';


const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.content}>
                <TitleH2 title={"Contact us"}/>
                <div className={styles.subtitle}>
                    Do you have any kind of help please contact with us.
                </div>
                <Input placeholder="Name"/>
                <Input placeholder="Phone"/>
                <Input placeholder="E-mail"/>
                <Button text={"Send"}/>
                
            </div>
        </div>
    );
};

export default Contact;