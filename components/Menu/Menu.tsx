import styles from '../Menu/Menu.module.scss'
import Image from 'next/image'
import Logo from '../../icons/logo.svg'
import { Link } from 'react-scroll/modules'


type LinkMenu = {
	id: number;
	name: string;
	href: string;
}

interface Props {
	links: LinkMenu[],
	active: boolean,
	setActive: Function
}

const Menu = ({ links, setActive, active }: Props): JSX.Element => {
	return (
		<div className="container">
			<div className={styles.menu}>
			<div className={styles.img}>
				<Image src={Logo} alt="logo" />
			</div>
			<div onClick={() => setActive(!active)} className={styles.hamburger}><span/><span/><span/></div>
			<ul className={styles.ul}>
				{links.map(link =>
					<li className={styles.li} key={link.id}>
						<Link className={styles.a} to={link.href} spy={true} smooth={true} duration={700} offset={-50}>{link.name}</Link>
					</li>
				)}
			</ul>
		</div>
		</div>
		
	)
}

export default Menu
