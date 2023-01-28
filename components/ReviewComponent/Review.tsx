import styles from './Review.module.scss'
import { useState, useRef } from 'react';
import TitleH2 from '../TitleH2/TitleH2';
import Gradient from '../Gradient/Gradient';
import Star from '../Star/Star';

function Review():JSX.Element {
   
    const [number, setNumber] = useState(1);
    const [offset, setOffset] = useState(-834);
    const [width, setWidth] = useState(205)
    const [activWidth, setaAtivWidth] = useState({width: "392px"});
    const transit = useRef()
    const items = [
        { title: "Simple and easy", description: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun." },
        { title: "Amazing teaching", description: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest." },
        { title: "Best courses ever", description: "Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the 'teacher' sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc." }
      ];
    const [currentItem, setCurrentItem] = useState(items[0])
    const [currentIndex, setCurrentIndex] = useState(1)

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

        if (currentIndex === items.length - 1) {
            setCurrentIndex(0);
          } else {
            setCurrentIndex(currentIndex + 1)
          }
          setCurrentItem(items[currentIndex])
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
            return  newOffset
        })

        if (currentIndex === 0) {
            setCurrentIndex(items.length - 1)
          } else {
            setCurrentIndex(currentIndex - 1)
          }
          setCurrentItem(items[currentIndex])
    }

    return (
       <div className={styles.review}>
        <TitleH2 title={"Review"}/>
            <div className={styles.wrapper}>
                <div className={styles.descr}>
                    <div className={styles.title}>
                        {currentItem.title}
                    </div>
                    <div className={styles.subtitle}>
                        {currentItem.description}
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
                               <div  className={styles.manImageContent} 
                                style={number===1 ? activWidth : {}}>
                                </div> 
                            </div>

                            <div className={styles.card}>
                               <div className={styles.woomanImageContent}
                                style={number===2 ? activWidth : {}}
                                ></div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.teenagerImageContent}
                                style={number===3 ? activWidth : {}}
                                ></div>
                            </div>
                            {/* __________________________________ */}
                            <div className={styles.card}>
                               <div  className={styles.manImageContent} 
                                style={number===1 ? activWidth : {}}>
                                </div> 
                            </div>

                            <div className={styles.card}>
                               <div className={styles.woomanImageContent}
                                style={number===2 ? activWidth : {}}
                                ></div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.teenagerImageContent}
                                style={number===3 ? activWidth : {}}
                                ></div>
                            </div>
                            {/* _____________________________________ */}
                            <div className={styles.card}>
                               <div  className={styles.manImageContent} 
                                style={number===1 ? activWidth : {}}>
                                </div> 
                            </div>

                            <div className={styles.card}>
                               <div className={styles.woomanImageContent}
                                style={number===2 ? activWidth : {}}
                                ></div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.teenagerImageContent}
                                style={number===3 ? activWidth : {}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <Gradient top={30} right={-10} index={-1}/>
            <Gradient top={-10} right={70}/>
            <Star top={40} right={-5} width={30}/>
       </div>
    )
}


export default Review
