import styles from './Button.module.scss'

interface Props {
    text: string,
    handleSubmit: Function
  }

  const Button: React.FC<Props> = ({ text, handleSubmit }) => {
    const submit = (e) => {
      handleSubmit(e)
    }
    return (
      <button onClick={submit} className={styles.button}>
        {text}
      </button>
    );
  };
  
  export default Button;

  
  