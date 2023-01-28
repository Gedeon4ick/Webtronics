import styles from './Input.module.scss'
import { useForm } from 'react-hook-form'

interface Props {
    placeholder: string,
    name: string,
    register: any,
    textError: string,
    handleChange: Function
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({placeholder, name, register, textError, handleChange}:Props):JSX.Element => {

    return (
        <div className={styles.root}>
            <div className={styles.input}>
                <div className={styles.content} >
                    <input name={name} {...register(name)} type="text" placeholder={placeholder} onChange={(e) => handleChange(e)}/>
                </div>
            </div>
            {textError && <span className={styles.error}>{textError}</span>}
        </div>

    );
};

export default Input;
