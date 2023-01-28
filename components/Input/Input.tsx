import styles from './Input.module.scss'

interface Props {
    placeholder: string,
    name: string,
    register: any,
    textError?: string,
}

const Input = ({placeholder, name, register, textError }:Props):JSX.Element => {

    return (
        <div className={styles.root}>
            <div className={styles.input}>
                <div className={styles.content} >
                    <input name={name} {...register(name)} type="text" placeholder={placeholder}/>
                </div>
            </div>
            {textError && <span className={styles.error}>{textError}</span>}
        </div>

    );
};

export default Input;
