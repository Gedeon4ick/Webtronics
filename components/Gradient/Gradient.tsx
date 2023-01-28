import styles from './Gradient.module.scss'

interface Props {
    top: number,
    right: number,
    index?: number
}

const Gradient = ({top, right, index}:Props):JSX.Element => {
    const style = {
        top: `${top}%`,
        right: `${right}%`,
        zIndex: `${index}`
    }
    return (
        <div style={style} className={styles.gradient}></div>
    );
};

export default Gradient;