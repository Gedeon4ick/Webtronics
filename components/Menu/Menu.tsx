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
	links: LinkMenu[]
}

const Menu = ({ links }: Props): JSX.Element => {
	return (
		<div className={styles.menu}>
			<div className={styles.img}>
				<Image src={Logo} alt="logo" />
			</div>
			<ul className={styles.ul}>
				{links.map(link =>
					<li className={styles.li} key={link.id}>
						<Link className={styles.a} to={link.href} spy={true} smooth={true} duration={700} offset={-50}>{link.name}</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Menu
