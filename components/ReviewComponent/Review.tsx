import styles from './Review.module.scss'
import { useState } from 'react';
import TitleH2 from '../TitleH2/TitleH2';
import photo from '../../img/Subtract.svg'
import Image from 'next/image';

function Review() {
    const [number, setNumber] = useState(1);

    const next = () => {
        if(number<= 2) {
            setNumber(number + 1)
        } else {
            setNumber(1)
        }
    }

    const prev = () => {
        if(number<= 1) {
            setNumber(3)
        } else {
            setNumber(number - 1)
        }
    }

    return (
       <div className={styles.review}>
        <TitleH2 title={"Review"}/>
            <div className={styles.wrapper}>
                <div className={styles.descr}>
                    <div className={styles.title}>
                        Best courses ever
                    </div>
                    <div className={styles.subtitle}>
                        Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.
                    </div>
                </div>
                

                <div className={styles.sliderWrapper}>
                    <div className={styles.sliderHead}>
                        <div className={styles.number}>
                            <span>{number}/</span> 3 
                        </div>
                        <div className={styles.poiner}>
                            <button className={styles.next} onClick={next}>
                                <div className={styles.btnContent}><span></span><span></span></div>
                            </button>
                            <button className={styles.prev} onClick={prev}>
                                 <div className={styles.btnContent}><span></span><span></span></div>
                            </button>
                        </div>
                    </div>
                    

                    <div className={styles.slider}>
                        <div className={styles.bigImage}>
                            <div className={styles.bigImageContent}></div>
                        </div>
                        <div className={styles.bigImage}>
                            <div className={styles.smallImageContent}></div>
                        </div>
                        <div className={styles.bigImage}>
                            <div className={styles.smallImageContent}></div>
                        </div>

                    </div>
                </div>
            </div> 
       </div>
    );
};

export default Review;



