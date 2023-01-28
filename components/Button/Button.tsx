import styles from "./Button.module.scss";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
