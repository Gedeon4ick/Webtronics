import styles from './TitleH2.module.scss'

interface Props {
    title: string;
}

const TitleH2: React.FC<Props> = ({title}) => {
    return (
        <h2 className={styles.title}>
            {title}
        </h2>
    );
};

export default TitleH2;