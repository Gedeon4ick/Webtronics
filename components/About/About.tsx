import styles from './About.module.scss'
import Mentor from '../Mentor/Mentor'
import TitleH2 from '../TitleH2/TitleH2'
import Star from '../Star/Star'

interface Mentor {
    id: number,
    name: string,
    description: string,
    img: string,
    center: boolean
}

interface Props {
    mentors: Mentor[]
}

const About = ({mentors}:Props) => {
    return (
        <div>
            <TitleH2 title="About Us"/>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        Mentors
                    </div>
                    <div className={styles.cards}>
                    {mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor} img={require(`../../img/${mentor.img}`)} />)}
                    </div>
                </div>
                <div className={styles.description}>
                    Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
                </div>
            <Star top={-10} right={30}/>
            <Star top={-13} right={50}/>
            <Star top={0} right={70}/>
            <Star top={-10} right={5} width={30}/>
            </div>
        </div>
    )
}

export default About
