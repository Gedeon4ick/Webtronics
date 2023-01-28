import styles from './About.module.scss'
import Mentor from '../Mentor/Mentor';
import TitleH2 from '../TitleH2/TitleH2';
import wade from '../../img/wade.svg';
import kris from '../../img/kris.svg';
import robert from '../../img/robert.svg';
import Stars from '../Stars/Stars';

interface Props {
    mentors: {
        id: number,
        name: string,
        descr: string,
        img: string,
        center: boolean
    }[],
}

const About = ({mentors}:Props) => {
    return (
        <div>
            <TitleH2 title={"About Us"}/>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        Mentors
                    </div>
                    <div className={styles.cards}>
                        {mentors.map(mentor => {
                            const img = mentor.img == 'wade' ? wade : mentor.img == 'kris' ? kris : mentor.img == 'robert' ? robert : ''
                            return <Mentor key={mentor.id} mentor={mentor} img={img} />
                        })}
                    </div>
                </div>
                <div className={styles.descr}>
                    Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
                </div>
            <Stars top={-10} right={30}/>
            <Stars top={-13} right={50}/>
            <Stars top={0} right={70} width={50}/>

            </div>
        </div>
    );
};

export default About;