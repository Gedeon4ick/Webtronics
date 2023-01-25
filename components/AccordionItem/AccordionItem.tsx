import styles from '../../components/AccordionItem/AccordinItem.module.scss'

const AccordionItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.content}>
                What is the price?
                {/* <div className="content">{content}</div>
                <div className="icon">
                    <span className={isActive ? 'active' : ''}></span><span className={isActive ? 'active' : ''}></span>
                </div> */}
            </div>
        </div>
    );
};

export default AccordionItem;