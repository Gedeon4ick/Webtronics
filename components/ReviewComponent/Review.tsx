import styles from './Review.module.scss'
import { useState, useEffect, useRef } from 'react';
import TitleH2 from '../TitleH2/TitleH2';



function Review() {
   
    const [number, setNumber] = useState(1);
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(-834);
    const [width, setWidth] = useState(205)
    const [activWidth, setaAtivWidth] = useState({width: "392px"});
    const transit = useRef()

    const next = () => {
        if(number<= 1) {
            setNumber(3)
            transit.current.style.transition = 'none'
            setOffset(currentOffset => {
                return currentOffset - 3*width 
            })
            
        } else {
            transit.current.style.transition = 'transform 0.3s ease-in-out'
            setNumber(number - 1)
        }
        
        setOffset(currentOffset => {
            const newOffsett = currentOffset + width
            return newOffsett
        })
    }

    const prev = () => {
        
        if(number<= 2) {
            transit.current.style.transition = 'transform 0.3s ease-in-out'
            setNumber(number + 1)
        } else {
            transit.current.style.transition = 'none'
            setNumber(1)
            setOffset(currentOffset => {
                return currentOffset + 3*width 
            })
        }


        setOffset((currentOffset) => {
            const  newOffset = currentOffset - width
            const maxOffset = -(width * (pages.length -1))
            return  newOffset
        })
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
                    

                    <div className={styles.slider} >
                        <div className={styles.allContainer} ref={transit}
                        style={{
                            transform: `translateX(${offset}px)`
                        }}>
                            <div className={styles.card}>
                               <div  className={styles.bigImageContent} 
                                style={number===1 ? activWidth : {}}>
                                </div> 
                            </div>

                            <div className={styles.card}>
                               <div className={styles.woomanImageContent}
                                style={number===2 ? activWidth : {}}
                                ></div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.smallImageContent}
                                style={number===3 ? activWidth : {}}
                                ></div>
                            </div>
                            {/* __________________________________ */}
                            <div className={styles.card}>
                               <div  className={styles.bigImageContent} 
                                style={number===1 ? activWidth : {}}>
                                </div> 
                            </div>

                            <div className={styles.card}>
                               <div className={styles.woomanImageContent}
                                style={number===2 ? activWidth : {}}
                                ></div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.smallImageContent}
                                style={number===3 ? activWidth : {}}
                                ></div>
                            </div>
                            {/* _____________________________________ */}
                            <div className={styles.card}>
                               <div  className={styles.bigImageContent} 
                                style={number===1 ? activWidth : {}}>
                                </div> 
                            </div>

                            <div className={styles.card}>
                               <div className={styles.woomanImageContent}
                                style={number===2 ? activWidth : {}}
                                ></div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.smallImageContent}
                                style={number===3 ? activWidth : {}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
       </div>
    );
};

export default Review;



