import styles from './Stars.module.scss'
import star from '../../icons/Star.svg'
import Image from 'next/image';

interface Props {
    top: number,
    right: number,
    width?: number
}

const Stars = ({top, right, width}:Props):JSX.Element => {
    const style = {
        top: `${top}%`,
        right: `${right}%`,
        width: `${width}px`
    }

    return (
        <Image src={star} alt="star" style={style} className={styles.img}/>
    );
};

export default Stars;