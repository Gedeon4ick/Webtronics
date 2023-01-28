import styles from './Button.module.scss'

interface Props {
    text: string,
    handleSubmit: Function
  }

  const Button = ({ text, handleSubmit }: Props) => {
    return (
        <button onClick={handleSubmit} className={styles.button}>
            {text}
        </button>
    );
};
  
  export default Button;

  
  