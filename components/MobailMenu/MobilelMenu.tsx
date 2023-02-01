import { useState, useEffect } from 'react'
import styles from './MobileMenu.module.scss'
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

const MobailMenu = ({ links, active, setActive }: Props): JSX.Element => {
	const [previousOverflow, setPreviousOverflow] = useState('');

	useEffect(() => {
		if(active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
  }, [active]);

	return (
		<div className={active ? `${styles.mobailMenu} ${styles.active}` : styles.mobailMenu}
		onClick={() => setActive(false)}>
				<div className={styles.blur}/>
			<div className={styles.menu} onClick={e => e.stopPropagation()}>
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
		</div>

	)
}

export default MobailMenu
