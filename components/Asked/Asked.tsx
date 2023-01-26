import { useState } from "react";
import TitleH2 from "../TitleH2/TitleH2";
import styles from '../../components/Asked/Ascked.module.scss'
import AccordionItem from '../AccordionItem/AccordionItem'
import Image from "next/image";
import qustion from '../../img/qustion.svg'

interface Props {
    questions: {
        id: number,
        title: string,
        descr: string
    }[]
}


const Asked = ({questions}:Props):JSX.Element => {
    const [activeEl, setActiveEl] = useState(0)

    const changeItem = (i:number) => {
        return i === activeEl ? setActiveEl(null) : setActiveEl(i)
      }

    return (
        <div className={styles.asked}>
            <TitleH2 title={"Frequently Asked Questions"}/>
            <div className={styles.wrapper}>
                <div className={styles.question}>
                    <div className={styles.descr}>
                        Do you have any kind of questions? We are here to help.
                    </div>
                </div>
                <div className={styles.accordion}>
                    {
                        questions.map((question, i) => 
                        <AccordionItem 
                          key={question.id} 
                          index={i}
                          changeItem={changeItem}
                          active={activeEl}
                          item={question}/>
                        )
                    }
                </div>  
            </div>
        </div>
    );
};

export default Asked;