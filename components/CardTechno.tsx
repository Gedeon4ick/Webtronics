import styles from '../styles/Techno.module.scss'
import Image from 'next/image';

interface Props {
    img: string,
    name: string
}

const CardTechno = ({img, name}:Props):JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Image src={img} alt={img}/>
            <div className={styles.name}>
                {name}
            </div>
        </div>
    );
};

export default CardTechno;