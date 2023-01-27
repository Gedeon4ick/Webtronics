
import styles from './Input.module.scss'

interface Props {
    placeholder: string,
    handleChange: Function,
    name: string
}

const Input = ({placeholder, handleChange, name}:Props):JSX.Element => {
    return (
        <div className={styles.input}>
            <div className={styles.content} >
                <input name={name} onChange={(e) => handleChange(e) } type="text" placeholder={placeholder}/>
            </div>
        </div>
    );
};

export default Input;