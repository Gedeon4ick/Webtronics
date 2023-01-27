
import styles from './Input.module.scss'

interface Props {
    placeholder: string
}

const Input = ({placeholder}:Props):JSX.Element => {
    return (
        <div className={styles.input}>
            <div className={styles.content} >
                <input type="text" placeholder={placeholder}/>
            </div>
        </div>
    );
};

export default Input;