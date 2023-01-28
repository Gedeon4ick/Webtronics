import styles from '../CardTechno/CardTechno.module.scss'
import Image from 'next/image';

interface Props {
    img: string,
    name: string,

}

const CardTechno = ({img, name}:Props):JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Image src={img} alt={img}/>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default CardTechno;