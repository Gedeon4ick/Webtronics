import styles from "../styles/Menu.module.scss"
import Image from 'next/image'
import Logo from "../icons/logo.svg"

type Link = {
    id: number;
    name: string;
    href: string;
}

const Menu = ({ links }: {links: Link[]}): JSX.Element => {
    return (
            <div className={styles.menu}>
                <div className={styles.img}>
                    <Image src={Logo} alt="logo" />
                </div>
                <ul className={styles.ul}>
                    {links.map(link => 
                        <li className={styles.li} key={link.id}>
                            <a className={styles.a} href={link.href}>{link.name}</a>
                        </li>
                    )}
                </ul>
            </div>
    )
};


export default Menu;





